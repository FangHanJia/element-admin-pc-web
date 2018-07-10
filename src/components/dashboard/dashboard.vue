<template>
    <div class="fhj_dashboard">
        仪表盘，测试
    </div>
</template>
<script>
    import './dashboard.scss';
    export default {
        created(){
            fetch('https://api.myjson.com/bins/74163')
            .then(res =>res.json())
            .then(json=>{
                console.log(json.products);
            })
        }
    }
</script>

