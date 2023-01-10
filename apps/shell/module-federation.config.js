// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'shell',
  remotes: ['shop', 'cart', 'about'],
};

module.exports = moduleFederationConfig;
