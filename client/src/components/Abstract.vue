<template>
  <div class="abstracts">
    <h2 class="abstracts-title"><small>BLOG</small></h2>
    <br>
    <div v-if="loading">Loading...</div>
    <div v-else id="abstract" class="abstracts-abstract">
      <h2>{{abstract.title}}</h2>
      <h5>Posted on {{abstract.day}} {{getDate}}</h5>
      <br>
      <div class="abstracts-subtxt" v-html="highlight(abstract.subtxt)"></div>
      <br>
      <button class="btn btn-default" v-on:click="onRead">Read More</button>
      <br>
      <br>
    </div>
    <div class="row abstracts-pagination">
      <div class="btn-toolbar col-md-6">
        <button type="button" class="btn btn-default" v-on:click="onPrev">
          &lt;
        </button>
       <button type="button" class="btn btn-default">
          {{$route.params.page}}
        </button>
        <button type="button" class="btn btn-default" v-on:click="onNext">
          &gt;
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import MonthsFullNameService from '../services/MonthsFullNameService';
  import {mapState} from "vuex";
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
        pages: 0
      }
    },
    computed: {
      ...mapState('abstract', ['filteredAbstracts']),
      getDate: function() {
        const x = this.abstract.filter;
        const mo = '' + /[a-zA-Z]+/.exec(x);
        const yr = '' + /^[0-9]+/.exec(x);
        return MonthsFullNameService[mo] + ' ' + yr;
      }
    },
    methods: {
      getAbstract: function() {
        if (this.filteredAbstracts) {
          this.pages = this.filteredAbstracts.length;
          const index = Number(this.$route.params.page) - 1;
          this.abstract = this.filteredAbstracts[index];
          this.loading = false;
        }
      },
      extractFilterfromRoute: function() {
        return this.$route.params.month + '/' + this.$route.params.year;
      },
      onPrev: function() {
        const prevPage = Number(this.$route.params.page) - 1;
        const filter = this.extractFilterfromRoute();
        if (prevPage > 0 ){
          this.$router.push({ path: `/blog/${filter}/abstract/${prevPage}` });
        }
      },
      onNext: function() {
        const nextPage = Number(this.$route.params.page) + 1;
        const filter = this.extractFilterfromRoute();
        if (nextPage < this.pages + 1){
          this.$router.push({ path: `/blog/${filter}/abstract/${nextPage}` });
        }
      },
      onRead: function() {
        const id = this.abstract.articleId;
        const filter = this.extractFilterfromRoute();
        this.$router.push({ path: `/blog/${filter}/article/${id}`});
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
      this.getAbstract();
    },
    watch: {
      filteredAbstracts() {
        this.getAbstract();
      },
      $route() {
        this.getAbstract();
      }
    }
  }
</script>

<style>
  .abstracts-abstract {
    height: 445px;
  }
  .abstracts-title {
    margin: 0;
    line-height: 1;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .abstracts-abstract {
    padding: 15px;
    background-color: rgba(221, 221, 221, 0.2);
  }
  .abstracts-abstract button {
    background-color: rgba(221, 221, 221, 0.2);
    border-radius: 0;
  }
  .abstracts-pagination {
    margin-top: 20px;
  }
  .abstracts-pagination button {
    width: 45px;
  }
  /* hide text after */
  .abstracts-subtxt {
    /*  border: 1px solid black; */
  }
  .abstracts-subtxt p {
    /* line-height: 20px;
     margin-bottom: 20px; *//* must equal line-height to prevent ugly truncanation on overflow */
  }
  /* ALTERNATIVE TO ELLIPSIS CODE */
  .abstracts-subtxt {
    /* position: relative;*/
    height: 240px; /* corresponds to 12 lines */
    overflow: hidden;
  }
  /*
  .abstracts-subtxt:after {
      content: "";
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 30%;
      height: 1.2em;
      background: linear-gradient(to right, rgba(248, 248, 248, 0), rgba(248, 248, 248, 1) 50%);
  } */

</style>
