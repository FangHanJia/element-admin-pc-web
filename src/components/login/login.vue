<template>
    <div class="login_box">
        <div class="fhj_login">
            <div class="login_title">后台管理系统</div>
            <div class="login_wrap">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" >
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="ruleForm.password" placeholder="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                    </el-form-item>
                    <div class="login_btn">
                        <el-button type="promary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
   
</template>
<script type="text/javascript">
    import './login.scss';
    export default{
        data(){
            return {
                ruleForm:{
                    username:'admin',
                    password:'admin'
                },
                rules:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'blur'}
                    ],
                    password:[
                        {reequire:true,message:'请输入密码',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate(valid =>{
                    if(valid){
                        // 向后端发起验证请求
                        this.loading();
                        setTimeout(()=>{
                            window.localStorage.setItem('ss_username',this.ruleForm.username);
                            // 跳转到首页
                            this.$router.push('/index');
                        },1500);
                        
                    }else {
                        return false;
                    }
                })
            },
            // loading
            loading() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
            }
        }
    }
</script>