import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type NavigationGuardWithThis
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManageView from '@/views/ManageView.vue'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    name: 'home',
    alias: '/music',
    path: '/',
    component: HomeView
  },
  {
    name: 'about',
    path: '/about',
    component: AboutView
  },
  {
    name: 'manage',
    path: '/manage-music',
    component: ManageView
    // beforeEnter: (to, from, next) => {
    //   console.log('manage route guard')
    //   next()
    // }
  },
  {
    path: '/manage',
    redirect: { name: 'manage' } // redirect is better for SEO
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

const globalGuard: NavigationGuardWithThis<undefined> = (to, from, next) => {
  console.log({ to, from })
  next()
}

router.beforeEach(globalGuard)

export default router
