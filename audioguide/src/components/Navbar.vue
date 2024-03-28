<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<!-- Do I put <header> in this component? Or an empty header in App.vue and fill it with the navbar? -->
<template>

  <div class="wrapper">
    <nav>
      <a href="https://radbahn.berlin"><img src="@/assets/TEMPORARY-radbahnSchriftzug.png" alt="Radbahn" class="logo" style="width:auto;height:42px;"></a>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/language">Language</RouterLink>
    </nav>
  </div>

  <!-- import components here -->
  <RouterView />
  
</template>

<style scoped>
</style>