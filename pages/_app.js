import Head from "next/head";
import Layout from "../layout/layout";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luna Ocean</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Portfolio website for designer and digital creator Luna Ocean Sunshine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
