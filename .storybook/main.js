module.exports = {
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [ '@nrwl/react/plugins/storybook'],
  core: {
    builder: 'webpack5',
  },
};
