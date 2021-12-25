import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import MenuStore from "./MenuStore"
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    MenuStore
  }
})
