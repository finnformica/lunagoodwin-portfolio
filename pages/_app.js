import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luna Ocean Sunshine</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Portfolio website designer and digital creator Luna Ocean Sunshine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
