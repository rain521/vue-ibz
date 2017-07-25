// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router';
import $ from 'jquery';
import axios from 'axios'; //处理http请求


Vue.use(MintUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
