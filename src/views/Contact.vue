<template>
  <div class="row">
    <div class="main col-md-6 col-md-offset-3">
      <div class="contact">
        <h2 class="contact-title"><small>CONTACT</small></h2>
        <br>
        <div class="contact-alert">
          <span class="contact-alert-closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
          <strong class="contact-alert-msg"></strong>
        </div>
        <form>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" placeholder="Enter email" id="email">
          </div>
          <div class="form-group">
            <label for="subj">Subject:</label>
            <input type="text" class="form-control" placeholder="Enter subject" id="subj" >
          </div>
          <div class="form-group">
            <label>Message:</label>
            <textarea rows="5" class="form-control" type="text"></textarea>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  components: {}
}
</script>

<style>
  .contact {
    margin-top: 60px;
  }
  .contact-title {
    letter-spacing: 4px;
  }
  .contact-alert {
    background-color: #2196F3;
    padding: 10px;
    color: white;
    margin-bottom: 20px;
    display: none;
  }
  .contact-alert-closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  .contact-alert-closebtn:hover {
    color: black;
  }
</style>
