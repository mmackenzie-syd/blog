<template>
  <div>
    <form role="form">
      <div class="row">
        <div class="col-md-4 col-md-offset-1">
          <h2 v-if="id" class="edit-title">
            <small>EDIT POST</small>
          </h2>
          <h2 v-else class="edit-title">
            <small>ADD POST</small>
          </h2>
        </div>
        <div class="col-md-6">
          <select class="form-control pull-right date" name="year" v-model="selectedYear" v-on:change="changeDate">
            <option v-for="year in years" :key="year">{{year}}</option>
          </select>
          <select class="form-control pull-right date" name="month" v-model="selectedMonth" v-on:change="changeDate">
            <option v-for="month in months" :key="month">{{month}}</option>
          </select>
          <select class="form-control pull-right date" name="day" v-model="selectedDay">
            <option  v-for="day in days" :key="day">{{day}}</option>
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

  export default {
    name: 'EditBlog',
    components: {},
    data () {
      return {
        id: null,
        months: [],
        years: [],
        selectedMonth: '',
        selectedDay:'',
        selectedYear: '',
        days: []
      }
    },
    mounted: function () {
      this.id = this.$route.params.id;
      this.months = CalenderService.getMonths();
      this.years = CalenderService.getYears();
      this.selectedMonth = CalenderService.getCurrentMonth();
      this.selectedDay = CalenderService.getCurrentDay();
      this.selectedYear = CalenderService.getCurrentYear();
      this.days = CalenderService.getDays(this.selectedMonth, this.selectedYear);
    },
    methods: {
      onCancel: function() {
        this.$router.go(-1)
      },
      changeDate: function() {
        this.days = CalenderService.getDays(this.selectedMonth, this.selectedYear);
        if(this.selectedDay > this.days.length)
          this.selectedDay = this.days.length.toString();
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
