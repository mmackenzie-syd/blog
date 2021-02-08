# blog

https://mark-syd.com/

This app is designed as a personal blog built with Vue and GraphQL and hosted on AWS. The blogs are displayed as a list of short abstracts which can be opened into a full article. The app can create, read, update and delete a blog, when logged in as an administrator.

The client-side code uses Vue Router and Vuex for state management. Apollo Client is used for handling the GraphQL. Search is handled client-side using the library package [Lunr](https://lunrjs.com/). 

The server code uses MongoDB, Apollo Server and ExpressJS. The ExpressJS runs simultaneously with the Apollo Server and is used to launch the Client-code from a static folder in a production environment. Authentication is with JSON web tokens. 

The site is hosted on an Amazon, AWS, EC2 Ubuntu instance with an Nginx server. The Nginx server is configured as a reverse proxy to re-direct the in-coming traffic on Port 80 to the Node server running on Port 4000. A low-cost domain name was purchased from [bluehost](https://www.bluehost.com/) to enable SSL to be used. The SSL uses a certificate generated from [Let's Encrypt](https://letsencrypt.org/).

The front-page styling and design, with [Masonry](https://masonry.desandro.com/)  image packing and upside-down navigation, was based on the [www.wix.com](http://www.wix.com)  template: [graphic-design-portf](https://www.wix.com/demone2/graphic-design-portf). 

The remainder of the styling is Bootstrap 3, with flat-buttons and controls. Code syntax highlighting is with the [PrismJS](http://prismjs.com) library using the default colour scheme.
          
The blog template is currently populated with blogs created from the 1998 Netscape manual, 'Core Javascript Guide 1.4', which is can be viewed at  [CoreGuideJS14](https://docs.huihoo.com/javascript/CoreGuideJS14/index.html).

Mark Mackenzie

February 2021

![alt text](https://github.com/mmackenzie-syd/blog/blob/master/screenshots/grey/home.png)

![alt text](https://github.com/mmackenzie-syd/blog/blob/master/screenshots/grey/blog.png)

![alt text](https://github.com/mmackenzie-syd/blog/blob/master/screenshots/grey/article.png)

![alt text](https://github.com/mmackenzie-syd/blog/blob/master/screenshots/grey/contact.png)

![alt text](https://github.com/mmackenzie-syd/blog/blob/master/screenshots/grey/login.png)

![alt text](https://github.com/mmackenzie-syd/blog/blob/master/screenshots/grey/admin.png)

![alt text](https://github.com/mmackenzie-syd/blog/blob/master/screenshots/grey/add.png)

## Client Project setup 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Server Project setup
