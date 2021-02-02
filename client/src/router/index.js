import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import Admin from '../views/Admin.vue';
import Article from '../components/Article.vue';
import Abstract from '../components/Abstract.vue';
import EditBlog from '../components/EditBlog.vue';
import ListBlog from '../components/ListBlog.vue';

import store from '../store/index.js'
import AddBlog from "@/components/AddBlog";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/blog/:month/:year',
    name: 'Blog',
    component: Blog,
    children: [
      {
        path: 'article/:id',
        component: Article
      },
      {
        path: 'abstract/:page',
        component: Abstract
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
        if (!store.state.user.authenticated) {
            next('/');
        }
        next();
    },
    children: [
      {
        path: 'list/:page',
        component: ListBlog
      },
      {
        path: 'edit/:id',
        component: EditBlog
      },
      {
        path: 'add',
        component: AddBlog
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
