<template>
  <li class="film-item">
    <div class="poster block-center">
      <img class="poster-img pointer" :src="imgSrc" @click.stop="clickPoster"/>
    </div>
    <my-button class="block-center" :inactive="!active" @process-click="onClick"></my-button>
  </li>
</template>

<script>
import MyButton from '@/components/Button';
export default {
  components: {
    MyButton
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    imgName: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick () {
      if (this.active) {
        // 购票
      } else {
        // 查看详情
      }
    },
    clickPoster () {
      this.$router.push(`/film-info/${this.imgName}`);
    }
  }
};
</script>

<style scoped>
.film-item {
  min-width: 180px;
}

.poster {
  width: 180px;
  padding: 5px 0;
}

.poster-img {
  width: 180px;
  height: 240px;
}
</style>
