import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalog from "@/views/catalog.vue"
import productCart from "@/views/productCart.vue"
import cart from "@/views/cart.vue"
import profile from "@/views/profile.vue"

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
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
