import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TopSecretView from '../views/TopSecretView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/secret',
      component: TopSecretView,
      beforeEnter: (to, from, next) => {
        const now = new Date();
        const evenMinutes = now.getMinutes() % 2 == 0

        // const path = evenMinutes ? "/secret" : "/"
        // next(path)

        if(evenMinutes) {
          next();
        } else {
          next("/");
        }
      }
    },
  ]
})

export default router
