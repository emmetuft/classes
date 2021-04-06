<template>
    <div>
        <div class="heading">
            <h1>My courses</h1>
        </div>
        <div v-show="empty">
            You haven't registered for any courses yet.
        </div>
        <div class="wrapper">
            <RegisteredList :registeredCourses="registeredCourses"/>
        </div>
    </div>
</template>

<script>
import RegisteredList from '@/components/RegisteredList.vue';
import axios from 'axios';

export default {
  name: 'Registration',
  components: {
    RegisteredList
  },
  data() {
    return {
      registeredCourses: []
    }
  },
  computed: {
    empty() {
      if (this.registeredCourses.length == 0) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.getRegisteredCourses();
  },
  methods: {
    async getRegisteredCourses() {
      try {
        let response = await axios.get("/api/registration");
        this.registeredCourses = response.data;
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
  padding-top: 50px;
}
</style>