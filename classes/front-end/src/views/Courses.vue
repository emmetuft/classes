<template>
  <div>
    <div v-if="user">
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
    <Login v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'
import Login from '@/components/Login.vue';
import axios from 'axios';

export default {
  name: 'Courses',
  components: {
    CourseList,
    Login,
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
    },
    user() {
      return this.$root.$data.user;
    }
  },
  async created() {
    try {
      this.getCourses();
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  methods: {
    async getCourses() {
      try {
        let response = await axios.get("/api/courses/all");
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
  color: #b95300;
  margin-top: 50px;
}
</style>