<template>
  <div class="row login">
    <div class="col-md-6 col-md-offset-3">
      <div class="login-wrap">
        <h2 class="login-title"><small>LOGIN</small></h2>
        <form class="login-form" @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="username">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
          </div>
          <button type="submit" class="btn btn-default login-submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      const url = 'http://localhost:3000/login';
      Axios.post(url, {
        username: this.username,
        password: this.password,
      }).then((response) => {
        console.log(response);
      }, (error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
        }
      });
    }
  }
}
</script>

<style>
  .login-wrap {
    padding-top: 97px;
  }
  h2.login-title  {
    letter-spacing: 4px;
    margin-bottom: 20px;
  }
</style>
