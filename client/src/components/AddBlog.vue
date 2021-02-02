<template>
  <div>
    <div v-if="saving">Saving Changes...</div>
    <form v-else role="form" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-4 col-md-offset-1">
          <h2 class="edit-title">
            <small>ADD POST</small>
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
import MonthsReverseNameService from "@/services/MonthsReverseNameService";
import {defaultClient as apolloClient} from "@/main";
import {CREATE_BLOG} from "@/components/graph";

export default {
  name: 'EditBlog',
  components: {},
  data () {
    return {
      saving: false,
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
    ...mapState('user', ['token'])
  },
  mounted: function () {
    this.initialiseForm();
  },
  methods: {
    ...mapActions('blog', ['getAbstracts']),
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
      this.form.months = CalenderService.getMonths();
      this.form.years = CalenderService.getYears();
      this.form.selectedMonth = CalenderService.getCurrentMonth();
      this.form.selectedDay = CalenderService.getCurrentDay();
      this.form.selectedYear = CalenderService.getCurrentYear();
      this.form.days = CalenderService.getDays(this.form.selectedMonth, this.form.selectedYear);
    },
    onSubmit: async function() {
      const {
        selectedMonth,
        selectedYear,
        selectedDay: day,
        subtxt,
        fulltxt,
        title,
      } = this.form;
      const filter = selectedYear + '/' +  MonthsReverseNameService[selectedMonth];

      apolloClient.mutate({
        mutation: CREATE_BLOG,
        variables:{ title, filter, day, subtxt, fulltxt },
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
