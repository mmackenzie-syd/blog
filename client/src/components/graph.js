/* Admin - protected */
import {gql} from "apollo-boost";

export const DELETE_BLOG = gql`
    mutation deleteBlog($abstractId: ID, $articleId: ID) {
        deleteBlog(abstractId:$abstractId, articleId:$articleId){
            txt
        }
    }`;


export const SEED = gql`
    query {
        seed {
            txt
        }
    }`;

