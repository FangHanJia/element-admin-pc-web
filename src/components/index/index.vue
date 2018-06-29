<template>
    <div class="fhj_index">
        <hd></hd>
        <menus></menus>
        <div class="router_view" ref="routerView">
            <router-view ></router-view>
        </div>
    </div>
</template>
<script>
    import './index.scss';
    import bus from '../common/bus.js';
    import $ from 'jquery';
    import hd from '../header/header.vue';
    import menus from '../menus/menus.vue';
    export default {
        components:{
            hd,
            menus
        },
        created(){
            // 动态路由的显示
            bus.$on('collapse',msg=>{
                if(msg && msg == true){  
                   console.log($)
                   $('.router_view').animate({left:64},300);
                }else{
                   $('.router_view').animate({left:250},300);
                }
            });
        }
    }
</script>
