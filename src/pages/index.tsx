import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Hero from "../components/Hero";
const MainContent = dynamic(() => import("../components/MainContent"));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samuel Palacios | Full Stack Developer</title>
        <meta
          name="description"
          content="Samuel Palacios is a full stack developer and software engineering student who loves building web apps with exceptional user experiences."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <MainContent />
    </>
  );
};

export default Home;
