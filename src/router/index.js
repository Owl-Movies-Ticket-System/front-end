import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const homePage = (resolve) => require(['../pages/Home'], resolve);

const filmsPage = (resolve) => require(['../pages/Film'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/films',
      component: filmsPage
    }
  ]
});
