module.exports = {
  '*': (files) => ['nx affected:lint --fix', 'nx format:write'],
};
