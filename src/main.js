import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Calendar from './_components/Calendar';
import Home from './_components/Home';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/calendar', component: Calendar }
];

export const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
