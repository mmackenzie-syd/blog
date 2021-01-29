<template>
  <div class="abstracts">
    <h2 class="abstracts-title"><small>BLOG</small></h2>
    <br>
    <div v-if="!canRender">Loading...</div>
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
  import {mapActions, mapState} from "vuex";
  import 'prismjs/themes/prism.css';
  import HighlightService from "@/services/HighlightService";

  export default {
    name: 'Abstract',
    components: {},
    props: ['category', 'index'],
    data: function () {
      return {
        pages: 0,
        abstract: null,
        canRender: false,
        filter: ''
      }
    },
    computed: {
      ...mapState('abstract', ['filteredAbstracts']),
      ...mapState('abstract', ['loading']),
      getDate: function() {
        const x = this.abstract.filter;
        const mo = '' + /[a-zA-Z]+/.exec(x);
        const yr = '' + /^[0-9]+/.exec(x);
        return MonthsFullNameService[mo] + ' ' + yr;
      }
    },
    methods: {
      ...mapActions('abstract', ['getArticle']),
      ...mapActions('abstract', ['filterAbstracts']),
      getAbstract: function() {
        if (this.filteredAbstracts) {
          this.pages = this.filteredAbstracts.length;
          const index = Number(this.$route.params.page) - 1;
          this.abstract = this.filteredAbstracts[index];
          this.canRender = true; // can only render when we have an abstract
        }
      },
      extractFilterfromRoute: function() {
        return this.$route.params.month + '/' + this.$route.params.year;
      },
      onPrev: function() {
        const prevPage = Number(this.$route.params.page) - 1;
        if (prevPage > 0 ){
          this.$router.push({ path: `/blog/${this.filter}/abstract/${prevPage}` });
        }
      },
      onNext: function() {
        const nextPage = Number(this.$route.params.page) + 1;
        if (nextPage < this.pages + 1){
          this.$router.push({ path: `/blog/${this.filter}/abstract/${nextPage}` });
        }
      },
      onRead: function() {
        const id = this.abstract.articleId;
        const filter = this.extractFilterfromRoute();
        this.$router.push({ path: `/blog/${filter}/article/${id}`});
      },
      highlight: function(txt) {
        return HighlightService(txt);
      }
    },
    mounted() {
      this.filter = this.extractFilterfromRoute();
      this.getAbstract();
    },
    watch: {
      loading() {
        // this will only happen on page refresh
        if (this.loading === 0) {
          this.filterAbstracts(this.filter);
          this.getAbstract();
        }
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
