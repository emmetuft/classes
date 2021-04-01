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
}
.heading {
  color: #008f95;
  margin-top: 50px;
}
</style>