<template>
    <div class="fhj-login">
        <div class="login-title">后台管理系统</div>
        <div class="login-wrap">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" >
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div>
                    <el-button type="promary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
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
                        window.localStorage.setItem('ss_username',this.ruleForm.username);
                        // 跳转到首页
                        this.$router.push('/index');
                    }else {
                        return false;
                    }
                })
            }
        }
    }
</script>