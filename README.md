# React/Redux Webpack ES6 Boilerplate w/ Express & Socket.io for JWT Authentication

## The Stack

- [Webpack](http://webpack.github.io/) and [Webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as a client-side module builder and module loader.
- [NPM](https://www.npmjs.com/) as a package manager and task runner (say [**NO**](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/) to gulp/grunt).
- [Express](https://expressjs.com/) Fast, unopinionated, minimalist web framework for Node.js
- [Babel](http://babeljs.io/) 6 as a transpiler from ES6 to ES5.
- [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) as a virtual Dom JavaScript library for rendering user interfaces (views).
- [Redux](http://redux.js.org/) as an incredibly simple way of modelling your data app state, with great community support.
- [Redux DevTools](https://github.com/gaearon/redux-devtools) as a live-editing environment for your Redux apps.
- [ESLint](http://eslint.org/) as a reporter for syntax and style issues. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules.
- [Sass](http://sass-lang.com/) as a compiler of CSS styles with variables, mixins, and more.
- [Mocha](https://mochajs.org/) as a test framework.
- [Chai](http://chaijs.com/) as a BDD assertion library that works along with `Mocha`.

## Getting Started

### Installation

```
$ npm install
```

## Development

* Hot reloading via webpack dev server:
  * `$ npm run dev`
  * Point your browser to [http://localhost:8080/](http://localhost:8080/), page hot reloads automatically when there are changes

## Production

There are two ways in which you can build and run the web app:

* Build it!
  * `$ npm run build`

* Pre-flight Check!
  * `$ npm start`
  * Point your browser to [http://localhost:3000/](http://localhost:3000/)

## Testing

To execute all unit tests, use:

```sh
npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
npm run test:watch
```
