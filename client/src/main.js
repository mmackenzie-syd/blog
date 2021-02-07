import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/main.css'; // global styles
import './assets/css/highlight.css'; // global styles

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

// re-set json token in local storage on app load
localStorage.setItem('token', '');

export const defaultClient = new ApolloClient({
    uri: window.APP_URL,
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        if (!localStorage.token) {
            localStorage.setItem('token', '');
        }
        operation.setContext({
            headers: {
                authorization: localStorage.getItem('token')
            }
        });
    },
    onError: ({ graphQLErrors, networkError }) => {
        if (networkError) {
            console.log('[networkError]', networkError);
        }

        if (graphQLErrors) {
            console.log('[graphQLErrors]', graphQLErrors)
        }
    }
});

export const apolloProvider = new VueApollo({ defaultClient })

Vue.use(VueApollo);

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
