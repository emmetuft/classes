import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let data = {
  courses: mock,
  registeredCourses: []
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
