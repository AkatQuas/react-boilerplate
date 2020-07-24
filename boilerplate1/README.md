# Overview

A boilerplate looks similar to [vue-boilerplate](https://github.com/AkatQuas/vue-boilerplate).

Well, run `npm run eject` the moment you create the project with `create-react-app`. After that you are ok to sync these files to the target project.

Before you synchronize the files, make sure you read the `README.md` carefully.

## Dependencies & devDependencies:

```bash

# using -S

axios # for http request

prop-types # for class propTypes

react-router-dom # for browser routing

redux, react-redux, redux-thunk # for store management and asynchronous actions

react-router-redux # for integrate store and router

# using -D

node-sass, sass-loader # for scss styling

source-map-explorer # for analyze production files

redux-logger # for logging the actions in redux

```

## Snippets for usage example

Check this [folder](./snippets)

## About the development

<details>

<summary>
SCSS : using scss in development, after install `sass-loader` and `node-sass` into devDependencies, config the `webpack.config.*.js`.
</summary>

```javascript
// config/webpack.config.dev.js
// after css loader config
{
    test: /\.scss$/,
    loader: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      {
        loader: require.resolve('postcss-loader'),
        options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                    browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9' // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009'
                })
            ]
        }
      },
      require.resolve('sass-loader')
    ]
}

// config/webpack.config.prod.js
// after css loader config, same position in the file
{
    test: /\.scss$/,
    loader: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      },
      require.resolve('sass-loader')
    ]
}
```

</details>

**Proxy** : Sometime, it comes to the CORS problem during the development, and WebpackDevServer use the proxy config in `package.json` in the project root. And as for the structure or usage, the [page](https://webpack.js.org/configuration/dev-server/#devserver-proxy) above have explained clearly.

**Router & Redux** : package [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) make the integration much easier. Don't wrapper any router inside `ConnectedRouter`.

**Static files** : It is recommend to put all media files in `src/assets`. Whilst, in javascript files, using `process.env.PUBLIC_URL + '/static/meida/logo.png'` make it possible to get static files. And remember to put these media files in the directory `<rooDir>/public`.

**@ -> <rootDir>/src** : Configure the alias in both file [webpack.config.dev](./config/webpack.config.dev.js) and [webpack.config.prod](./config/webpack.config.prod.js). And the webpack knows it. However as for `VS code` , a [jsconfig.json](./jsconfig.json) in the project root folder is recommended. And For Intellij Idea, config the `preference -> Language & Frameworks -> JavaScript -> Webpack` to choose the correct file in the project.
