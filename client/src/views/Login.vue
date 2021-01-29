<template>
  <div class="row login">
      <div class="login-wrap">
        <div class="col-md-6 col-md-offset-3">
          <div class="alert alert-danger alert-dismissible" v-if="error">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Success!</strong> {{error}}
          </div>
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

import {mapActions, mapState} from "vuex";

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapState('user', ['authenticated']),
    ...mapState('user', ['loading']),
    ...mapState('user', ['error']),
  },
  methods: {
    ...mapActions('user', ['login']),
    onSubmit: function () {
      const { username, password } = this;
      this.login({ username, password })
    }
  },
  watch: {
    authenticated() {
      if (this.authenticated) {
        // re-direct to home page
        this.$router.push({ path: '/'});
      }
    },
    error() {
      this.username = '';
      this.password = '';
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
