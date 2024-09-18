import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { UserConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

const defaultConfigVitest: UserConfig = {
  plugins: [
    react({ include: /\.(js|jsx|ts|tsx)$/ }),
    nxViteTsPaths(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../coverage/<project-root>',
      provider: 'v8',
    },
  },
};

export default defaultConfigVitest;
