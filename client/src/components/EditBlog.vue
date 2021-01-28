<template>
  <div>
    <div v-if="loading">Loading...</div>
    <form v-else role="form">
      <div class="row">
        <div class="col-md-4 col-md-offset-1">
          <h2 class="edit-title">
            <small>EDIT POST</small>
          </h2>
        </div>
        <div class="col-md-6">
          <select class="form-control pull-right date" name="year" v-model="form.selectedYear" v-on:change="changeDate">
            <option v-for="year in form.years" :key="year">{{year}}</option>
          </select>
          <select class="form-control pull-right date" name="month" v-model="form.selectedMonth" v-on:change="changeDate">
            <option v-for="month in form.months" :key="month">{{month}}</option>
          </select>
          <select class="form-control pull-right date" name="day" v-model="form.selectedDay">
            <option  v-for="day in form.days" :key="day">{{day}}</option>
          </select>
        </div>
        <br><br><br>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="form-group">
            <label>Title</label>
            <input class="form-control" type="text" v-model="form.title">
          </div>
          <div class="form-group">
            <label>Abstract</label>
            <textarea rows="4" class="form-control" type="text" v-model="form.subtxt"></textarea>
          </div>
          <div class="form-group">
            <label>Content</label>
            <textarea rows="10" class="form-control" type="text" v-model="form.fulltxt"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <input type="submit" class="btn btn-basic pull-right save-btn" value="Save Post">
          <button type="button" v-on:click="onCancel" class="btn btn-basic pull-right cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </form>
    <br>
  </div>
</template>

<script>
  import CalenderService from '../services/CalenderService';
  import {mapActions, mapState} from "vuex";
  import MonthsNameService from "@/services/MonthsNameService";

  export default {
    name: 'EditBlog',
    components: {},
    data () {
      return {
        id: null,
        loading: true,
        abstract: null,
        form: {
          months: [],
          years: [],
          selectedMonth: '',
          selectedDay:'',
          selectedYear: '',
          days: [],
        }
      }
    },
    computed: {
      ...mapState('article', ['article']),
      ...mapState('abstract', ['abstracts']),
    },
    mounted: function () {
      this.id = this.$route.params.id;
      //
      this.getArticle(this.id);
      this.getAbstract(this.id);
    },
    methods: {
      ...mapActions('article', ['getArticle']),
      getAbstract: function(id) {
        if (this.abstracts) {
          this.abstract = this.abstracts.find(abstract => abstract.articleId === id)
        }
      },
      onCancel: function() {
        this.$router.go(-1)
      },
      changeDate: function() {
        const { selectedMonth, selectedYear, selectedDay } = this.form;
        this.form.days = CalenderService.getDays(selectedMonth, selectedYear);
        if(selectedDay > this.days.length)
          this.form.selectedDay = this.days.length.toString();
      },

      initialiseForm: function() {
        this.form.title = this.abstract.title;
        const x = this.abstract.filter;
        const mo = '' + /[a-zA-Z]+/.exec(x);
        const month = MonthsNameService[mo];
        const year = '' + /^[0-9]+/.exec(x);
        const day = Number(this.abstract.day);

        this.form.months = CalenderService.getMonths();
        this.form.years = CalenderService.getYears();
        this.form.selectedMonth = month;
        this.form.selectedDay = day;
        this.form.selectedYear = year;
        this.form.days = CalenderService.getDays(month, year);
        this.form.subtxt = this.abstract.subtxt;
        this.form.fulltxt = this.article.fulltxt;
      }
    },
    watch: {
      article() {
        if (this.abstracts) {
          this.loading = false;
        }
      },
      abstracts() {
        const id = this.$route.params.id;
        this.getAbstract(id);
        this.loading = false;
      },
      loading() {
        this.initialiseForm();
      }
    }
  }
</script>

<style>
  .edit-title {
    margin: 0;
    padding: 0;
  }
  .date {
    width: 80px; display: inline-block; margin-left: 0px; margin-right: 5px;
  }
  .cancel-btn {
    border: 1px solid #bbb;
    margin-right: 3px;
  }
  .save-btn {
    border: 1px solid #bbb;
  }
</style>
