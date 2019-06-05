# React Boilerplate

## Features

- parcel

  Wonderful bundler!

- redux, redux-saga

  Write the `state`, `reducer`, `saga` in one file, [example](./src/context/tick.js);

  Add those files to the `context/index.js` file to load them, and you are good to call `dispatch` in components.

- react-router

- eslint

## Notes

The context is a sugar to wrap **reducers** and **saga functions** in one file, the rest is common react boilerplate architecture.