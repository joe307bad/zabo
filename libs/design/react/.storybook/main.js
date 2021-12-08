const rootMain = require('../../../../.storybook/main');
const path = require('path')

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.filter(x => x.test.test && !x.test.test('file.css'));
    config.module.rules.push({
      test: /\.css$/,
      use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]
    })

    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    return config;
  },
};
