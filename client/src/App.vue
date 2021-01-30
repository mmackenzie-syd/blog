<template>
  <div class="container">
    <!-- SITE HEADER -->
    <div class="site-header">
      <router-link to="/" class="site-header-brand">
        <h1>FRONT END ENGINEER</h1>
      </router-link>
      <h2><small>Javascript - Angular - React - Vue</small></h2>
    </div>
    <div class="row">
      <div class="col-md-12">
        <hr>
      </div>
    </div>
    <!-- PAGES -ie COMPONENTS -->
    <div id="spinner"></div>
    <router-view/>
    <!-- SITE MENU AT BOTTOM -->
    <div id="menu" class="site-footer">
      <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
          <li class="nav-item" :class="[(currentPath === '/') ? 'active' : '']">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item" :class="[currentPath.includes('/blog') ? 'active' : '']">
            <router-link class="nav-link" to="/blog/posts/all/abstract/1">BLOG</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
          </li>
          <li class="nav-item" v-if="!authenticated">
            <router-link class="nav-link" to="/login">LOGIN</router-link>
          </li>
          <li v-if="authenticated" class="nav-item" :class="[currentPath.includes('/admin') ? 'active' : '']">
            <router-link class="nav-link" to="/admin/list/1">ADMIN</router-link>
          </li>
          <li class="nav-item" v-if="authenticated">
            <button class="logout-btn" v-on:click="onLogout">LOGOUT</button>
          </li>
          <button class="logout-btn" v-on:click="onTestToken">Test Token</button>
        </ul>
      </nav>
      <footer>
        <p class="text-center"><span>© 2021 Mark Mackenzie</span></p>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState} from 'vuex';
import Axios from "axios";

export default {
  name: 'App',
  data () {
    return {
      currentPath: '/',
    }
  },
  computed: {
    ...mapState('user', ['authenticated']),
    ...mapState('user', ['token'])
  },
  methods: {
    ...mapActions('blog', ['getAbstracts']),
    ...mapActions('user', ['logout']),
    onLogout: function() {
      this.logout();
      // re-direct to home page
      this.$router.push({ path: '/'});
    },
    onTestToken: function() {
      const url = 'http://localhost:3000/api';
      Axios.get(url, { headers: { authorization: this.token} })
          .then(response => {
            console.log('response', response.data)
          }).catch(error => {
            console.log(error)
          });
    }
  },
  mounted() {
    this.currentPath = this.$route.path;
    this.getAbstracts();
  },
  watch: {
    $route() {
      this.currentPath = this.$route.path;
    }
  }
}

</script>

<style>

  /* <--- GENERAL STYLING ---> */
  .btn,
  .form-control {
    border-radius: 0;
  }

  .logout-btn {
    background-color: #222;
    border: 0;
    color: #9d9d9d;
    padding-left: 15px;
    padding-right: 15px;
  }

  .logout-btn:hover {
    color: #fff;
  }

  .container {
    max-width: 980px;
    position: relative;
  }
  /* <--- HEADER ---> */
  .site-header {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .site-header h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 30px;
    letter-spacing: 2px;
  }
  .site-header h1:hover {
    cursor: pointer;
  }


   a.site-header-brand {
    color: #333;
    text-decoration: none;
  }
  a.site-header-brand:hover {
    color: #595959;
    text-decoration: none;
  }
  a.site-header-brand:focus {
    color: #333;
  }

  .site-header-h2 {
    font-size: 30px;
    margin-top: 0;
  }
  /* <--- FOOTER NAV ---> */
  #menu {
    position: absolute;
    top: 770px;
    max-width: 950px;
  }

  @media (min-width: 768px) {
    #menu {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    #menu {
      max-width: 940px;
    }
  }

  @media (min-width: 1200px) {
    #menu {
      max-width: 950px;
    }
  }

  .site-footer .navbar {
    border-radius: 0;
    max-width: 950px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .navbar-nav {
    width: 100%;
    text-align: center !important;
  }
  .navbar li {
    font-weight: 700;
    letter-spacing: 0.5px;
    font-size: 14px;
    float: none;
    display: inline-block;
  }
  /* <--- FOOTER  ---> */
  footer span {
    letter-spacing: 2px;
    font-size: 13px;
  }
  .site-footer {
    margin-bottom: 0px;
    background-color: #fff;
    width: 100%;
  }
</style>
