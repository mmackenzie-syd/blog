<template>
  <div class="row blog">
    <div class="col-md-9">
      <div id="blog-container">
        <router-view></router-view>
      </div>
    </div>
    <div v-if="!filteredAbstracts">...Loading</div>
    <div v-else class="col-md-3 blog-aside">
      <form @submit.prevent="onSearch">
        <div class="input-group blog-aside-search" >
          <input id="search-box" type="text" class="form-control" placeholder="Search" name="search" v-model="txt">
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
      <br>
      <div class="blog-recent-posts" v-bind:style="postsHeight">
        <div class="posts">
          <h4 style="text-transform: capitalize;">
            {{month}} {{year}}
          </h4>
          <h4 @click="openPosts" v-show="postsHide" class="openPosts"><i class="fa fa-chevron-circle-down"></i></h4>
          <h4 @click="openPosts" v-show="!postsHide" class="openPosts"><i class="fa fa-chevron-circle-up"></i></h4>
        </div>
        <ul class="nav nav-pills nav-stacked">
          <li
              v-for="(abstract, index) in filteredAbstracts"
              :key="abstract.title"
              :class="[getActiveClass(index)]"
          >
            <a>
              {{ abstract.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="blog-aside-divider">
        <hr/>
      </div>
      <div class="blog-archive-posts" v-bind:style="archiveHeight">
        <div class="archives">
          <h4>Archived Posts</h4>
          <h4 @click="openArchives" v-show="archiveHide" class="openArchives"><i class="fa fa-chevron-circle-down"></i></h4>
          <h4 @click="openArchives" v-show="!archiveHide" class="openArchives"><i class="fa fa-chevron-circle-up"></i></h4>
        </div>
        <ul class="nav nav-pills nav-stacked">
          <li v-for="category in categories" :key="category.filter" :class="[$route.path.includes(category.filter) ? 'active' : '']">
            <router-link class="nav-link" :to="`/blog/${category.filter}/abstract/1`" >
              {{ extractMonth(category.filter) }}
              {{ extractYear(category.filter) }}
              ({{ category.number }})
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'Blog',
  components: {},
  data () {
    return {
      // dropdown menu state
      archiveHide: false,
      archiveHeight: { maxHeight: '210px' },
      postsHide: false,
      postsHeight: { maxHeight: '210px' },
      txt: '',
      filteredNav: [],
      month: 'posts',
      year: 'all'
    }
  },
  computed: {
    ...mapState('blog', ['categories']),
    ...mapState('blog', ['loading']),
    ...mapState('blog', ['filteredAbstracts']),
  },
  methods: {
    ...mapActions('blog', ['filterAbstracts']),
    ...mapActions('blog', ['searchAbstracts']),
    getActiveClass: function(index) {
      if (this.$route.path.includes('/blog/search')) {
        return '';
      }
      return (Number(this.$route.params.page) === (index + 1)) ? 'active' : ''
    },
    extractMonth: function(x) {
      return '' + /[a-zA-Z]+/.exec(x);
    },
    extractYear: function(x) {
      if (x !== "posts/all") {
        return '' + /^[0-9]+/.exec(x);
      }
      return 'all';
    },
    // For open close posts
    openPosts: function(){
      if(this.postsHide){
        this.postsHide = false;
        this.postsHeight = { maxHeight: '210px' } ;
      } else {
        this.postsHide = true;
        this.postsHeight = { maxHeight: '1000px' };
      }
    },
    // For open close archives
    openArchives: function(){
      if(this.archiveHide){
        this.archiveHide = false;
        this.archiveHeight = { maxHeight: '210px' } ;
      } else {
        this.archiveHide = true;
        this.archiveHeight = { maxHeight: '1000px' };
      }
    },
    onSearch: function(){
      this.searchAbstracts(this.txt);
      if (!this.$route.path.includes('/blog/search') ){
        this.$router.push({ path: `/blog/search/1`});
      }
    }
  },
  mounted() {
    this.txt = '';
  },
  watch: {
    loading() {
      if (this.loading === 0) {
        const {month, year} = this.$route.params;
        if (!month || !year) {
          this.month = 'posts';
          this.year = 'all';
        } else {
          this.month = month;
          this.year = year;
        }
        const filter = this.month + '/' + this.year;
        this.filterAbstracts(filter);
      }
    },
    $route() {
      const {month, year} = this.$route.params;
      if (!month || !year) {
        this.month = 'posts';
        this.year = 'all';
      } else {
        this.month = month;
        this.year = year;
      }
      const filter = this.month + '/' + this.year;
      this.filterAbstracts(filter);
    }
  }
}
</script>

<style>
  .blog-recent-posts ul > li >a,
  .blog-archive-posts ul > li >a {
    text-transform: capitalize;
    border-radius: 0px;
    color: #777;
  }
  /* STYLE INACTIVE LINKS */
  /* unvisited link */
  .nav-pills > li > a:link {
    /* Not used */
  }
  /* visited link */
  .nav-pills > li > a:visited {
    /* Not used */
  }
  /* mouse over link */
  .nav-pills > li > a:hover {
    /* Not used */
  }
  /* selected link */
  .nav-pills > li > a:active {
    /* Not used */
  }
  /* has foucs */
  .nav-pills > li > a:focus {
    background-color: #fff;
  }

  /* STYLE CURRENTLY ACTIVE LINK */
  .nav-pills > li.active > a {
    color: #111;
    background-color: #fff;
  }
  .nav-pills > li.active > a:hover {
    background-color: #eee;
    color: #111;
  }
  .nav-pills > li.active > a:focus {
    color: #111;
    background-color: #fff;
  }
  /* open and closing buttons */
  .posts {
    position: relative;
  }
  .openPosts {
    position: absolute;
    right: 0;
    top: -10px;
  }
  .archives {
    position: relative;
  }
  .openArchives {
    position: absolute;
    right: 0;
    top: -10px;
  }
  .blog-recent-posts {
    max-height: 200px;
    -webkit-transition: max-height 0.5s; /* Safari */
    transition: max-height 0.5s;
    overflow: hidden;
    background-color: #fff;
    margin-left: -5px;
    margin-right: -5px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .blog-archive-posts {
    max-height: 200px;
    -webkit-transition: max-height 0.5s; /* Safari */
    transition: max-height 0.5s;
    overflow: hidden;
    background-color: #fff;
    margin-left: -5px;
    margin-right: -5px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .blog-aside {
    position: relative;
    background-color: #fff;
    z-index: 100;
    /* height: 583px; /* to prevent menu jumping when article is opened */
  }
  .blog-aside-divider {
    background-color: #fff;
    z-index: 1000;
    border: 1px solid #fff;
    margin-left: -5px;
    margin-right: -5px;
    padding-left: 5px;
    padding-right: 5px;

  }

  .blog-recent-posts ul>li a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
</style>
