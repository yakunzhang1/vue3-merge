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
        name: 'Home',
        component: () => import('../pages/home/index.vue')
      },
      {
        path: '/test1',
        name: 'Test1',
        component: () => import('../pages/test1/index.vue')
      },
      {
        path: '/test2',
        name: 'Test2',
        component: () => import('../pages/test2/index.vue')
      },
      {
        path: '/test3',
        name: 'Test3',
        component: () => import('../pages/test3/index.vue')
      },
      {
        path: '/choosefoods',
        name: 'ChooseFoods',
        component: () => import('../pages/chooseFoods/index.vue')
      },
    ]
  },
  {
    path: '/404',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})