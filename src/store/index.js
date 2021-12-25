import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import menuStore from "./menuStore"
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    menuStore
  }
})
