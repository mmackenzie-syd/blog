import Axios from "axios";

export function getArticle({ commit }, id) {
    const url = `http://localhost:3000/article/${id}`;
    Axios.get(url).then(response => {
        commit('setArticle', response.data.article);
    }).catch(error => {
        console.log(error)
        // this.errored = true
    })
}
