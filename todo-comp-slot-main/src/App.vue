<script setup>
import Nav from './views/nav.vue'
// import TodoManager from './components/TodoManager.vue';
// console.log(import.meta.env.VITE_BASE_URL)
// console.log(import.meta.BASE_KEY)

</script>

<template>
  <div class="w-full">
    <!-- <ProductList /> -->
    <Nav/>
    <router-view />
  </div>
</template>

<style scoped></style>
