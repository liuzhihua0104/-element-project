import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'; //引入element组件库 
import 'element-ui/lib/theme-chalk/index.css'; //引入element样式文件 
Vue.use(ElementUI); //使用element

//解决菜单收缩时文字影藏不完整的问题
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  // 获取tabs列表
store.commit("getTabs")
// 设置tab
store.commit("setActiveTabs",to.name)


 

next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
