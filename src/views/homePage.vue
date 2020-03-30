<template>
    <div style="height:100%;width:100%">
      <div class="main">
        <div class="iconDiv">
            <img src="@/assets/airplan.svg"/>
            <div style="width:10px;"></div>
            <span>世界这么大，我想去看看</span>
        </div>
        <div>
            <span class="pointer" @click="backHomepage()">首页</span>
            <div style="width:10px;"></div>
            <span style="color:black">/</span>
            <div style="width:10px;"></div>
            <span class="pointer" @click="order()">我的订单</span>
            <div style="width:10px;"></div>
            <span style="color:black">/</span>
            <div style="width:10px;"></div>
            <span class="pointer" v-if="this.$store.state.loginState === false" @click="login()">您好，请登录</span>
            <span class="pointer" v-if="this.$store.state.loginState === true" @click="logout()">退出登录</span>
            <div style="width:10px;"></div>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      state: false
    }
  },
  methods: {
    backHomepage () {
      this.$router.push({ path: '/' })
    },
    order () {
      this.$router.push({ path: '/order' })
    },
    login () {
      this.$router.push({ path: '/login' })
      // console.log(this.$route.name)
    },
    logout () {
      // localStorage.removeItem('token')
      // this.$store.commit('change')
      // console.log(this.$route.name)
      // 如果是在需要登录的页面却退出登录了，那么就要返回到首页
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        lockScroll: false,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (['book', 'order'].indexOf(this.$route.name) > -1) {
          this.$router.push({ path: '/' })
        }
        // 移除token
        localStorage.removeItem('token')
        // 更改了vuex中的登录状态
        this.$store.commit('change')
        this.$message({
          type: 'success',
          message: '退出登录成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  },
  created () {
    let token = localStorage.getItem('token')
    if (token) {
      Axios.get('http://123.57.29.99:8100/user/auth', {
        headers: {
          'token': token
        }
      }).then((response) => {
        if (response.data.code === 200) {
          this.$store.commit('login')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 4%;
        box-sizing: border-box;
        padding: 0 100px;
        background-color: #F4F4F4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .iconDiv{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(168, 164, 164);
            width:300px;
            img{
                height: 70%
            }
        }
        .iconDiv + div{
            display: flex;
            align-items: center;
            color: rgb(36, 139, 235);
        }
    }
    .main > span{
        color:rgb(135, 144, 153);
    }
    .pointer{
        cursor:pointer;
    }
</style>
