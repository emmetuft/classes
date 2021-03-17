<template>
<div class="wrapper">
  <div class="courses">
    <div class="course" v-for="course in courses" :key="course.id">
        <div>{{ course.name }}</div>
        <div>{{ course.instructor }}</div>
        <div>{{ course.description }}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CourseList',
  props: {
    courses: Array
  },

  methods: {

  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.courses {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.course {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
</style>