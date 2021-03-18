import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import CreateCourse from '../views/CreateCourse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
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
