<template>
  <div class="article" ref="article">
    <h2 class="article-title">
      <small><a href="#" v-on:click="goBack"><span class="glyphicon glyphicon-menu-left" style="top: 3px"></span> Go Back</a></small>
    </h2>
    <br>
    <div v-if="!canRender">Loading...</div>
    <div v-else class="article-abstract" id="article">
      <h2>{{abstract.title}}</h2>
      <h5>Posted on {{ abstract.day }} {{getDate}}</h5>
      <br>
      <div v-html="highlight(abstract.subtxt)"></div>
      <hr style="border-top: 1px solid #ddd;">
      <div v-html="highlight(article.fulltxt)"></div>
      <br>
    </div>
    <br>
  </div>
</template>

<script>
  import MonthsFullNameService from '../services/MonthsFullNameService';
  import {mapActions, mapState} from "vuex";
  import 'prismjs/themes/prism.css';
  import HighlightService from "@/services/HighlightService";

  export default {
    name: 'Abstract',
    components: {},
    data: function () {
      return {
        canRender: false,
        id: ''
      }
    },
    computed: {
      ...mapState('blog', ['article']),
      ...mapState('blog', ['abstract']),
      ...mapState('blog', ['loading']),
      getDate: function() {
        const x = this.abstract.filter;
        const mo = '' + /[a-zA-Z]+/.exec(x);
        const yr = '' + /^[0-9]+/.exec(x);
        return MonthsFullNameService[mo] + ' ' + yr;
      }
    },
    methods: {
      ...mapActions('blog', ['getArticle']),
      ...mapActions('blog', ['getAbstract']),
      goBack: function() {
        this.$router.go(-1);
        this.reSet();
      },
      highlight: function(txt){
        return HighlightService(txt);
      },
      animateArticle: function() {
        setTimeout(() => {
          const menu = document.getElementById("menu");
          const article = document.getElementById("article");
          // make menu dynamic
          menu.style.position="relative";
          menu.style.top="0";
          // slowly open article
          article.style.transition="max-height 3s";
          article.style.maxHeight="10000px";
        },100)
      },
      reSet: function() {
        // fix menu and re-set height
        const menu = document.getElementById("menu");
        menu.style.position="absolute";
        menu.style.top="770px";
        document.getElementById("article").style.maxHeight="100px";
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      this.getArticle(this.id);
      this.getAbstract(this.id);
    },
    watch: {
      loading() {
        if (this.loading === 0) {
          this.getAbstract(this.id);
          this.canRender = true;
          this.animateArticle();
        }
      }
    }
  }

</script>

<style>
  .article-title {
    margin: 0;
    line-height: 1;
    letter-spacing: 4px;
    text-transform:  uppercase;
    margin-bottom: 10px;
    text-decoration: none;
  }
  .article-abstract {
    padding: 15px;
    background-color: rgba(221, 221, 221, 0.2);
  }
  .article-title a {
    color: #777;
    text-decoration: none;
  }
  /* <--- ANIMATION ON ARTICLE ---> */
  .article {
    position: relative;
  }
  .article-abstract {
    position: relative;
    max-height: 100px; /* to cover title */
    -webkit-transition: max-height 3s; /* Safari */
    transition: max-height 3s;
    overflow: hidden
  }

  .article p {
    /* line-height: 20px;
     margin-bottom: 20px;*/ /* must equal line-height to prevent ugly truncanation on overflow */
  }
</style>
