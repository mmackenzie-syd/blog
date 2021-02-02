<template>
  <div class="row about">
    <div class="col-md-10 col-md-offset-1">
      <div class="about-wrap">
        <h2 class="about-title"><small>ABOUT</small></h2>
        <h5>Last Updated on 3rd February 2021</h5>
        <div class="about-txt">
          <p>Front End Engineer is a personal blog template designed for use by software developers. The client-side code was built with Vue, Vue Router, Vuex and Apollo Client. The server-side code uses MongoDB and Apollo Server. Authentication is with JWT. The site is hosted on an Amazon, AWS, EC2 Ubuntu instance with an Nginx server.</p>
          <p>The front-page styling and design, with <a href="https://masonry.desandro.com/" target="_blank">masonry</a> image packing and upside-down navigation, was based on the <a href="http://www.wix.com" target="_blank">www.wix.com</a> template: <a href="https://www.wix.com/demone2/graphic-design-portf" target="_blank">graphic-design-portf</a>. The remainder of the styling is Bootstrap 3, with flat-buttons and controls. Code syntax highlighting is with the <a href="http://prismjs.com" target="_blank">PrismJS</a> library using the default colour scheme.</p>
          <p>The blog template is currently populated with blogs created from the 1998 Netscape manual, 'Core Javascript Guide 1.4', which is can be viewed at <a href="https://docs.huihoo.com/javascript/CoreGuideJS14/index.html" target="_blank">CoreGuideJS14</a>.</p>
          <p>The code is available for download at: <a href="https://github.com/mmackenzie-syd/blog" target=_blank>https://github.com/mmackenzie-syd/blog</a></p>
        </div>
        <router-link class="btn btn-default about-contact" to="/contact">Contact Me</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {}
}
</script>

<style>
  .about-wrap {
    padding-top: 18px;
  }
  h2.about-title  {
    letter-spacing: 4px;
    margin-bottom: 29px;
  }
  div .about-txt {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  a.btn.btn-default.about-contact {
    margin-bottom: 70px;
  }
</style>
