<template>
  <div>
    <div class="cinemas">
      <div class="cinemas-text left">区域：</div>
      <div class="cinemas-item flex-container">
       <cinema-button
        v-for="item in areas"
        :key="item"
        class="cinema-button"
        @process-click="chooseArea"
        small>
         {{item}}
       </cinema-button>
      </div>
    </div>
    <div class="booking">
      <div v-for="item in cinemas" :key="item.name" class="booking-item flex-container">
        <div class="cinema">
          <div class="cinema-name">{{item.name}}</div>
        </div>
        <div class="time-ranges flex-container">
          <div
            v-for="time in item.timeRanges"
            :key="item.name + time"
            class="time-range pointer"
            @click="chooseTime(time, item.id)">
            {{time}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CinemaButton from '@/components/Button';
import {cinemasId, district} from '@/field';
export default {
  components: {
    CinemaButton
  },
  props: ['name'],
  async created () {
    const author = this.$root.token;
    let {data} = await this.$http.post('/movie/search', {
      author,
      name: this.$route.params.name
    }, {
      headers: {author}
    });
    data = data.replace(/"/g, '');
    data = data.replace(/'/g, '"');
    data = JSON.parse(data);
    this.id = data.id;
    for (let key of district) {
      let {data} = await this.$http.post('/cinema/search', {
        district: key
      }, {
        headers: {author}
      });
      if (data) {
        data = data.replace(/'/g, '"');
        data = data.replace(/\{/g, ',{');
        data = data.substring(1);
        data = `[${data}]`;
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) data[i].timeRanges = [];
        this.cinemas = this.cinemas.concat(data);
      }
    }
    for (let id of cinemasId) {
      let {data} = await this.$http.post('/cinema/available_movies', {
        id
      }, {
        headers: {author}
      });
      data = data.replace(/'/g, '"');
      data = JSON.parse(data);
      if (data.movie_id.toString() === this.id.toString()) {
        for (let i = 0; i < this.cinemas.length; i++) {
          if (this.cinemas[i].id === id) {
            this.cinemas[i].timeRanges.push(data.stage);
          }
        }
      }
    }
  },
  data () {
    return {
      areas: ['番禺区', '天河区', '黄浦区', '白云区', '荔湾区', '花都区', '南沙区'],
      cinemas: []
    };
  },
  methods: {
    chooseArea () {
      // 选择影院地区
    },
    chooseTime (time, cinemaId) {
      this.selectCinema = cinemaId;
      const path = this.$route.path;
      this.$router.push({path: `${path}/seat`, query: {time}});
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.path.includes('seat')) {
      to.params.movie_id = this.id;
      to.params.cinema_id = this.selectCinema;
    }
    next();
  }
};
</script>

<style scoped>
.cinemas {
  border: 1px solid #000;
  margin: 30px 0;
}

.cinemas-text {
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  padding-left: 10px;
}

.cinemas-item {
  height: 80px;
  margin-left: 80px;
  align-items: center;
}

.cinema-button {
  margin-right: 15px;
}

.booking {
  margin-bottom: 50px;
}

.booking-item {
  border-top: 2px solid #CCC;
  border-bottom: 2px solid #CCC;
}

.cinema {
  background-color: #F2B7B5;
  flex-basis: 180px;
  position: relative;
  min-height: 50px;
}

.cinema-name {
  height: 20px;
  line-height: 20px;
  margin-top: -10px;
  width: 100%;
  position: absolute;
  top: 50%;
  text-align: center;
}

.time-ranges {
  flex-wrap: wrap;
  flex: 1;
}

.time-range {
  width: 180px;
  height: 50px;
  line-height: 50px;
  background-color: #d7d7d7;
  margin: 30px;
  text-align: center;
}

.time-range:hover {
  background-color: #999;
}
</style>
