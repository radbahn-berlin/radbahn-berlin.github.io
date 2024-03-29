<script setup>
import Navbar from './components/Navbar.vue'
import Controls from './components/Controls.vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { defineExpose } from 'vue'

// This makes it possible to access the route object in the template, for the footer to be hidden on the 404 page.
const route = useRoute()
defineExpose({ route })


</script>

<template>

  <header>
    <Navbar/>
  </header>

  <!-- RouterView retrieves the main content of the page, depending on url. -->
  <RouterView />

  <!-- Controls are only displayed on pages that are not the 404 page. -->
  <footer v-if="route.name !== 'not-found'">
    <Controls/>
  </footer>

</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
