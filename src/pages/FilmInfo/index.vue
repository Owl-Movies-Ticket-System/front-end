<template>
  <div class="film-info">
    <div class="info">
      <div class="poster left">
        <img class="horizontal-stretch-img" :src="movie.src" :alt="movie.name" />
      </div>
      <div class="detail">
        <h1 class="detail-name">{{movie.name}}</h1>
        <div v-for="(item, index) in details" class="detail-item flex-container" :key="index">
          <div class="detail-item-header">{{item}}</div>
          <div class="detail-item-content">{{movie[movieProps[index]]}}</div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      movie: {
        name: '雨果',
        src: require('@/assets/Hugo.png'),
        director: 'abc',
        actors: 'a, b, c, d',
        type: '科幻',
        area: '法国',
        language: '英语',
        length: '120分钟',
        plot: 'blablabla'
      },
      details: ['导演', '主演', '类型', '制片国家/地区', '语言', '片长', '剧情介绍'],
      movieProps: ['director', 'actors', 'type', 'area', 'language', 'length', 'plot']
    };
  }
};
</script>

<style scoped>
.film-info {
  width: 80%;
  margin: 0 auto;
}

.info {
  margin: 30px 0;
  overflow: auto;
}

.poster {
  width: 200px;
}

.detail {
  margin-left: 230px;
}

.detail-name {
  font-size: 32px;
  font-weight: 700;
}

.detail-item {
  margin: 15px 0;
}

.detail-item-header {
  flex-basis: 100px;
  text-align: center;
}

.detail-item-content {
  flex-basis: 300px;
}
</style>
