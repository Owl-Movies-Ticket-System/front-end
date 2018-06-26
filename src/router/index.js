import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const homePage = (resolve) => require(['../pages/Home'], resolve);

const filmsPage = (resolve) => require(['../pages/Film'], resolve);

const filmInfoHomePage = (resolve) => require(['../pages/FilmInfo'], resolve);
const filmInfoBookingPage = (resolve) => require(['../pages/FilmInfo/childrens/Booking'], resolve);
const filmInfoSeatPage = (resolve) => require(['../pages/FilmInfo/childrens/Seat'], resolve);

const loginPage = (resolve) => require(['../pages/Login'], resolve);

const signupPage = (resolve) => require(['../pages/Signup'], resolve);

const cinemaPage = (resolve) => require(['../pages/Cinema'], resolve);
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
      path: '/film-info/:name',
      component: filmInfoHomePage,
      children: [
        {
          path: '',
          component: filmInfoBookingPage,
          props: true
        },
        {
          path: 'seat',
          component: filmInfoSeatPage
        }
      ]
    },
    {
      path: '/login',
      component: loginPage
    },
    {
      path: '/signup',
      component: signupPage
    },
    {
      path: '/cinema',
      component: cinemaPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
