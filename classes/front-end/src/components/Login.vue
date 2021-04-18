<template>
<div class="container">
  <form>
    <div>
      <div class="heading">Register for an account</div>
      <input placeholder="first name" class="form-control" v-model="firstName">
      <input placeholder="last name" class="form-control" v-model="lastName">
    </div>
    <div>
      <input placeholder="username" class="form-control" v-model="username">
      <input type="password" placeholder="password" class="form-control" v-model="password">
    </div>
    <div>
      <button type="submit" class="btn btn-dark" @click.prevent="register">Register</button>
    </div>
  </form>
  <p v-if="error" class="error">{{error}}</p>
  <form class="pure-form space-above">
    <div>
      <div class="heading">Login</div>
      <input placeholder="username" class="form-control" v-model="usernameLogin">
      <input type="password" placeholder="password" class="form-control" v-model="passwordLogin">
    </div>
    <div>
      <button type="submit" class="btn btn-dark" @click.prevent="login">Login</button>
    </div>
  </form>
  <p v-if="errorLogin" class="error">{{errorLogin}}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
    }
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.username || !this.password)
        return;
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin)
        return;
      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>
.space-above {
  margin-top: 50px;
}
.container {
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}
.heading {
  color: rgb(44, 44, 44);
  font-size: 28px;
}
input {
  margin-right: 10px;
  margin-bottom: 10px;
}
.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}
</style>