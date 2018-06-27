import Vue from 'vue';
import VueRouter from 'vue-router';

// 全局使用路由
Vue.use(VueRouter);

// 引入组件
import login from '../components/login/login.vue';

const router = new VueRouter({
    routes:[
        // 路由重定向 
        {path: '/',redirect: 'login'},
        {path:'/login',component:login,name:'login'}
    ]
})

export default router;