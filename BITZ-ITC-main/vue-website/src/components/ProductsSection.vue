<template>
  <section id="products" class="w-full py-12 md:py-24 bg-white dark:bg-navy-900 animate-fade-in">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">Our Products</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Explore Our Software Products
          </h2>
          <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px] mx-auto">
            Discover our off-the-shelf and customizable software solutions.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div class="border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-300">
          <div class="p-8 flex flex-col items-center text-center space-y-4">
            <div class="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
              <span class="material-icons text-navy dark:text-white text-4xl">grid_view</span>
            </div>
            <h3 class="text-2xl font-bold">Product Name 1</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400">
              Brief open description of the product and its benefits.
            </p>
            <a href="#" class="text-navy dark:text-white flex items-center font-semibold text-lg">
              Learn more <span class="material-icons ml-1 text-base">chevron_right</span>
            </a>
          </div>
        </div>
        <div class="border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-300">
          <div class="p-8 flex flex-col items-center text-center space-y-4">
            <div class="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
              <span class="material-icons text-navy dark:text-white text-4xl">grid_view</span>
            </div>
            <h3 class="text-2xl font-bold">Product Name 2</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400">
              Brief description of the product and its benefits.
            </p>
            <a href="#" class="text-navy dark:text-white flex items-center font-semibold text-lg">
              Learn more <span class="material-icons ml-1 text-base">chevron_right</span>
            </a>
          </div>
        </div>
        <div class="border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-300">
          <div class="p-8 flex flex-col items-center text-center space-y-4">
            <div class="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
              <span class="material-icons text-navy dark:text-white text-4xl">grid_view</span>
            </div>
            <h3 class="text-2xl font-bold">Product Name 3</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400">
              Brief description of the product and its benefits.
            </p>
            <a href="#" class="text-navy dark:text-white flex items-center font-semibold text-lg">
              Learn more <span class="material-icons ml-1 text-base">chevron_right</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static section
</script> 