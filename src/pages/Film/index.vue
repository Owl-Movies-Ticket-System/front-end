<template>
  <div class="onLine" >
    <button v-on:click="released=true">正在热映</button>
    <button v-on:click="released=false">即将上映</button>
    <div class="film-list">
      <ul class="films flex-container">
        <film-item v-if="released" 
          v-for="(item,index) in released_list" :key="index">
          :imgSrc="item.src"
          :active="false"
          :imgName="item.name">
        </film-item>
      </ul>
      <ul class="films flex-container">
        <film-item v-if="!released" 
          v-for="(item,index) in toBeReleased_list" :key="index">
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
  components:{
      FilmItem
  },
  data(){
      return {
      active_list: [
        {
          src: require('@/assets/Hugo.png'),
          name: '雨果'
        },
        {
          src: require('@/assets/Thor.png'),
          name: '雷神'
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
        }
        
      ]
    };
  },

}
</script>
<style scoped>
.film-list {
  margin-right: 25%;
}

.films {
  padding: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>