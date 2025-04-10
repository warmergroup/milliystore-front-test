<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Filter from "./components/Filter.vue";

</script>

<template>
  <div class="app">

  <Navbar/>
  <Filter/>
  </div>
</template>

<style scoped>
.app{
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #2b2a2a;
}
</style>
