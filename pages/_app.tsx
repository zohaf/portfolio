import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zoha Fard</title>
        <meta name="description" content="Zoha Fard, product engineer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2a5dbd" />
        <link rel="icon" href="/circle.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
