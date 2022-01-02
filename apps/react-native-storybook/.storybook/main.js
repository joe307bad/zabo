module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  framework: "@storybook/react-native",
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async(config, {configType}) => {
    //debugger;
    // remove html-webpack-plugin
    config.plugins.splice(1, 1)
    return config;
  }
};
