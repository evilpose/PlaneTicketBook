import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入 element 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 解决重复点击一个页面跳转报错的问题
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
