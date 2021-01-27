<template>
    <div>
      <br/>
      <div class="masonry-grid" style="height: 490px; margin-right: -10px">
        <div class="masonry-grid-sizer"></div>
        <div class="masonry-grid-item">
          <a href="https://reactjs.org/" target="_blank"><img src="/images/01.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://babeljs.io/" target="_blank"><img src="/images/02.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://webpack.js.org/" target="_blank"><img src="/images/03.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" target="_blank"><img src="/images/04.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://gruntjs.com/" target="_blank"><img src="/images/05.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://github.com/" target="_blank"><img src="/images/06.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://angularjs.org/" target="_blank"><img src="/images/07.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://nodejs.org/en/" target="_blank"><img src="/images/08.jpg"/></a>
        </div>
        <div class="masonry-grid-item">
          <a href="https://www.mongodb.com/" target="_blank"><img src="/images/09.jpg"/></a>
        </div>
      </div>
      <hr/>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Masonry from "masonry-layout";
import imagesLoaded from 'imagesloaded';

const newMasonaryInstance = function() {
  const grid = document.querySelector('.masonry-grid');
  if (grid) {
    const imgLoad = imagesLoaded( document.querySelector('.masonry-grid') );
    imgLoad.on( 'done', function() {
      new Masonry( grid, {
        columnWidth: '.masonry-grid-sizer',
        itemSelector: '.masonry-grid-item',
        percentPosition: true,
      });
      const images = document.querySelectorAll(".masonry-grid-item img");
      for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = '1';
      }
    });
  }
}

export default {
  name: 'Home',
  components: {},
  mounted: function () {
    newMasonaryInstance();
  },
}
</script>

<style>
  /*<--- FOR MASONARY PACKAGE --->*/
  .masonry-grid {
    background: #fff;
  }
  /* clear fix */
  .masonry-grid:after {
    content: '';
    display: block;
    clear: both;
  }

  /* ---- .grid-item ---- */
  .masonry-grid-sizer,
  .masonry-grid-item {
    width: 25%;
    margin-bottom: 10px;
    padding-right: 10px;
  }
  .masonry-grid-item {
    float: left;
  }
  .masonry-grid-item img {
    display: block;
    max-width: 100%;
    opacity: 0;
    -webkit-transition: opacity .5s ease;
    -moz-transition: opacity .5s ease;
    -o-transition: opacity .5s ease;
    transition: opacity .5s ease;
  }
  .masonry-grid-item a:hover img {
    filter: brightness(90%);
  }
  /*<--- MASONARY END --->*/
</style>
