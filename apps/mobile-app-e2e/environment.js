// setup from https://github.com/wix/Detox/blob/master/docs/Guide.Jest.md#e2eenvironmentjs
const { DetoxCircusEnvironment } = require('detox/runners/jest');

class CustomDetoxEnvironment extends DetoxCircusEnvironment {}

module.exports = CustomDetoxEnvironment;
