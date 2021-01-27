<template>
  <div class="article">
    <h2 class="article-title">
      <small><a href="#" v-on:click="goBack"><span class="glyphicon glyphicon-menu-left" style="top: 3px"></span> Go Back</a></small>
    </h2>
    <br>
    <div v-if="loading">Loading...</div>
    <div v-else class="article-abstract" id="bootstrap-overide-article" v-bind:style="articleHeight">
      <h2>{{article.title}}</h2>
      <h5>Posted on {{ abstract.day }} {{getDate}}</h5>
      <br>
     <!-- <div ng-bind-html="$ctrl.highlight($ctrl.abstract.subtxt)"></div> -->
      <div v-html="highlight(abstract.subtxt)"></div>
      <hr style="border-top: 1px solid #ddd;">
      <!-- use ng-bind-html & $sanitize to display html -->
    <!--  <div ng-bind-html="$ctrl.highlight($ctrl.article.fulltxt)" ></div> -->
      <br>
    </div>
    <br>
  </div>
</template>

<script>
  import MonthsFullNameService from '../services/MonthsFullNameService';
  import {mapActions, mapState} from "vuex";
  import Prism from 'prismjs';
  import 'prismjs/themes/prism.css';

  export default {
    name: 'Abstract',
    components: {},
    props: ['category', 'index'],
    data: function () {
      return {
        abstract: null,
        loading: true,
        articleHeight: {},
      }
    },
    computed: {
      ...mapState('article', ['article']),
      ...mapState('abstract', ['abstracts']),
      getDate: function() {
        const x = this.abstract.filter;
        const mo = '' + /[a-zA-Z]+/.exec(x);
        const yr = '' + /^[0-9]+/.exec(x);
        return MonthsFullNameService[mo] + ' ' + yr;
      }
    },
    methods: {
      ...mapActions('article', ['getArticle']),
      getAbstract: function(id) {
        if (this.abstracts) {
          this.abstract = this.abstracts.find(abstract => abstract.articleId === id)
        }
      },
      goBack: function() {
        this.$router.go(-1)
      },
      highlight: function(txt){
        if(txt === undefined)
          return '';
        // Convert any HTML code to code with colour on the fly.
        // HTML code is distiguished by '[code]' brackets. Add color to text only within these brackets.
        txt = txt.replace(/\[code\]([\s\S]*?)\[\/code\]/g, function(match, txt) {
          var html = Prism.highlight(txt, Prism.languages.html);
          return '<div class="color-code"><pre>'  +  html + '</pre></div>';
        });
        //
        // Convert any javascript code to code with colour on the fly.
        // Javascript code is distiguished by '[codejs]' brackets.
        txt = txt.replace(/\[codejs\]([\s\S]*?)\[\/codejs\]/g, function(match, txt) {
          var html = Prism.highlight(txt, Prism.languages.javascript);
          return '<div class="color-code"><pre>'  +  html + '</pre></div>';
        });
        return txt;
      }
    },
    mounted() {
      const id = this.$route.params.id;
      this.getArticle(id);
      this.getAbstract(id);
      this.articleHeight = { maxHeight: '10000px' };
    },
    watch: {
      article() {
        this.loading = false;
      },
      abstracts() {
        const id = this.$route.params.id;
        this.getAbstract(id)
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
