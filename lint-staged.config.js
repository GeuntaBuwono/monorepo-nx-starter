module.exports = {
  '*': (files) => ['nx affected:lint --fix --files', 'nx format:write --files'],
};
