import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/Layout";
import Head from "next/head";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Samuel Palacios | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Samuel Palacios is a full stack developer and software engineering student who loves building web apps with exceptional user experiences."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
