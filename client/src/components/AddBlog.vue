<template>
  <div>
    <form role="form">
    <div class="row">
      <div class="col-md-4 col-md-offset-1">
        <h2 style="margin: 0; padding: 0;"><small>ADD POST</small></h2>
      </div>
      <div class="col-md-6">
        <select class="form-control pull-right date" name="year">
          <option>15</option>
        </select>
        <select class="form-control pull-right date" name="month">
          <option>Sep</option>
        </select>
        <select class="form-control pull-right date" name="day">
          <option>2017</option>
        </select>
      </div>
      <br><br><br>
    </div>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="form-group">
          <label>Title</label>
          <input class="form-control" type="text">
        </div>
        <div class="form-group">
          <label>Abstract</label>
          <textarea rows="4" class="form-control" type="text"></textarea>
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea rows="10" class="form-control" type="text"></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <input type="submit" class="btn btn-basic pull-right" value="Save Post" style=" border: 1px solid #bbb">
        <button type="button" class="btn btn-basic pull-right" style=" border: 1px solid #bbb; margin-right: 3px;">Cancel</button>
      </div>
    </div>
  </form>
    <br>
  </div>
</template>

<script>

export default {
  name: 'AddBlog',
  components: {}
}
</script>

<style>
  .date {
    width: 80px; display: inline-block; margin-left: 0px; margin-right: 5px;
  }
</style>
