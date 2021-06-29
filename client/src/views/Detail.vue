<template>
    <section id="detail-page">
        <br>
        <div class="container mx-auto px-6">
            <div class="md:flex md:items-center">
                <div class="swiper flex overflow-x-scroll w-1/2">
                  <img class="w-full h-1/2 object-cover bg-gray-300" :src="`${oneDesign.image1}`" id="slide1">
                  <img class="w-full h-1/2 object-cover bg-gray-300" :src="`${oneDesign.image2}`" id="slide2">
                  <img class="w-full h-1/2 object-cover bg-gray-300" :src="`${oneDesign.image3}`" id="slide3">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-gray-700 text-3xl">{{ oneDesign.name }}</h3><br>
                    <span class="text-gray-700 text-base">{{ oneDesign.description }}</span>
                    <hr class="my-3">
                    <div class="mt-2">
                        <label class="text-gray-500 text-sm" for="count">design by {{ oneDesign.User.email }}</label>
                    </div>
                    <div class="flex items-center mt-6">
                        <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium
                        rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Chat Now</button>
                        <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </section>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    oneDesign () {
      return this.$store.state.oneDesign
    }
  },
  methods: {
      getOneDesign () {
          const id = this.$route.params.id
          this.$store.dispatch('getOneDesign', id)
      }
  },
  created () {
      this.getOneDesign()
  }
}
</script>

<style>

</style>
