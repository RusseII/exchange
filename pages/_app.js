import Head from 'next/head';

import { GeistProvider, CssBaseline, Page, Image, Text, Display } from '@geist-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Head>
        <title>Bookland Crypto Exchange</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Page dotBackdrop width='800px' padding={0}>
        <Display
          title='Bookland Crypto'
          caption={
            <>
              Welcome to{' '}
              <Text span b>
                Bookland Crypto Exchange
              </Text>
            </>
          }
        >
          <Image alt='Bookland Logo' width={10} height={10} src='/bl.png' draggable={false} />
        </Display>
        <Component {...pageProps} />
        </Page>

      </GeistProvider>
  );
}

export default MyApp;
