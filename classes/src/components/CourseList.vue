<template>
<div class="wrapper">
  <div class="courses">
    <div class="course" v-for="course in courses" :key="course.id">
      <div class="title">
        <h4>{{ course.name }}</h4>
      </div>
      <p>Instructor: {{ course.instructor }}</p>
      <div class="description-container">
        <p class="description">{{ course.description }}</p>
      </div>
      <div class="course-info">
        <p>{{ course.duration }}</p>
        <p>{{ course.time }}</p>
        <p>{{ course.price }}</p>
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
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.title {
  height: 40px;
  margin-bottom: 20px;
}

h4 {
  font-size: 18px;
}

.description-container {
  height: 140px;
  background-color: rgb(220, 223, 230);
  padding: 10px;
  margin-bottom: 15px;
}

.description {
  font-size: 14px;
}

.course-info {

}

.btn-dark {
  background-color: #008f95 !important;
  border-color: #008f95 !important;
}

.btn-dark:hover {
  background-color: #015c5f !important;
  border-color: #015c5f !important;
}

@media only screen and (max-width: 600px) {
  .course {
    flex-basis: 100%;
  }
}
</style>