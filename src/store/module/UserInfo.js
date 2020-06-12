const state = {
  // 设置属性 用来存储数据
  message: {},
  localuser: {},
  isLogin: false
}

const getters = {
  // 对应方法 用来获取属性的状态
  getMessage: state => state.message
}

const mutations = {
  // 更改属性的状态
  setMessage (state, data) {
    state.message = data
  }
}

const actions = {
  // 应用 mutation
  setUser ({commit}, data) {
    commit('setMessage', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
