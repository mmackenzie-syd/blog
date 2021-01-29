import Axios from "axios";
import PopulateCategoriesService from "@/services/PopulateCategoriesService";
import ApplyFilterService from "@/services/ApplyFilterService";

export default {
    namespaced: true, // need otherwise won't get namespaced!
    state: {
        abstracts: null,
        article: null,
        abstract: null,
        categories: [],
        filteredAbstracts: null,
        pages: 0,
        loading: 0// use a number allows for multiple api calls at once i.e. call abstracts and article at the same time
    },
    mutations: {
        setAbstracts(state, abstracts) {
            state.abstracts = abstracts;
            state.categories = PopulateCategoriesService(abstracts);
        },
        setFilteredAbstracts(state, filteredAbstracts) {
            state.filteredAbstracts = filteredAbstracts;
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
        getAbstracts({ commit }) {
            commit('setLoading', 1);
            const url = 'http://localhost:3000/abstracts';
            Axios.get(url).then(response => {
                commit('setAbstracts', response.data.abstracts);
                commit('setFilteredAbstracts', response.data.abstracts);
                commit('setLoading', -1);
            }).catch(error => {
                console.log(error)
                commit('setLoading', -1);
                // this.errored = true
            })
        },
        filterAbstracts({ state, commit }, filter) {
            const { abstracts } = state;
            if (filter && abstracts) {
                const parsed = ApplyFilterService(abstracts, filter);
                commit('setFilteredAbstracts', parsed);
                commit('setPages', parsed.length);
            }
        },
        getArticle({ commit }, id) {
            commit('setLoading', 1);
            const url = `http://localhost:3000/article/${id}`;
            Axios.get(url).then(response => {
                commit('setArticle', response.data.article);
                commit('setLoading', -1);
            }).catch(error => {
                console.log(error)
                // this.errored = true
                commit('setLoading', -1);
            })
        },
        getAbstract({ state, commit }, index) {
            const { filteredAbstracts } = state;
            if (filteredAbstracts) {
                const abstract = filteredAbstracts[index]
                commit('setAbstract', abstract)
            }
        }

    },
    getters: {}
}
