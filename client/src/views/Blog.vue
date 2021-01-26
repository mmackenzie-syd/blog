<template>
  <div class="row blog">
    <div class="col-md-9">
      <div id="blog-container">
        <router-view></router-view>
      </div>
    </div>
    <div class="col-md-3 blog-aside">
      <form>
        <div class="input-group blog-aside-search" >
          <input id="search-box" type="text" class="form-control" placeholder="Search" name="search">
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
      <br>
      <div class="blog-recent-posts">
        <div class="posts">
          <h4 style="text-transform: capitalize;"> </h4>
          <h4 class="openPosts"><i class="fa fa-chevron-circle-down"></i></h4>
          <h4 class="openPosts"><i class="fa fa-chevron-circle-up"></i></h4>
        </div>
        <ul class="nav nav-pills nav-stacked">
          <li>
            <a>

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
          <li v-for="category in categories" :key="category.filter">
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
      archiveHide: false,
      archiveHeight: { maxHeight: '210px' }
    }
  },
  computed: {
    ...mapState('abstract', ['abstracts']),
    ...mapState('abstract', ['categories']),
    ...mapState('abstract', ['filteredAbstracts']),
  },
  methods: {
    ...mapActions('abstract', ['filterAbstracts']),
    extractMonth: function(x) {
      return '' + /[a-zA-Z]+/.exec(x);
    },
    extractYear: function(x) {
      if (x !== "posts/all") {
        return '' + /^[0-9]+/.exec(x);
      }
      return 'all';
    },
    applyFilter: function() {
      const { month, year } = this.$route.params;
      const filter = month + '/' + year;
      this.filterAbstracts(filter);
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
    }
  },
  mounted () {
    this.applyFilter();
  },
  watch: {
    abstracts() {
      this.applyFilter();
    },
    $route() {
      this.applyFilter();
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
  .nav-pills > li > a.router-link-exact-active {
    color: #111;
    background-color: #fff;
  }
  .nav-pills > li > a.router-link-exact-active:hover {
    background-color: #eee;
    color: #111;
  }
  .nav-pills > li > a.router-link-exact-active:focus {
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
