import { createRouter, createWebHistory } from 'vue-router'
import postPage from '../views/postPage'
import Main from '../views/Main'

const routes = [
  {
    path: '/posts/:id',
    component: postPage
  },

  {
    path: '/',
    component: Main
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
