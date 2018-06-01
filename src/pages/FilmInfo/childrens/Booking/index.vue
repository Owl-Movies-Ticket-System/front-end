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
            @click="chooseTime(time)">
            {{time}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CinemaButton from '@/components/Button';

export default {
  components: {
    CinemaButton
  },
  props: ['name'],
  data () {
    return {
      areas: ['番禺区', '天河区', '黄浦区', '白云区', '荔湾区', '花都区', '南沙区'],
      cinemas: [
        {
          name: 'abc',
          timeRanges: ['11:40', '13:00', '14:20', '15:10', '16:05', '17:00', '17:55', '19:15']
        },
        {
          name: 'def',
          timeRanges: ['11:40', '13:00', '14:20', '15:10']
        }
      ]
    };
  },
  methods: {
    chooseArea () {
      // 选择影院地区
    },
    chooseTime (time) {
      const path = this.$route.path;
      this.$router.push({path: `${path}/seat`, query: {time}});
    }
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
