<template>
  <div class="wrapper">
    <div class="heading">
      <h1>Create a course</h1>
    </div>
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
        <button type="submit" id="create-button" class="btn btn-dark" v-on:click="createCourse()">Create course</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: "",
      description: "",
      time: "",
      duration: "",
      price: "",
      newCourse: null
    }
  },

  methods: {
    async createCourse() {
      document.getElementById("create-button").innerHTML = "Course created!";
      try {
        let response = await axios.post("/api/courses/", {
          title: this.title,
          description: this.description,
          time: this.time,
          duration: this.duration,
          price: this.price
        });
        this.newCourse = response.data;
      } catch (error) {
        console.log(error);
      }

      try {
        let response = await axios.get("/api/instructors", {
          user: this.$root.$data.user
        });
        let instructor = response.data;
        if (instructor != "") {
          //instructor exists
          try {
            await axios.put("/api/instructors", {
              course_id: this.newCourse._id
            });
          } catch (error) {
            console.log(error);
          }
        }
        else {
          //instructor doesn't exist yet
          try {
            console.log(this.newCourse);
            let instructor = await axios.post("/api/instructors", {
              name: this.instructor,
              course_id: this.newCourse._id
            });
            console.log(instructor);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }

      //document.getElementById("create-button").innerHTML = "Course created!";
      this.title = "",
      this.instructor = "",
      this.description = "",
      this.time = "",
      this.duration = "",
      this.price = ""
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
  color: #b95300;
  padding-top: 50px;
  padding-bottom: 20px;
}
.create {
  background-color: #f3f3f3;
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
  background-color: white !important;
  width: 150px;
}
</style>
