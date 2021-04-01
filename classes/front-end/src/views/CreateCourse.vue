<template>
  <div class="wrapper">
    <div class="heading">
      <h1>Create a course</h1>
    </div>
    <form @submit.prevent="createCourse">
      <div class="create">
        <div class="row-div">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Course title:</span>
            </div>
            <input v-model="title" type="text" class="form-control">
          </div>
        </div>
        <div class="row-div">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Instructor's name:</span>
            </div>
            <input v-model="instructor" type="text" class="form-control">
          </div>
        </div>
        <div class="row-div">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Description:</span>
            </div>
            <input v-model="description" type="text" class="form-control">
          </div>
        </div>
        <div class="row-div">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Time:</span>
            </div>
            <input v-model="time" type="text" class="form-control">
          </div>
        </div>
        <div class="row-div">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Duration:</span>
            </div>
            <input v-model="duration" type="text" class="form-control">
          </div>
        </div>
        <div class="row-div">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Price:</span>
            </div>
            <input v-model="price" type="text" class="form-control">
          </div>
        </div>
        <div>
          <button type="submit" id="create-button" class="btn btn-dark">Create course</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: "",
      instructor: "",
      description: "",
      time: "",
      duration: "",
      price: ""
    }
  },

  methods: {
    async createCourse() {
      try {
        await axios.post("/api/course", {
          title: this.title,
          instructor: this.instructor,
          description: this.description,
          time: this.time,
          duration: this.duration,
          price: this.price
        });

        document.getElementById("create-button").innerHTML = "Course created!";
        this.title = "",
        this.instructor = "",
        this.description = "",
        this.time = "",
        this.duration = "",
        this.price = ""
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.heading {
  color: #008f95;
  padding-top: 50px;
  padding-bottom: 50px;
}
.create {
  background-color: rgb(240, 241, 243);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  padding: 40px;
}
.row-div {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 40px;
}
.input-group-text {
  background-color: #fff3d0 !important;
}
</style>
