<template>
  <div id="app">
    <my-header></my-header>
    <div id="app-body">
      <router-view />
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/Header';
import MyFooter from '@/components/Footer';
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

#app-body {
  padding: 65px 0 90px 0;
  min-height: 100%;
}
</style>
