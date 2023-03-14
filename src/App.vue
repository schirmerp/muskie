<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header >
    <div class="fixed left-0 top-0 z-10 bg-sky-200 h-100px border-4 border-sky-700 w-screen m-auto">
      <nav class=" flex justify-around">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>   
  </header>

  <RouterView />
</template>

<style scoped>

</style>
