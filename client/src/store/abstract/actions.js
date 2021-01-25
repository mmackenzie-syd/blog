
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



