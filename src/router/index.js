import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const homePage = (resolve) => require(['../pages/Home'], resolve);

const filmsPage = (resolve) => require(['../pages/Film'], resolve);

const loginPage = (resolve) => require(['../pages/Login'], resolve);

const signupPage = (resolve) => require(['../pages/Signup'], resolve);
export default new Router({
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
      path: '/login',
      component: loginPage
    },
    {
      path: '/signup',
      component: signupPage
    }
  ]
});
