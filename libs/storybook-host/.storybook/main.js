const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  addons: [...rootMain.addons, '@storybook/addon-essentials'],
  stories: ['../src/lib/**/*.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
};
