import type { CodegenConfig } from '@graphql-codegen/cli';

const HASURA_ADMID_SECRET = process.env.HASURA_ADMID_SECRET!;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://wallet-dev.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': HASURA_ADMID_SECRET,
        },
      },
    },
  ],
  documents: 'apps/web-app/**/*.{graphql,tsx,ts}',
  emitLegacyCommonJSImports: false,
  generates: {
    'apps/web-app/gql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        reactApolloVersion: 3,
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
