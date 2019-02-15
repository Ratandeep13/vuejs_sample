import Vue from 'vue'
import Vuex from 'vuex'
import commonstore from './modules/common-store'

Vue.use(Vuex)

// init empty store
var store = {}

var modules = {
  commonstore
}

store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
export default store
