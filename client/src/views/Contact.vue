<template>
  <div class="row">
    <div class="main col-md-6 col-md-offset-3">
      <div class="contact">
        <h2 class="contact-title"><small>CONTACT</small></h2>
        <br>
        <div class="alert alert-danger alert-dismissible" v-if="error">
          <span class="close" aria-label="close" v-on:click="onClose">&times;</span>
          <strong>Error!</strong> An error occurred, please try again.
        </div>
        <div class="alert alert-success alert-dismissible" v-if="sent">
          <span class="close" aria-label="close" v-on:click="onClose">&times;</span>
          <strong>Message Sent!</strong>
        </div>
        <div v-if="saving">Saving Changes...</div>
        <form v-else role="form" @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="email">
          </div>
          <div class="form-group">
            <label for="subj">Subject:</label>
            <input type="text" class="form-control" placeholder="Enter subject" id="subj" v-model="subject">
          </div>
          <div class="form-group">
            <label>Message:</label>
            <textarea rows="5" class="form-control" type="text" v-model="message"></textarea>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {defaultClient as apolloClient} from "@/main";
  import { CONTACT_ME } from "@/views/graph";

  export default {
    name: 'Contact',
    components: {},
    data() {
      return {
        saving: false,
        email: '',
        subject: '',
        message: '',
        sent: false,
        error: false
      }
    },
    mounted: function () {},
    methods: {
      onSubmit: async function() {
        const { email, subject, message } = this;
        apolloClient.query({
          query: CONTACT_ME,
          variables:{ email, subject, message },
        })
        .then(() => {
          this.email = '';
          this.subject = '';
          this.message = '';
          this.saving = false;
          this.sent = true;
        })
        .catch(err => {
          console.log(err);
          this.error = true;
        });
      },
      onClose: function() {
        this.sent = false;
        this.error = false;
      }
    },
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
