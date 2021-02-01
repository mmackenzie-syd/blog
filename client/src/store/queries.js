import { gql } from 'apollo-boost';

/* Blog Queries */

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
