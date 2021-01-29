import Axios from "axios";
import PopulateCategoriesService from "@/services/PopulateCategoriesService";


const applyFilter = function(x, filter) {
    if(filter === 'posts/all'){
        return x;
    } else {
        return x.filter(function(abstract) {
            return abstract.filter === filter;
        });
    }
};

export default {
    namespaced: true,
    state: {
        abstracts: null,
        categories: [],
        filteredAbstracts: null,
        loading: 0 // allows for multiple api calls at once
    },
    mutations: {
        setAbstracts(state, abstracts) {
            state.abstracts = abstracts;
            state.categories = PopulateCategoriesService(abstracts);
        },
        setFilteredAbstracts(state, filteredAbstracts) {
            state.filteredAbstracts = filteredAbstracts;
        },
        setLoading(state, val) {
            const { loading } = state;
            state.loading = loading + val;
        },
        setArticle(state, article) {
            state.article = article;
        }
    },
    actions: {
        getAbstracts({ commit }) {
            commit('setLoading', 1);
            const url = 'http://localhost:3000/abstracts';
            Axios.get(url).then(response => {
                commit('setAbstracts', response.data.abstracts);
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
                const parsed = applyFilter(abstracts, filter);
                commit('setFilteredAbstracts', parsed);
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
        }

    },
    getters: {}
}
