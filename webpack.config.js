const path = require('path');
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const name = require('./package.json').name;

module.exports = (env, options) => {
  const isDev = options.mode !== 'production';

  return {
    mode: isDev ? 'development' : 'production',
    context: path.resolve(__dirname, 'src'),
    entry: [`./${name}.js`],
    plugins: [
      new SystemJSPublicPathWebpackPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devtool: 'source-map',
    devServer: {
      hot: true,
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      client: { webSocketURL: { hostname: 'localhost' } },
      allowedHosts: 'all'
    },
    externals: [ 'react', 'react-dom' ],
    output: {
      libraryTarget: 'system', 
      clean: true,
      filename: `${name}.js`, // name of the generated bundle
      uniqueName: `${name}`,
      devtoolNamespace: `${name}`,
      publicPath: "",
    }
  };
};