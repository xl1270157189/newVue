
import Vue from 'vue'
import Vuex from 'vuex'

import moduleChat from './module/ChatInfo.js'
import moduleUser from './module/UserInfo.js'

Vue.use(Vuex)

const store = {
  modules: {
    chat: moduleChat,
    user: moduleUser
  }
}

export default {
  store
}
