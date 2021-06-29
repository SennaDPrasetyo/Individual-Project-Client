<template>
  <section id="main-page">
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/02/Rustic_Industrial16.jpg);">
      <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
              <h1 class="text-gray-100 text-2xl font-semibold uppercase md:text-3xl">Inspire Your Design</h1>
              <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase
              font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Search Now</button>
          </div>
      </div>
    </div>
    <main class="my-8">
        <div class="container">
            <!-- filter by category -->
            <div class="relative">
                <input type="checkbox" id="sortbox" class="hidden absolute">
                <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
                <span class="text-gray-700 text-2xl font-medium">Category</span>
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </label>
                    <div id="sortboxmenu" class="absolute  top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10">
                    <ul class="block text-right text-gray-900">
                        <li><a href="#" class="block text-gray-700 px-3 py-2 hover:bg-gray-200">Featured</a></li>
                        <li><a href="#" class="block text-gray-700 px-3 py-2 hover:bg-gray-200">Newest</a></li>
                        <li><a href="#" class="block text-gray-700 px-3 py-2 hover:bg-gray-200">Price: Low to High</a></li>
                        <li><a href="#" class="block text-gray-700 px-3 py-2 hover:bg-gray-200">Price: High to Low</a></li>
                    </ul>
                </div>
            </div>
            <!-- Card -->
            <Card></Card>
            <!-- Page -->
            <div class="flex justify-center">
                <div class="flex rounded-md mt-8">
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></a>
                    <!-- <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>1</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>2</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>3</span></a> -->
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
                </div>
            </div>
        </div>
    </main>
  </section>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: { Card },
  created () {
      this.$store.dispatch('getAllDesigns')
  }
}
</script>
