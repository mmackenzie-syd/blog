import Vue from 'vue';
import Vuex from 'vuex';
import blog from './blog';
import user from './user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        blog,
        user
    },
    strict: process.env.DEV
});
