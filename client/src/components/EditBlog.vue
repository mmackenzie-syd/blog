<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="saving">Saving Changes...</div>
    <form v-else role="form" @submit.prevent="onSubmit">
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
  import MonthsReverseNameService from "@/services/MonthsReverseNameService";
  import {defaultClient as apolloClient} from "@/main";
  import {UPDATE_BLOG} from "@/components/graph";

  export default {
    name: 'EditBlog',
    components: {},
    data () {
      return {
        id: null,
        loading: true,
        saving: false,
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
      ...mapState('blog', ['article']),
      ...mapState('blog', ['abstracts']),
      ...mapState('user', ['token'])
    },
    mounted: function () {
      this.id = this.$route.params.id;
      //
      this.getArticle(this.id);
      this.getAbstract(this.id);
    },
    methods: {
      ...mapActions('blog', ['getArticle']),
      ...mapActions('blog', ['getAbstracts']),
      getAbstract: function(id) {
        if (this.abstracts) {
          this.abstract = this.abstracts.find(abstract => abstract.articleId === id)
        }
      },
      onCancel: function() {
        this.$router.go(-1);
      },
      changeDate: function() {
        const { selectedMonth, selectedYear, selectedDay } = this.form;
        this.form.days = CalenderService.getDays(selectedMonth, selectedYear);
        if (selectedDay > this.days.length) {
          this.form.selectedDay = this.days.length.toString();
        }
      },

      initialiseForm: function() {
        const { title, filter, day, subtxt } = this.abstract;
        const mo = '' + /[a-zA-Z]+/.exec(filter);
        const month = MonthsNameService[mo];
        const year = '' + /^[0-9]+/.exec(filter);

        this.form = {
          title,
          subtxt,
          fulltxt: this.article.fulltxt,
          months: CalenderService.getMonths(),
          years: CalenderService.getYears(),
          selectedMonth: month,
          selectedDay: Number(day),
          selectedYear: year,
          days: CalenderService.getDays(month, year),
        };
      },
      onSubmit: async function() {
        const {
          selectedMonth,
          selectedYear,
          selectedDay,
          subtxt,
          fulltxt,
          title,
        } = this.form;
        const filter = selectedYear + '/' +  MonthsReverseNameService[selectedMonth];
        const abstractId = this.abstract._id;
        const articleId = this.id;
        const day = selectedDay.toString();
        this.saving = true;
        apolloClient.mutate({
          mutation: UPDATE_BLOG,
          variables:{ title, filter, day, subtxt, fulltxt, abstractId, articleId },
        })
        .then(() => {
          apolloClient.resetStore().then(() => { // required to cause a data refetch
              this.saving = false;
              this.getAbstracts();
              this.$router.go(-1);
          })
        })
        .catch(error => {
          console.log(error)
        });
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
