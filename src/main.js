// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '@/style/reset';
import 'iview/dist/styles/iview.css';
import '@/style/common';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.prototype.$http = axios.create({
  timeout: 1000
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
