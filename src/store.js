// store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    query: ''
  },
  mutations: {
    updateQuery(state, newQuery) {
      state.query = newQuery
    }
  }
})
