import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalog from "@/views/catalog.vue"
import productCart from "@/views/productCart.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: catalog
  },
  {
    path: '/catalog/:id',
    name: 'product',
    component: productCart
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
