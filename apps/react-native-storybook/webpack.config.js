const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { WebpackConfigNxExpo } = require('nx-react-native-expo');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.plugins.push(new HtmlWebpackPlugin({  // Also generate a test.html
    filename: 'test.html',
    template: 'src/assets/test.html'
  }))
  return WebpackConfigNxExpo(config);
};
