import Vue from 'vue';
import Vuex from 'vuex';
import abstract from './abstract';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        abstract,
    },
    strict: process.env.DEV
});
