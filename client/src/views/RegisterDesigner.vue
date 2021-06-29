<template>
  <section id="register-page">
        <div class="flex items-center min-h-screen dark:bg-gray-100">
          <div class="container mx-auto">
              <div class="bg-gray-50 max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                  <div class="text-center">
                      <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign Up</h1>
                  </div>
                    <div class="m-7">
                      <form @submit.prevent="registerDesigner">
                          <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                          <input type="hidden" name="subject" value="New Submission from Web3Forms">
                          <input type="checkbox" name="botcheck" id="" style="display: none;">
                          <div class="mb-6">
                              <label for="emailRegister" class=" block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address<span style="color:#ff0000">*</span></label>
                              <input v-model="email" type="email" name="emailRegister" id="emailRegister" placeholder="example@mail.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                              <label for="usernameRegister" class=" block mb-2 text-sm text-gray-600 dark:text-gray-400">Username<span style="color:#ff0000">*</span></label>
                              <input v-model="username" type="text" name="usernameRegister" id="usernameRegister" placeholder="example123" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                              <label for="passwordRegister" class=" block mb-2 text-sm text-gray-600 dark:text-gray-400">Password<span style="color:#ff0000">*</span></label>
                              <input v-model="password" type="password" name="passwordRegister" id="passwordRegister" placeholder="Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                              <label for="phoneNumber" class="text-sm text-gray-600 dark:text-gray-400">Phone Number<span style="color:#ff0000">*</span></label>
                              <input v-model="phoneNumber" type="text" name="phoneNumber" id="phoneNumber" placeholder="+(62)8112345678" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                            <label for="address" class="text-sm text-gray-600 dark:text-gray-400">Address<span style="color:#ff0000">*</span></label>
                            <input v-model="address" type="text" name="address" id="address" placeholder="example street, example residence" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                              <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign Up</button>
                          </div>
                        </form>
                  </div>
              </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RegisterDesigner',
    data () {
    return {
      email: '',
      username: '',
      password: '',
      phoneNumber: '',
      address: ''
    }
  },
  methods: {
      registerDesigner () {
      const input = {
        email: this.email,
        username: this.username,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address
      }

      this.$store.dispatch('registerDesigner', input)
    }
  }
}
</script>

<style>

</style>