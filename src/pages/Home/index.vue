<template>
  <div class="home">
    <carousel autoplay dots="none">
      <carousel-item>
        <div><img class="horizontal-stretch-img" src="@/assets/carousel_1.jpeg" /></div>
      </carousel-item>
      <carousel-item>
        <div><img class="horizontal-stretch-img" src="@/assets/carousel_2.jpeg" /></div>
      </carousel-item>
      <carousel-item>
        <div><img class="horizontal-stretch-img" src="@/assets/carousel_3.jpeg" /></div>
      </carousel-item>
    </carousel>
    <div class="film-area">
      <div class="box-office right">
        <div class="film-header">票房排行</div>
        <div class="box-office-item pointer"
            v-for="(item, index) in active_list" :key="index"
            @click="box_office_click(item.name)">
          <img class="box-office-img img-center" :src="item.src" alt="图片无法显示" />{{item.name}}
        </div>
      </div>
      <div class="film-list">
        <div class="film-header">
          正在热映
          <div class="right all pointer" @click="$router.push('/films')">
            全部<img style="margin-left: 3px;" class="vertical-stretch-img img-center" src="@/assets/arrow.png" />
          </div>
        </div>
        <ul class="films flex-container">
          <film-item
            v-for="(item, index) in active_list" :key="index"
            :imgSrc="item.src"
            :active="true"
            :imgName="item.name"
            @onClick="onFilmItemClick(item)">
          </film-item>
        </ul>
        <div class="film-header">
          即将上映
          <div class="right all pointer" @click="$router.push('/films')">
            全部<img style="margin-left: 3px;" class="vertical-stretch-img img-center" src="@/assets/arrow.png" />
          </div>
        </div>
        <ul class="films flex-container">
          <film-item
            v-for="(item, index) in inactive_list" :key="index"
            :imgSrc="item.src"
            :active="false"
            :imgName="item.name"
            @onClick="onFilmItemClick(item)">
          </film-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from 'iview/src/components/carousel';
import CarouselItem from 'iview/src/components/carousel-item';
import FilmItem from '@/components/FilmItem';
export default {
  components: {
    Carousel,
    CarouselItem,
    FilmItem
  },
  async created () {
    const author = this.$root.token;
    if (!author) return;
    let { data } = await this.$http.post('/movie/all', {
      author,
      name: 'hahaha'
    }, {
      headers: {author}
    });
    data = data.replace(/'/g, '"');
    data = data.replace(/\{/g, ',{');
    data = data.substring(1);
    data = '[' + data + ']';
    data = JSON.parse(data);
    this.active_list = data.map(item => {
      return Object.assign({}, item, {src: `${this.$root.imgBase}/img?img=${item.poster}`});
    });
    this.inactive_list = data.map(item => {
      return Object.assign({}, item, {src: `${this.$root.imgBase}/img?img=${item.poster}`});
    });
  },
  data () {
    return {
      active_list: [],
      inactive_list: []
    };
  },
  methods: {
    box_office_click (filmname) {
      // 点击票房排行中的电影项
      this.$router.push(`/film-info/${filmname}`);
    },
    onFilmItemClick (item) {
      this.$router.push(`/film-info/${item.name}`);
    }
  }
};
</script>

<style scoped>
.film-area {
  margin-top: 30px;
  padding: 15px;
}

.film-list {
  margin-right: 25%;
}

.all {
  font-size: 16px;
  color: #E87C78;
}

.all:hover {
  text-decoration: underline;
}

.films {
  padding: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
}

.box-office {
  width: 20%;
}

.box-office-item {
  border-bottom: 1px solid #E87C78;
  height: 70px;
  line-height: 70px;
  font-size: 16px;
}

.box-office-item:hover {
  background-color: #E87C78;
  color: white;
}

.box-office-img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.film-header {
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  font-size: 20px;
}
</style>
