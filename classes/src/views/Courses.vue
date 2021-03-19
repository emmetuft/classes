<template>
  <div>
    <div class="heading">
      <h1>Open courses</h1>
    </div>
    <div class="wrapper">
      <CourseList :courses="courses"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'

export default {
  name: 'Home',
  components: {
    CourseList
  },
  data() {
    return {

    }
  },
  computed: {
    courses() {
      return this.$root.$data.courses;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.heading {
  color: #008f95;
  margin-top: 50px;
}
</style>