<template>
  <div class="container">
    <!-- SITE HEADER -->
    <div class="site-header">
      <h1>FRONT END ENGINEER</h1>
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
          <li class="nav-item">
            <router-link class="nav-link" to="/login">LOGIN</router-link>
          </li>
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
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data () {
    return {
      currentPath: '/',
    }
  },
  computed: {
  },
  methods: {
    ...mapActions('abstract', ['getAbstracts'])
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
