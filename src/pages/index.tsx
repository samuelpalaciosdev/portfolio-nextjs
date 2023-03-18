import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/Navbar";
// import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samuel Palacios Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900">
        <Navbar />
        <section className=" min-h-screen px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white ">
            Hi! Im Samuel Palacios, a full-stack developer who loves to build
            things with code.
          </h1>
        </section>
      </main>
    </>
  );
};

export default Home;
