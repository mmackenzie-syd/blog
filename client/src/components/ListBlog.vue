<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="list">
      <div class="row">
        <div class="col-md-6">
          <h2 class="admin-title" ><small>ADMIN</small></h2>
        </div>
        <div class="btn-toolbar col-md-6">
          <button class='btn btn-default pull-right' v-on:click="addBlog">Add Blog</button>
        </div>
      </div>
      <br>
    </div>
    <div class="row" id="blog-table">
      <div class="col-md-12" >
        <table  class="list-table">
          <thead>
          <th>Title</th>
          <th>Abstract</th>
          <th class="list-table-title-filter">Category</th>
          <th class="list-table-title-edit">Edit</th>
          <th class="list-table-title-delete">Delete</th>
          </thead>
          <tbody class="fixed-height">
            <tr v-for="abstract in abstractsPerPage" :key="abstract.title">
              <td class="list-table-title" ><div class="list-table-title-ellipsis">{{abstract.title}}</div></td>
              <td class="list-table-abstract" >
                <div>{{abstract.subtxt}}</div>
              </td>
              <td class="list-table-filter"><div>{{abstract.filter}}</div></td>
              <td class="list-table-edit">
                <div>
                  <router-link class="nav-link" :to="`/admin/edit/${abstract.articleId}`">
                    Edit
                  </router-link>
                </div>
              </td>
              <td class="list-table-delete">
                <div>
                  <a href="#">Delete</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="btn-toolbar col-md-6">
        <button type="button" class="btn btn-default" style="width: 40px; border-radius: 0" v-on:click="onPrev">
          &lt;
        </button>
        <div type="button" class="btn btn-default" style="text-transform: uppercase; border: 0; color: #777; letter-spacing: 1px;">
          PAGE  {{page}} of {{pages}}
        </div>
        <button type="button" class="btn btn-default" style="width: 40px; border-radius: 0" v-on:click="onNext">
          &gt;
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'ListBlog',
  data () {
    return {
      loading: true,
      perPage: 5,
      pages: 1,
      page: 1,
      abstractsPerPage: [],
    }
  },
  methods: {
    addBlog: function() {
        this.$router.push({ path: `/admin/edit` });
    },
    setData: function() {
      if (this.abstracts) {
        this.page = Number(this.$route.params.page);
        this.pages = Math.ceil(this.abstracts.length /this.perPage);
        const start = (this.page - 1) * this.perPage;
        const end = start + this.perPage;
        this.abstractsPerPage = this.abstracts.slice(start, end);
      }
    },
    onPrev: function() {
      const prevPage = Number(this.$route.params.page) - 1;
      if (prevPage > 0 ){
        this.$router.push({ path: `/admin/list/${prevPage}` });
      }
    },
    onNext: function() {
      const nextPage = Number(this.$route.params.page) + 1;
      if (nextPage < this.pages + 1){
        this.$router.push({ path: `/admin/list/${nextPage}` });
      }
    },
  },
  computed: {
    ...mapState('abstract', ['abstracts']),
  },
  mounted() {
    this.loading = false;
    this.setData()
  },
  watch: {
    abstracts() {
      this.loading = false;
      this.setData();
    },
    $route() {
      this.setData();
    }
  }
}
</script>

<style>
  .admin-title {
    margin-top: 0;
    line-height: 1;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  table {
    table-layout: fixed;
    margin-bottom: 20px;
  }
  th {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #ddd;
  }
  td {
    padding: 5px;
    border-bottom: 1px solid #eee;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  tr:last-child td {
    border-bottom: 0px;
  }
  table div {
    height: 60px;
    overflow: hidden;
  }
  .list-table-abstract {
    width: 50%;
  }
  .list-table-title {
    width: 20%;
  }
  .list-table-title-ellipsis {
    white-space: nowrap;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-table-edit,
  .list-table-delete {
    width: 8%;
  }
  .list-table-title-edit,
  .list-table-title-delete,
  .list-table-title-filter {
    text-align: center;
  }
  .list-table-filter,
  .list-table-edit,
  .list-table-delete {
    text-align: center;
  }
  #blog-table {
    min-height: 466px;
  }
</style>
