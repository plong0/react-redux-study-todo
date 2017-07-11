# React + Redux "Todo List" Study

This is a simple "Todo List" implementation to learn React + Redux.

## Project Setup

* bootstrapped using standard [create-react-app](https://github.com/facebookincubator/create-react-app) utility
* SCSS support added as described in ["Adding a CSS Preprocessor"](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
* project structure inspired by ["A Better File Structure For React/Redux Applications"](https://marmelab.com/blog/2015/12/17/react-directory-structure.html) by François Zaninotto
* code style based on [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* testing setup uses [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) as described in ["Testing Components"](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components)
* Redux Container Components are tested using [redux-mock-store](http://arnaudbenard.com/redux-mock-store/)


## Helpful Resources

* [Official "Intro To React" Tutorial](https://facebook.github.io/react/tutorial/tutorial.html) - implements a Tic-Tac-Toe game with "time travel" feature
* [Official create-react-app docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) - complete documentation for the create-react-app utility
* ["Running Tests" in a create-react-app project](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) - how to structure unit tests
* [Jest](https://facebook.github.io/jest/) - official website for Jest testing utility
* [Official Redux Basics docs](http://redux.js.org/docs/basics/)
* ["Getting Started With React Redux: An Intro"](https://www.codementor.io/mz026/getting-started-with-react-redux-an-intro-8r6kurcxf) by [Yang-Hsing](https://www.codementor.io/mz026) - nice high-level description of Redux
* [Discussion on testing Container Components](https://github.com/airbnb/enzyme/issues/472) - boils down to using `redux-mock-store` and passing a `{context: { store }}` to enzyme's `shallow()` function
* ["Unit Testing React components that use Redux"](http://www.thereformedprogrammer.net/unit-testing-react-components-that-use-redux/) - nice article about testing components that use Redux


## Running the Things

These commands are all executed on the command line from the project root.  I use multiple console windows/tabs.

### Dev Server
```
yarn start
```

### SASS Watcher/Compiler
```
npm run watch-css
```
*You will need to restart the watcher any time you add new scss files that need to be compiled.*


### Tests
#### Automatic Testing
```
yarn test
```

#### Test Coverage
```
yarn test -- --coverage
```
