const state = {
  // 设置属性 用来存储数据
  message: {},
  name: '111'
}

const getters = {
  getMessage: state => state.message,
  getName: state => state.name
}

const mutations = {
  // 更改用户状态信息
  setLocalUser (state, data) {
    if (data) {
      state.name = data
    } else {
      state.name = null
    }
  },
  // 更改属性的状态
  setMessage (state, data) {
    state.message = data
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
