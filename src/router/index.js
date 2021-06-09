import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Landing',
    component: ()=> import('../views/Landing.vue')
  },
  {
    path: '/accounts/user/create',
    name: 'UserAccountCreation',
    component: ()=> import('../views/UserAccountCreation.vue')
  },
  {
    path: '/accounts/user/access',
    name: 'UserAccountAccess',
    component: ()=> import('../views/UserAccountAccess.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
