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

        <div class="dropdown">
          <Icon icon="iconamoon:menu-burger-horizontal" class="icon flex-item dropbtn" /> 
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


.dropbtn {
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 20px 16px;
  text-decoration: none;
  display: block;
  font-size: 24px;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>