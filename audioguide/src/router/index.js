import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useContent } from '../content/useContent.js'


// Get the content
const { content } = useContent()

// Generate the routes for the content
const contentRoutes = content.value.map((item, index) => ({
  path: `/${index}`,
  name: `content${index}`,
  component: () => import('../views/ContentView.vue'),
  props: { activeIndex: index }
}))

const routes = [

    // Experimenting 
    {
      path: '/test',
      name: 'test',
      component: () => import('../experimenting/Test.vue')
    },

    {
      path: '/testHtml',
      name: 'testHtml',
      component: () => import('../experimenting/Testhtml.vue')
    },
    {
      path: '/testPath',
      name: 'testPath',
      component: () => import('../experimenting/TestPath.vue')
    },
    // end of experimenting


    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/content',
    //   name: 'content',
    //   component: () => import('../views/ContentView.vue')
    // },
    
    {
      path: '/language',
      name: 'language',
      component: () => import('../views/Language.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    },

    ...contentRoutes
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

export default router
