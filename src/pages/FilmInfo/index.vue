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
    this.movie = Object.assign({}, data, {src: `${this.$root.imgBase}/img?img=${data.poster}`});
  },
  data () {
    return {
      movie: {},
      details: ['导演', '主演', '类型', '制片国家/地区', '语言', '片长', '剧情介绍'],
      movieProps: ['director', 'protagonist', 'types', 'area', 'language', 'len', 'introduction']
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
