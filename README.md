## NOTHS React test

Hi!

This is a very basic storefront built with [Create React App](https://github.com/facebook/create-react-app).

It features a Product component that can display product information and a Basket component to display what the user has added.
There's a `getProducts` util that acts like a mock api (no need to worry about this one).

Most of the business logic sits inside the `App.js` file, you've got the state and the button handlers in here.
There's some intentional ambiguity in here that would be good to clean up...
While there are tests for the Product component and the Basket component, there are no tests for the App.

The code is functional, to a point, you can add products to your basket but you cannot remove them.
Nothing happens when you click the `X` next to a product in your basket, we want to remove all products of that type when the `X` is clicked.

Tests use `jest` as the runner with `enzyme` for component rendering/testing.

#
## Tasks

1. We want you to implement the `removeFromBasket` function and make sure it's called properly
2. We want you to write tests for the `App.js` file
3. (Extra credit) Refactor `App.js`


#

## Setup

1. Fork this project to your own Github account
2. Clone that project
3. Make sure you are running [Node](https://nodejs.org/en/download/) version 12
4. Run `npm i` (please avoid yarn for this one)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#
## Notes

Commit history is important to see how you approach the problem, we'd like to see those in your fork, please do not raise pull requests towards the original repository.

This repository and the code are for testing purposes only so please disregard any security warnings from old node modules, this code will never be used in a live environment.


