<template>
  <div class="onLine" >
    <div id="released" class="btn" v-on:click="getAllMovies" >
      <a ><span class="text">正在热映</span></a>
    </div>
    <div id="toBeReleased" class="btn" v-on:click="getAllToBeReleasedMovies">
      <a ><span class="text">即将上映</span></a>
    </div>
    <div class="film-list">
      <ul class="films flex-container">
        <film-item v-if="released"
          v-for="(item,index) in released_list" :key="index"
          :imgSrc="item.src"
          :active="true"
          :imgName="item.name">
        </film-item>
      </ul>
      <ul class="films flex-container">
        <film-item v-if="!released"
          v-for="(item,index) in toBeReleased_list" :key="index"
          :imgSrc="item.src"
          :active="false"
          :imgName="item.name">
        </film-item>
      </ul>
    </div>
  </div>
</template>

<script>
import FilmItem from '@/components/FilmItem';
export default {
  components: {
    FilmItem
  },
  // created () {
  //   try {
  //     const {data} = this.$http.post('/movie/all');
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   };
  // },
  data () {
    return {
      released_list: [
        {
          src: require('@/assets/Hugo.png'),
          name: '雨果'
        },
        {
          src: require('@/assets/Thor.png'),
          name: '雷神'
        }
      ],
      toBeReleased_list: [
        {
          src: require('@/assets/Warcraft.png'),
          name: '魔兽争霸'
        },
        {
          src: require('@/assets/Penguins.png'),
          name: '帝企鹅日记'
        }
      ],
      released: true
    };
  },
  methods: {
    async getAllMovies (event) {
      this.released = true;
      var jb = 'jbjb';
      var {data} = await this.$http.post('/movie/all', {
        name: jb
      }, {
        headers: {
          author: this.$root.token
        }
      });
      data = data.replace(/'/g, '"');
      data = data.replace(/\{/g, ',{');
      data = data.substring(1, data.length);
      data = '[' + data + ']';
      data = JSON.parse(data);
      this.released_list = [];
      console.log(data);
      for (var x = 0; x < data.length; x++) {
        var movie = data[x];
        this.released_list.push({
          src: 'http://123.207.55.27:8080/api/img?img=' + movie['poster'],
          name: movie['name']
        });
      }
    },
    async getAllToBeReleasedMovies (event) {
      this.released = false;
      var jb = 'jbjb';
      var {data} = await this.$http.post('/movie/all', {
        name: jb
      }, {
        headers: {
          author: this.$root.token
        }
      });
      data = data.replace(/'/g, '"');
      data = data.replace(/\{/g, ',{');
      data = data.substring(1, data.length);
      data = '[' + data + ']';
      data = JSON.parse(data);
      this.toBeReleased_list = [];
      console.log(data);
      for (var x = 0; x < 2; x++) {
        var movie = data[x];
        this.toBeReleased_list.push({
          src: 'http://123.207.55.27:8080/api/img?img=' + movie['poster'],
          name: movie['name']
        });
      }
    }
  }
};
</script>
<style scoped>
.film-list {
  margin-right: 25%;
}

.films {
  position: relative;
  top: 60px;
  padding: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
}
.btn{
  cursor:pointer
}
.text{
  top: 19px;
  transform-origin: 83px 8.5px 0px;
  border-width: 0px;
  position: absolute;
  left: 2px;
  width: 166px;
  word-wrap: break-word;
  text-align: center;
  font-size:13px;
  color:black;
}

#toBeReleased,#released{
  border-width: 0px;
  position: absolute;
  width: 170px;
  height: 55px;
  font-family: 'PingFangSC-Regular', 'PingFang SC';
  font-weight: 400;
  font-style: normal;
}
#released{
  left: 40%;
  top: 65px;
}
#toBeReleased{
  left: 52%;
  top: 65px;
}
p{
  margin: 0px;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern" 1;
  -webkit-font-feature-settings: "kern";
  -moz-font-feature-settings: "kern";
  -moz-font-feature-settings: "kern=1";
  font-kerning: normal;
}
#released a:active>span,a:hover>span{
  padding-bottom: 10px;
  border-bottom: 4px solid rgba(204, 51, 51, 1);
}
#toBeReleased a:active>span,a:hover>span{
  padding-bottom: 10px;
  border-bottom: 4px solid rgba(204, 51, 51, 1);
}
</style>
