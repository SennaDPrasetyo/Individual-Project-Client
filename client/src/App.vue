<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Navbar, Footer },
  methods: {
    isLoggedIn () {
      this.$store.commit('ISLOGGEDIN')
    },
    isCustomer () {
      this.$store.commit('ISCUSTOMER')
    }
  },
  created () {
    if (localStorage.access_token){
      this.isLoggedIn()
      if (localStorage.role === 'Customer'){
        this.isCustomer()
      }
    }
  }
}
</script>

<style>

</style>
