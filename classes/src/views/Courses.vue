<template>
  <div class="wrapper">
    <CourseList :courses="courses"/>
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
</style>