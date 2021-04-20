import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/Registration.vue'
import Courses from '../views/Courses.vue'
import CreateCourse from '../views/CreateCourse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/create',
    name: 'CreateCourse',
    component: CreateCourse
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
