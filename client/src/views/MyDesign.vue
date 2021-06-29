<template>
  <section id="card"><br><br>
        <div class="flex flex-col m-auto p-auto">
            <div class="pr-16 pb-12 hide-scroll-bar">
                <div class="flex flex-nowrap grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div v-for="element in myDesigns" :key="element.id" class="px-3">
                      <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <a @click.prevent="toDetailPage(element.id)" href="">
                            <div class="flex items-end justify-end h-72 w-full bg-cover" :style="`background-image: url(${element.image1})`">
                            </div>
                            </a>
                      </div>
                    </div>
                </div>
            </div>
        </div><br>
    </section>
</template>

<script>
export default {
    name: 'MyDesign',
    computed: {
        myDesigns () {
            return this.$store.state.myDesigns
        }
    },
    methods: {
        myDesign () {
            this.$store.dispatch('myDesign')
        }
    },
    created () {
        this.myDesign()
    }
}
</script>

<style>

</style>