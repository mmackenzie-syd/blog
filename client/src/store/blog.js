import PopulateCategoriesService from "@/services/PopulateCategoriesService";
import ApplyFilterService from "@/services/ApplyFilterService";

import { defaultClient as apolloClient } from '../main';
import { GET_ARTICLE, GET_ABSTRACTS } from "@/store/graph";

export default {
    namespaced: true, // need otherwise won't get namespaced!
    state: {
        abstracts: null,
        article: null,
        abstract: null,
        categories: [],
        filteredAbstracts: null,
        pages: 0,
        loading: 0 // use a number allows for multiple api calls at once i.e. call abstracts and article at the same time
    },
    mutations: {
        setAbstracts(state, abstracts) {
            console.log('abstracts', abstracts)
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
            apolloClient.query({
                query: GET_ABSTRACTS
            }).then(({ data }) => {
                commit('setAbstracts', data.getAbstracts);
                commit('setFilteredAbstracts', data.getAbstracts);
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
