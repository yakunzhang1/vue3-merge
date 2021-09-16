import { createWebHashHistory, createRouter } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../pages/login/index.vue')
  },
  {
    path: '/',
    component: () => import('../pages/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../pages/home/index.vue')
      }
    ]
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})