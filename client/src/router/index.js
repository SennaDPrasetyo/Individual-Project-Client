import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import RegisterCust from '../views/RegisterCust.vue'
import RegisterDesigner from '../views/RegisterDesigner.vue'
import MyDesign from '../views/MyDesign.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail-page/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/register/customer',
    name: 'RegisterCust',
    component: RegisterCust
  },
  {
    path: '/register/designer',
    name: 'RegisterDesigner',
    component: RegisterDesigner
  },
  {
    path: '/designer/myDesign',
    name: 'MyDesign',
    component: MyDesign
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
