<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>


<!-- Do I put <header> in this component? Or an empty header in App.vue and fill it with the navbar? -->
<template>
  <div class="wrapper">
    <nav class="flex-container">
      <a href="https://radbahn.berlin" class="flex-item">
        <img src="@/assets/TEMPORARY-radbahnSchriftzug.png" alt="Radbahn" class="logo">
      </a>
      <div class="flex-item flex-container">
        <Icon icon="ion:language-outline" class="language-icon flex-item"/>
        <Icon icon="iconamoon:menu-burger-horizontal" class="icon flex-item" /> 
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/language">Language</RouterLink> -->
      </div>
    </nav>
  </div>

  <!-- import components here -->
  <RouterView />
  
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  /* Aligns the image to the left and the icon to the right */
  align-self: center;
}

/* Height of navbar items. 5% of screen height, unless super tall, then 4% */
.logo, .icon {
  height: 5vh; 
  width: auto;
}
.language-icon {
  height: 4vh;
  width:auto;
}
@media (min-height: 800px) {
  .logo, .icon {
    height: 4vh; 
  }
  .language-icon {
    height: 3vh;
  }
}

</style>