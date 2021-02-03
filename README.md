# blog

A personal blog built using Mongo, GraphQL (Apollo client/server), Vue and Node.

The client-side code was built with Vue, Vue Router, Vuex and Apollo Client. Search is handled client-side using "https://lunrjs.com/" Lunr.

The server-side code uses MongoDB and Apollo Server. Authentication is with JWT. The site is hosted on an Amazon, AWS, EC2 Ubuntu instance with an Nginx server.

The front-page styling and design, with https://masonry.desandro.com/ Masonry image packing and upside-down navigation, was based on the http://www.wix.com www.wix.com template: https://www.wix.com/demone2/graphic-design-portf graphic-design-portf</a>. The remainder of the styling is Bootstrap 3, with flat-buttons and controls. Code syntax highlighting is with the http://prismjs.com PrismJS library using the default colour scheme.
          
The blog template is currently populated with blogs created from the 1998 Netscape manual, 'Core Javascript Guide 1.4', which is can be viewed at  https://docs.huihoo.com/javascript/CoreGuideJS14/index.html CoreGuideJS14.

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
