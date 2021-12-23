import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'; //引入element组件库 
import 'element-ui/lib/theme-chalk/index.css'; //引入element样式文件 
Vue.use(ElementUI); //使用element

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
