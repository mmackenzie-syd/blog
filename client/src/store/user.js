import Axios from "axios";

export default {
    namespaced: true, // need otherwise won't get namespaced!
    state: {
        authenticated: false,
        loading: 0, // use a number allows for multiple api calls at once
        error: '',
        token: ''
    },
    mutations: {
        setAuthenticated(state, status) {
            state.authenticated = status;
        },
        setLoading(state, val) {
            const loading = state.loading || 0;
            state.loading = loading + val;
        },
        setError(state, message) {
            state.error = message;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        login({ commit }, payload) {
            commit('setLoading', 1);
            const url = 'http://localhost:3000/login';
            Axios.post(url, payload).then(response => {
                commit('setAuthenticated', true);
                commit('setToken', response.data.token);
                commit('setLoading', -1);
            }).catch(error => {
                console.error(error)
                commit('setLoading', -1);
                commit('setError', 'incorrect username or password');
            })
        },
        logout({ commit }) {
            commit('setAuthenticated', false);
        },
        reset({ commit }) {
            commit('setError', '');
        }
    },
    getters: {}
}

