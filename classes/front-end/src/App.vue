<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" exact-active-class="active-link" class="navbar-brand"><span style="color: #b95300"><i class="fas fa-graduation-cap"></i></span> Gradify</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/courses" exact-active-class="active-link" class="nav-link">VIEW COURSES</router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link to="/registration" exact-active-class="active-link" class="nav-link">MY COURSES</router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link to="/create" exact-active-class="active-link" class="nav-link">CREATE COURSE</router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link to="/" exact-active-class="active-link" class="nav-link" v-on:click.native="logout">LOGOUT</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>


<style>
* {
  font-family: 'Nunito Sans', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-link {
  display: block;
  font-size: 12px;
  font-weight: 600 !important;
  color: rgb(95, 95, 95) !important;
  transition: .5s;
}

.nav-item {
  margin-left: 30px;
}

.nav-link:hover {
  color: black !important;
  transition: .5s;
}

.navbar-light {
  background-color: #f3f3f3 !important;
  height: 70px;
}

.active-link {
  color: black;
}
</style>
