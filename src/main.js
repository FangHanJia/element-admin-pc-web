import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入路由注册表
import router from './router/router.js';


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
