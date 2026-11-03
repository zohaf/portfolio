import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zoha Fard</title>
        <meta name="description" content="I’m Zoha, a product engineer." />
        {/* Link previews (WhatsApp, iMessage, LinkedIn, Slack) read these, not the description. */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zoha Fard" />
        <meta key="og:title" property="og:title" content="Zoha Fard" />
        <meta key="og:description" property="og:description" content="I’m Zoha, a product engineer." />
        <meta name="twitter:card" content="summary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2a5dbd" />
        <link rel="icon" href="/circle.svg" />
        {/* iMessage and iOS ignore SVG icons; they read the apple-touch-icon, then favicon.ico. */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
