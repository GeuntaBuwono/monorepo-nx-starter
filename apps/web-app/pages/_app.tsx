import './styles.css';

import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ApolloProviderWrapper } from '../ApolloProviderWrapper';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web-app!</title>
      </Head>
      <main className="app">
        <ClerkProvider {...pageProps}>
          <ApolloProviderWrapper>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </ApolloProviderWrapper>
        </ClerkProvider>
      </main>
    </>
  );
}

export default CustomApp;
