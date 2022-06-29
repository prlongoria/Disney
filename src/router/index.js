import { createRouter, createWebHistory } from 'vue-router'
import FavoritosView from '../views/FavoritosView.vue'
import HomeViewVue from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path:'/FavoritosView',
      name:'FavoritosView',
      component: FavoritosView


      
    }
    
  ]
})

export default router
