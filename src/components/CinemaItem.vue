<template>
  <li class="cinema-item">
    <div class="poster block-center">
      <img class="poster-img pointer" :src="imgSrc" @click.stop="clickPoster"/>
    </div>
    <p class="title" >{{title}}</p>
    <p class="location">{{location}}</p>
  </li>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.cinema-item{
    position: relative;
    width: 590px;
    height:240px;
    border-width: 0px;
}

.poster-img{
    width: 140px;
    height: 180px;
    border-width: 0px;
    position: absolute;
    left: 30px;
    top:30px;
}

.title{
    left: 200px;
    top:30px;
    position: absolute;
    width: 280px;
    height: 45px;
    font-size: 16px;
    text-align: left;
    border-width: 0px;
}
.location{
    left: 200px;
    top: 100px;
    width: 280px;
    height: 110px;
    position: absolute;
    border-width: 0px;
    font-size: 12px;
}
</style>
