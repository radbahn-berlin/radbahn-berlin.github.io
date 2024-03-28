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
        <Icon icon="ion:language-outline" 
        class="language-icon flex-item"/>
        <div class="dropdown flex-item">
          <div> <!-- I don't understand why, but this additional divfixes the centering... -->
            <Icon icon="iconamoon:menu-burger-horizontal" class="icon flex-item" /> 
          </div>
          <div class="dropdown-content">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/language">Language</RouterLink>
          </div>
        </div>
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
  align-self: center;
  line-height:0;   /* this FINALLY fixed the misalignment of the logo and the rest of the flex-items... */
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


.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}

</style>