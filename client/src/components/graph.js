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

export const UPDATE_BLOG = gql`
    mutation updateBlog($title: String, $filter: String, $day: String, $subtxt: String, $fulltxt: String, $abstractId: ID, $articleId: ID) {
        updateBlog(title: $title, filter: $filter, day: $day, subtxt: $subtxt, fulltxt: $fulltxt, abstractId: $abstractId, articleId: $articleId) {
            txt
        }
    }`;


export const CREATE_BLOG = gql`
    mutation createBlog($title: String, $filter: String, $day: String, $subtxt: String, $fulltxt: String) {
        createBlog(title: $title, filter: $filter, day: $day, subtxt: $subtxt, fulltxt: $fulltxt) {
            txt
        }
    }`;
