import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    designs: null,
    oneDesign: null
  },
  mutations: {
    GETALLDESIGNS (state, data) {
      state.designs = data
    },
    GETONEDESIGN (state, data) {
      state.oneDesign = data
    }
  },
  actions: {
    getAllDesigns (context) {
      axios({
        url: '/',
        method: 'get'
      })
      .then((result) => {
        context.commit('GETALLDESIGNS', result.data.rows)
      })
      .catch((err) => {
        console.log(err.response)
      })
    },
    getOneDesign (context, id) {
      axios({
        url: `/${id}`,
        method: 'get'
      })
      .then((result) => {
        context.commit('GETONEDESIGN', result.data)
        router.push({ path: `/detail-page/${result.data.id}` }).catch(() => {})
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
  },
  modules: {
  }
})
