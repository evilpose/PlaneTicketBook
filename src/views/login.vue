<template>
  <div class="home">
    <div style="position:absolute;top:0px;left:0px;color:white;font-size:25px;padding:10px 30px;font-family:Georgia">
      <span>Airline</span> | <span>孟氏航空公司</span>
    </div>
    <div class="loginDiv" v-if="check==true">
      <span style="line-height: 1.5;font-size: 30px;color:#3983e5">登录</span>
      <div style="height:3px;width:30px;background-color:#3983e5;margin-left:15px;"></div>
      <div class="inputDiv">
        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
        <div style="height:20px"></div>
        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
        <div style="height:20px"></div>
        <!-- 登录按钮 -->
        <div class="loginbtn pointer" @click="submit()"><span>登录</span></div>
        <div style="height:20px"></div>
        <div class="Other">
          <span class="pointer">找回密码</span>
          <span class="pointer" @click="loginOrregister()">注册</span>
        </div>
      </div>
      <span style="font-family: serif;color:#3983e5;font-size:13px">世界这么大，我想去看看，那就出发吧！</span>
    </div>
    <!-- 这个是注册的 -->
    <div class="loginDiv" v-else>
      <span style="line-height: 1.5;font-size: 30px;color:#3983e5">注册</span>
      <div style="height:3px;width:30px;background-color:#3983e5;margin-left:15px;"></div>
      <div class="inputDiv">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="registerphone">
            <el-input v-model="ruleForm.registerphone"  placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="registerpassword">
            <el-input type="password" v-model="ruleForm.registerpassword"  placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item prop="registerpasswordagain">
            <el-input type="password" v-model="ruleForm.registerpasswordagain"  placeholder="请再次确认密码" show-password></el-input>
          </el-form-item>
          <!-- 获取手机验证码 -->
          <el-form-item class="mySelection" prop="VerificationCode">
            <el-input  v-model="ruleForm.VerificationCode"  placeholder="请输入验证码"></el-input>
            <div class="code pointer">
            <span v-show="show" @click="getPhoneCode()">获取验证码</span>
            <span v-show="!show">重新发送({{count}})</span>
          </div>
          </el-form-item>
        </el-form>
        <div class="loginbtn pointer" @click="register('ruleForm')"><span>注册</span></div>
        <div style="height:20px"></div>
        <div class="Other">
          <span class="pointer">找回密码</span>
          <span class="pointer" @click="loginOrregister()">登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import allApi from '../request/allApi.js'
export default {
  name: 'login',
  components: {
    // HelloWorld
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.registerpassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.ruleForm.registerphone))) {
          callback(new Error('请输入正确合适的手机号'))
        }
        callback()
      }
    }
    return {
      check: true,
      phone: '',
      password: '',
      ruleForm: {
        name: '',
        registerphone: '',
        registerpassword: null,
        registerpasswordagain: '',
        VerificationCode: ''
      },
      show: true,
      count: '',
      timer: null,
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        registerpassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        registerpasswordagain: [
          { validator: validatePass, trigger: 'blur' }
        ],
        registerphone: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        VerificationCode: [
          { required: true, message: '请输入手机验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      if (this.phone === 'admin' || this.password === 'admin') {
        console.log('进入首页')
        this.$router.push({ path: '/homePage' })
      } else {
        this.$message.error('账户或者密码错误！')
      }
    },
    loginOrregister () {
      if (this.check === true) {
        this.phone = ''
        this.password = ''
      } else {
        this.name = ''
        this.registerphone = ''
        this.registerpassword = ''
        this.registerpasswordagain = ''
      }
      this.check = !this.check
    },
    // 注册提交校验
    register (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          // console.log(typeof this.ruleForm.name)
          // console.log(typeof this.ruleForm.registerphone)
          // console.log(typeof this.ruleForm.registerpassword)
          // console.log(typeof this.ruleForm.registerpasswordagain)
          Axios.post(allApi.loginUrl, {
            username: this.ruleForm.name,
            phone: this.ruleForm.registerphone,
            password: this.ruleForm.registerpassword,
            password2: this.ruleForm.registerpasswordagain
          }).then((response) => {
            console.log(response)
          }).catch((error) => {
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getPhoneCode () {
      this.getCode()
    },
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        console.log('请求')
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  },
  created () {
    console.log(allApi.loginUrl)
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    background-image: url('../assets/bgc3.jpg');
    background-size:100% 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    box-sizing: border-box;
    padding: 0 100px;
    .loginDiv{
      width: 400px;
      background-color: white;
      border-radius: 20px;
      box-sizing: border-box;
      padding: 30px;
      .inputDiv{
        height: 80%;
        width: 100%;
        box-sizing: border-box;
        padding:20px 0 0 0;
        .loginbtn{
          width: 100%;
          height: 40px;
          background-color: #3983e5;
          color: white;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loginbtn:active{
          background-color: #ccc
        }
        .Other{
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: space-between;
          color: #ccc;
          font-size: 14px;
          span:hover{
            color: #3983e5
          }
        }
      }
    }
  }
  .pointer{
    cursor:pointer;
  }
  .code{
    background-color:#3983e5;
    height:40px;
    border-radius: 4px;
    width:30%;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left: 10%;
  }
  .code:active{
    background-color: #ccc
  }
</style>
<style lang="scss">
  div[class~=mySelection] > div{
    display: flex;
    .el-input{
      width:60%
    }
    span{
      user-select:none;
    }
  }
</style>
