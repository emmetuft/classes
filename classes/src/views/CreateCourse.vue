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
          <input id="title" type="text" class="form-control">
        </div>
      </div>
      <div class="row-div">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Instructor's name:</span>
          </div>
          <input id="instructor" type="text" class="form-control">
        </div>
      </div>
      <div class="row-div">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Description:</span>
          </div>
          <input id="description" type="text" class="form-control">
        </div>
      </div>
      <div class="row-div">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Time:</span>
          </div>
          <input id="time" type="text" class="form-control">
        </div>
      </div>
      <div class="row-div">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Duration:</span>
          </div>
          <input id="duration" type="text" class="form-control">
        </div>
      </div>
      <div class="row-div">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Price:</span>
          </div>
          <input id="price" type="text" class="form-control">
        </div>
      </div>
      <div>
        <button id="create-button" class="btn btn-dark" v-on:click="create()">Create course</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  methods: {
    create() {
      var c_title = document.getElementById("title").value;
      var c_instructor = document.getElementById("instructor").value;
      var c_description = document.getElementById("description").value;
      var c_time = document.getElementById("time").value;
      var c_duration = document.getElementById("duration").value;
      var c_price = document.getElementById("price").value;

      var newCourse = {id: this.$root.$data.courses.length, name: c_title, instructor: c_instructor, description: c_description, time: c_time, duration: c_duration, price: c_price}
      this.$root.$data.courses.push(newCourse);

      document.getElementById("create-button").innerHTML = "Course created!";

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
