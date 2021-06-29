import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    designs: null,
    oneDesign: null,
    isLoggedIn: false,
    isCustomer: false,
    myDesigns: null
  },
  mutations: {
    GETALLDESIGNS (state, data) {
      state.designs = data
    },
    GETONEDESIGN (state, data) {
      state.oneDesign = data
    },
    MYDESIGN (state, data) {
      state.myDesigns = data
    },
    LOGIN (state, data) {
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('role', data.role)
      localStorage.setItem('username', data.username)
      state.isLoggedIn = true
      if (data.role === 'Customer') {
        state.isCustomer = true
      }
    },
    LOGOUT (state) {
      localStorage.clear()
      state.isLoggedIn = false
      state.isCustomer = false
      router.push({ name: 'Home' }).catch(() => {})
    },
    ISLOGGEDIN (state) {
      state.isLoggedIn = true
    },
    ISCUSTOMER (state) {
      state.isCustomer = true
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
    },
    login (context, input) {
      const email = input.email
      const password = input.password

      axios({
        url: '/user/login',
        method: 'post',
        data: { email, password }
      })
      .then((result) => {
        context.commit('LOGIN', result.data)
        router.push({ name: 'Home' }).catch(() => {})
      })
      .catch((err) => {
        console.log(err.response)
      })
    },
    registerCust (context, input) {
      axios({
        url: '/user/register/customer',
        method: 'post',
        data: input
      })
      .then(() => {
        router.push({ name: 'Login' })
      })
      .catch((err) => {
        console.log(err.response)
      })      
    },
    registerDesigner (context, input) {
      axios({
        url: '/user/register/designer',
        method: 'post',
        data: input
      })
      .then(() => {
        router.push({ name: 'Login' })
      })
      .catch((err) => {
        console.log(err.response)
      })      
    },
    myDesign (context) {
      axios({
        url: '/designer/myDesign',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then((result) => {
        router.push({ name: 'MyDesign' }).catch(() => {})
        context.commit('MYDESIGN', result.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
  },
  modules: {
  }
})
