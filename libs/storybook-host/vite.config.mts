import { defineConfig } from 'vitest/config';
import defaultConfigVitest from '../../vitest.config.mts';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/storybook-host',
  ...defaultConfigVitest,
});
