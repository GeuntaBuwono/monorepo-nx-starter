import { defineConfig } from 'vitest/config';
import defaultConfigVitest from '../../vitest.config.mts';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/web-app',
  ...defaultConfigVitest,
});
