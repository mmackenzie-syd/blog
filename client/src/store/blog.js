import PopulateCategoriesService from "@/services/PopulateCategoriesService";
import ApplyFilterService from "@/services/ApplyFilterService";

import { defaultClient as apolloClient } from '../main';
import { GET_ARTICLE, GET_ABSTRACTS } from "@/store/graph";

const fields = ['title', 'subtxt'];
const ref = '_id';

import searchEngine from '../search';

// https://lunrjs.com/guides/getting_started.html
let idx;

export default {
    namespaced: true, // need otherwise won't get namespaced!
    state: {
        abstracts: null,
        article: null,
        abstract: null,
        categories: [],
        filteredAbstracts: null,
        searchedAbstracts: null,
        pages: 0,
        loading: 0 // use a number allows for multiple api calls at once i.e. call abstracts and article at the same time
    },
    mutations: {
        setAbstracts(state, abstracts) {
            state.abstracts = abstracts;
            state.categories = PopulateCategoriesService(abstracts);
            idx = searchEngine(ref, fields, abstracts);
        },
        setFilteredAbstracts(state, filteredAbstracts) {
            state.filteredAbstracts = filteredAbstracts;
        },
        setSearchedAbstracts(state, searchedAbstracts) {
            state.searchedAbstracts = searchedAbstracts;
        },
        setPages(state, pages) {
            state.pages = pages;
        },
        setLoading(state, val) {
            const loading = state.loading || 0;
            state.loading = loading + val;
        },
        setArticle(state, article) {
            state.article = article;
        },
        setAbstract(state, abstract) {
            state.abstract = abstract;
        }
    },
    actions: {
        getAbstracts: async function({ commit }) {
            commit('setLoading', 1);
            apolloClient.query({
                query: GET_ABSTRACTS
            }).then(({ data }) => {
                commit('setAbstracts', data.getAbstracts);
                commit('setFilteredAbstracts', data.getAbstracts);
                commit('setLoading', -1);
            }).catch(error => {
                console.log(error)
                commit('setLoading', -1);
            })
        },
        filterAbstracts({ state, commit }, filter){
            const { abstracts } = state;
            if (filter && abstracts) {
                const parsed = ApplyFilterService(abstracts, filter);
                commit('setFilteredAbstracts', parsed);
                commit('setPages', parsed.length);
            }
        },
        getArticle({ commit }, id) {
            commit('setLoading', 1);
            apolloClient.query({
                query: GET_ARTICLE,
                variables: { id }
            })
            .then(({ data }) => {
                commit('setArticle', data.getArticle);
                commit('setLoading', -1);
            })
            .catch(error => {
                console.log(error)
                commit('setLoading', -1);
            })
        },
        getAbstract({ state, commit }, index) {
            const { filteredAbstracts } = state;
            if (filteredAbstracts) {
                const abstract = filteredAbstracts[index]
                commit('setAbstract', abstract)
            }
        },
        getSearchedAbstract({ state, commit }, index) {
            const { searchedAbstracts } = state;
            if (searchedAbstracts) {
                const abstract = searchedAbstracts[index];
                commit('setAbstract', abstract);
            }
        },
        searchAbstracts({ state, commit }, txt) {
            // perform new search
            const { abstracts } = state;
            const result = idx.search(txt.toString());
            console.log('result', result)
            const searchedAbstracts = [];
            for(let i = 0; i < result.length; i++) {
                const abstract = abstracts.find(abstract => abstract._id === result[i].ref);
                searchedAbstracts.push(abstract);
            }
            console.log('result', result, searchedAbstracts)
            commit('setSearchedAbstracts', searchedAbstracts);
        }
    },
    getters: {}
}
