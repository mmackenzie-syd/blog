import Vue from 'vue';
import Vuex from 'vuex';
import abstract from './abstract';
import article from './article';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        abstract,
        article
    },
    strict: process.env.DEV
});
