<template>
  <div class="abstracts">
    <h2 class="abstracts-title"><small>BLOG</small></h2>
    <br>
    <div id="bootstrap-overide-abstract" class="abstracts-abstract">
      <h2></h2>
      <h5>Posted on </h5>
      <br>
      <!-- <div class="clamp" ng-bind-html="abstract.subtxt"></div> remove ellipsis -->
      <div class="abstracts-subtxt"></div>
      <br>
      <button class="btn btn-default">Read More</button>
      <br>
      <br>
    </div>
    <div class="row abstracts-pagination">
      <div class="btn-toolbar col-md-6">
        <button type="button" class="btn btn-default">
          &lt;
        </button>

        <button type="button" class="btn btn-default">
          1
        </button>

        <button type="button" class="btn btn-default">
          &gt;
        </button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Abstract',
  components: {}
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
