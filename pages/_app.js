import Head from "next/head";
import Layout from "../layout/layout";
import "../styles/globals.css";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
