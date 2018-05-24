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
            :imgName="item.name">
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
            :imgName="item.name">
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
  data () {
    return {
      active_list: [
        {
          src: require('@/assets/Hugo.png'),
          name: '雨果'
        },
        {
          src: require('@/assets/Thor.png'),
          name: '雷神'
        },
        {
          src: require('@/assets/Warcraft.png'),
          name: '魔兽争霸'
        },
        {
          src: require('@/assets/Penguins.png'),
          name: '帝企鹅日记'
        }
      ],
      inactive_list: [
        {
          src: require('@/assets/Hugo.png'),
          name: '雨果'
        },
        {
          src: require('@/assets/Thor.png'),
          name: '雷神'
        },
        {
          src: require('@/assets/Warcraft.png'),
          name: '魔兽争霸'
        },
        {
          src: require('@/assets/Penguins.png'),
          name: '帝企鹅日记'
        }
      ]
    };
  },
  methods: {
    box_office_click (film) {
      // 点击票房排行中的电影项
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
