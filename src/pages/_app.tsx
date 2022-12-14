/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '../components/Chakra';
import { EventsProvider } from '../contexts/EventsContext';
import Layout from '../layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <EventsProvider>
          <Component {...pageProps} />
        </EventsProvider>
      </Layout>
    </Chakra>
  );
};

export default MyApp;
