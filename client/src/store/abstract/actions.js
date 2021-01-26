
import Axios from 'axios';

const url = 'http://localhost:3000/abstracts';

export function getAbstracts({ commit }) {
    Axios.get(url).then(response => {
        commit('setAbstracts', response.data.abstracts);
    })
    .catch(error => {
        console.log(error)
        // this.errored = true
    })
}


const applyFilter = function(x, filter) {
        if(filter == 'posts/all'){
            return x;
        } else {
            return x.filter(function(abstract) {
                return abstract.filter === filter;
            });
        }
    };

export function filterAbstracts({ state, commit }, filter) {
    const { abstracts } = state;
    if (filter && abstracts) {
        const parsed = applyFilter(abstracts, filter);
        commit('setFilteredAbstracts', parsed);
    }
}



