import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CourseView.vue'
import CourseView from '../views/CourseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/courses',
      name: 'courses',
      component: CourseView,
    },
  ],
})

export default router
