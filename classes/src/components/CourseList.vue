<template>
<div class="wrapper">
  <div class="courses">
    <div class="course" v-for="course in courses" :key="course.id">
        <h4>{{ course.name }}</h4>
        <p>Instructor: {{ course.instructor }}</p>
        <div class="description-container">
          <p class="description">{{ course.description }}</p>
        </div>
        <button class="btn btn-dark">Register</button>
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
  flex-basis: 20%;
  background-color: rgb(240, 241, 243);
  border: 3px solid rgb(240, 241, 243);
  border-radius: 10px;
  padding: 15px;
}

.description-container {
  height: 200px;
}

.description {
  font-size: 14px;
}

.btn-dark {
  background-color: #008f95 !important;
  border-color: #008f95 !important;
}

.btn-dark:hover {
  background-color: #007b80 !important;
  border-color: #007b80 !important;
}

@media only screen and (max-width: 600px) {
  .course {
    flex-basis: 100%;
  }
}
</style>