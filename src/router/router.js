import Vue from 'vue';
import VueRouter from 'vue-router';

// 全局使用路由
Vue.use(VueRouter);

// 引入组件
import login from '../components/login/login.vue';
import index from '../components/index/index.vue';
import dashboard from '../components/dashboard/dashboard.vue';

const router = new VueRouter({
    routes:[
        // 路由重定向 
        {
            path: '/',
            redirect: 'login'
        },
        {
            path:'/index',
            redirect:'/index/dashboard'
        },
        {
            path:'/login',
            component:login,
            name:'login'
        },
        {
            path:'/index',
            component:index,
            name:'index',
            children:[
                {path:'/index/dashboard',component:dashboard,name:'dashboard'}
            ]
        }]
})

export default router;