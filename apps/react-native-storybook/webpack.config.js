const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { WebpackConfigNxExpo } = require('nx-react-native-expo');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // config.externals = {
  //   'react-native': true,
  // };
  return WebpackConfigNxExpo(config);
};
