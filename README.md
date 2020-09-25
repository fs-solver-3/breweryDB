This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## General

We are using Eslint and Stylelint to ensure code quality and coding style. You must have ESLint and StyleLint enabeld at all times otherwise your work will not be deployed successfully to dev/production / stage env.

if you are using VS code editor you should have these extensions instaled
[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and
[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)


## Structure

Currently we are use this structure to match our needs and make testable enterprise project

```
< containers >
    < AdminChampion >             - we can group our components as needed to match our logic
        index.js                  - connect to redux
        AdminChampion.js          - React component called AdminChampion
        < __tests__ >             - Tests for this component
        ...                       - Other related to AdminChampion files (styles, small , etc)

< redux >
    < AdminChampion >
        reducer.js                - reducer for state.AdminChampion
        selectors.js              - our state.AdminChampion selectors
        actions.js                - constants to use in reducer and actionCreators
        actionCreators.js         - redux action creators
        epics.js|sagas.js         - middleware for business logic and async actions
        < __tests__ >             - tests to cover all inside the AdminChampion

< components >
    < atoms >                     - for components that cannot be broken down into smaller pieces
    < molecules >                 - relatively simple groups of UI elements or group of atoms
```

## How to use the API 

We use [axios](https://www.npmjs.com/package/axios) to make XMLHttpRequests, its customized and there is already example for using the API and you should follow the same when you create new API integration, the example in `src/redux/products`, the customized function for axios you can find in `src/helper/apiUtils.js`

## The required headers for the API

### `x-api-key`
This is static key and you can find it in `src/helper/apiUtils.js`


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
