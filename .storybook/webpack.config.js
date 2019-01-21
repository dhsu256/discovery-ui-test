// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
//module.exports = require('../config/webpackDevServer.config.js');

module.exports = (baseConfig, env, defaultConfig) => {
  return defaultConfig;
};

/*module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
      {
        loader: require.resolve('file-loader'),
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],

      },      
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader",
            options: {
              modules: true
            }
          },
          "postcss-loader"
        ],
      },          
    ],
  },
};*/