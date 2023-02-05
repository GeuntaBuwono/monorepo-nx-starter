import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from '@clerk/nextjs';
import { useMemo } from 'react';

export const ApolloProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getToken } = useAuth();
  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const token = await getToken({ template: 'hasura' });
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, [getToken]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
