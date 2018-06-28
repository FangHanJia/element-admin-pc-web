<template>
    <div class="fhj_index">
        <hd></hd>
        <menus></menus>
    </div>
</template>
<script>
    import './index.scss';
    import hd from '../header/header.vue';
    import menus from '../menus/menus.vue';
    export default {
        components:{
            hd,
            menus
        }
    }
</script>
