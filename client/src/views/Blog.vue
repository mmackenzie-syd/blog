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
      <div class="blog-archive-posts">
        <div class="archives">
          <h4>Archived Posts</h4>
          <h4 class="openArchives"><i class="fa fa-chevron-circle-down"></i></h4>
          <h4 class="openArchives"><i class="fa fa-chevron-circle-up"></i></h4>
        </div>
        <ul class="nav nav-pills nav-stacked">
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import Axios from 'axios';

export default {
  name: 'Blog',
  components: {},
  mounted () {
    Axios
        .get('http://localhost:3000/abstracts')
        .then(response => {
          console.log('rr', response)
        })
        .catch(error => {
          console.log(error)
         // this.errored = true
        })
      //  .finally(() => this.loading = false)
  }
}
</script>

<style>
</style>
