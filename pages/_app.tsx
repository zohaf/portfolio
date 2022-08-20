import "../styles/globals.css";
import "@fontsource/ibm-plex-sans";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zoha Fard</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/circle.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
