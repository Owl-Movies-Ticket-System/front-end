<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
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
}
</style>
