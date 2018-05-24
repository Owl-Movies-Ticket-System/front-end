<template>
  <div class="header">
    <div class="left header-button vertical-stretch">
      <img class="header-icon img-center" src="../assets/city_search.png" />
      <select class="header-input"></select>
    </div>
    <router-link tag="div" to="/home" class="left header-button page-link vertical-stretch pointer">首页</router-link>
    <router-link tag="div" to="/films" class="left header-button page-link vertical-stretch pointer">电影</router-link>
    <router-link tag="div" to="/cinema" class="left header-button page-link vertical-stretch pointer">影院</router-link>
    <router-link tag="div" to="/login" class="right header-button page-link vertical-stretch pointer">登录/注册</router-link>
    <div class="right header-button vertical-stretch pointer">
      <img class="header-icon img-center" src="../assets/search.png" />
      <input type="text" class="header-input" />
    </div>
    <div class="header-button owl pointer">OWL</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: rgb(204, 51, 51);
  height: 65px;
  font-size: 16px;
  margin-bottom: -65px;
  color: #fff;
}

.owl {
  font-family: 'Chalkduster';
  font-size: 28px;
  width: 40px;
  margin: 0 auto;
}

.header-button {
  width: 100px;
  line-height: 65px;
  text-align: center;
}

.header-icon {
  width: 15px;
  height: auto;
}

.header-input {
  width: 70px;
  height: 25px;
}

.page-link:hover {
  background-color: rgb(232, 124, 120);
}
</style>
