<template>
  <div>
    <div class="heading">
      <h1>Open courses</h1>
    </div>
    <div v-show="empty">
      There are currently no available courses.
    </div>
    <div class="wrapper">
      <CourseList :courses="courses"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'
import axios from 'axios';

export default {
  name: 'Courses',
  components: {
    CourseList
  },
  data() {
    return {
      courses: []
    }
  },
  computed: {
    empty() {
      if (this.courses.length == 0) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.getCourses();
  },
  methods: {
    async getCourses() {
      try {
        let response = await axios.get("/api/courses");
        this.courses = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.heading {
  color: #008f95;
  margin-top: 50px;
}
</style>