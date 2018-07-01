<template>
    <div class="fhj_header">
        <ul class="header_title">
            <li @click="collapseChage">
                <i class="el-icon-menu"></i>
            </li>
            <li>
                <p>后台管理系统</p>
            </li>
        </ul>
        <ul class="user_info">
            <li class="full_screen">
                <i class="el-icon-rank icon_full_screen"></i>
            </li>
            <li>
                <i class="el-icon-bell"></i>
            </li>
            <li>
                <div class="user_box">
                    <img :src="defaultImg" class="user_img" />
                </div>
            </li>
            <li>
                <el-col>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link admin_info">
                            {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>关于作者</el-dropdown-item>
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </li>
        </ul>
    </div>
</template>
<script>
    import './header.scss';
    import bus from '../common/bus.js';
    export default {
        data(){
            return {
                defaultImg:'./src/assets/img/admin.png',
                userName:'',
                collapse: false,
            }
        },
        mounted(){
            // 获取用户名
            let userName = window.localStorage.getItem('ss_username');
            if(userName){
                this.userName = userName;
            }else{
                // 默认为admin
                this.userName = 'fhj-admin';
            }
        },
        methods:{
            // 退出登录
            logout(){console.log(666)
                // 移除本地存储
                window.localStorage.removeItem('ss_username');
                this.$router.push('/login');
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
                
            }
        }
    }
</script>

