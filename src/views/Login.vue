<template>
  <div class="row login">
    <div class="col-md-6 col-md-offset-3">
      <div class="login-wrap">
        <h2 class="login-title"><small>LOGIN</small></h2>
        <form class="login-form">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password">
          </div>
          <button type="submit" class="btn btn-default login-submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {}
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
