const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  addons: [...rootMain.addons, '@storybook/addon-essentials'],
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
