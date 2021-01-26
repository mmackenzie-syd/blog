<template>
  <div>
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
    <div class="row">
      <div class="col-md-12" >
        <table  class="list-table">
          <thead>
          <th>Title</th>
          <th>Abstract</th>
          <th class="list-table-title-filter">Category</th>
          <th class="list-table-title-edit">Edit</th>
          <th class="list-table-title-delete">Delete</th>
          </thead>
          <tbody>
            <tr>
              <td class="list-table-title" ><div>hello</div></td>
              <td class="list-table-abstract" >
                <div>`<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity
                  in Web pages. This post provides an overview of the Conditional statements.</p>
                  <p>A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports
                    two conditional statements: if...else and switch.</p>`</div>
              </td>
              <td class="list-table-filter"><div>jun/2017</div></td>
              <td class="list-table-edit">
                <div>
                  <router-link class="nav-link" :to="`/admin/edit/1`">
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
     <!--     <tr ng-repeat="abstract in $ctrl.abstracts | startFrom:($ctrl.currentPage -1) * $ctrl.pageSize | limitTo:$ctrl.pageSize">
            <td class="list-table-title" ><div>{{abstract.title}}</div></td>
            <td class="list-table-abstract" ><div ng-bind="abstract.subtxt"></div></td>
            <td class="list-table-filter"><div>{{abstract.filter}}</div></td>
            <td class="list-table-edit"><div><a ui-sref="edit({ id: abstract._id, page: $ctrl.currentPage })">Edit</a></div></td>
            <td class="list-table-delete"><div><a href="#" ng-click="$ctrl.deleteBlog(abstract._id)">Delete</a></div></td>
          </tr> -->
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="btn-toolbar col-md-6">
        <button type="button" class="btn btn-default" style="width: 40px; border-radius: 0">
          &lt;
        </button>
        <div type="button" class="btn btn-default" style="text-transform: uppercase; border: 0; color: #777; letter-spacing: 1px;">
          PAGE  of
        </div>
        <button type="button" class="btn btn-default" style="width: 40px; border-radius: 0">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListBlog',
  components: {},
  methods: {
    addBlog: function() {
        this.$router.push({ path: `/admin/edit` });
    },
  },
}
</script>

<style>
  .admin-title {
    margin-top: 0;
    line-height: 1;
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
</style>
