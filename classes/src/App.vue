<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/" exact-active-class="active-link" class="navbar-brand">LoveToLearn</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/courses" exact-active-class="active-link" class="nav-link">View courses</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registration" exact-active-class="active-link" class="nav-link">My courses</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" exact-active-class="active-link" class="nav-link">Create a course</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-link {
    display: block;
    font-weight: 500 !important;
    color: white !important;
}

.nav-item {
  margin-left: 30px;
  border-radius: 20px;
}

.nav-item:hover {
  background-color: #e9bb31 !important;
}

.navbar-dark {
  background-color: #e9b000 !important;
}

.active-link {
  background-color: #e9bb31 !important;
  border-radius: 20px;
}
</style>
