import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const homePage = (resolve) => require(['../pages/Home'], resolve);

const filmsPage = (resolve) => require(['../pages/Film'], resolve);

const filmInfoPage = (resolve) => require(['../pages/FilmInfo'], resolve);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/films',
      component: filmsPage
    },
    {
      path: '/film-info',
      component: filmInfoPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
