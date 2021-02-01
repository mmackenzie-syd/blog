import { gql } from 'apollo-boost';

/* Blog */
export const GET_ABSTRACTS = gql`
    query {
        getAbstracts {
            _id
            title
            filter
            day
            sortIndex
            subtxt
            articleId
        }
    }`;

export const GET_ARTICLE = gql`
    query($id: ID) {
        getArticle(id: $id) {
            _id
            fulltxt
        }
    }`;

/* User */
export const LOGIN = gql`
    query($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            username
        }
    }`;
