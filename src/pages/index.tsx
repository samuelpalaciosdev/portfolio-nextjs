import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samuel Palacios Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="hero" className="mt-16 min-h-screen pt-24">
        {/* <h1 className="text-4xl font-semibold tracking-tight text-white ">
          Hi, I&apos;m Samuel Palacios, a full-stack developer who loves to
          build things with code.
        </h1> */}
        <span className="text-xl font-semibold tracking-tight text-teal-400">
          Hi, I&apos;m
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Samuel Palacios
        </h1>
        <h2 className="text-2xl font-semibold text-gray-400">
          a full-stack developer who loves to build things with code.
        </h2>
      </section>

      <section id="about">
        <h1 className="text-3xl text-teal-500">About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestiae
          eveniet excepturi, corporis odio quisquam facilis et error eaque porro
          doloremque minima ipsam quam vel itaque alias illum ea repudiandae
          quae explicabo. Animi adipisci veritatis maxime natus expedita rem
          reiciendis.
        </p>
      </section>
      <section id="projects">
        <h1 className="text-3xl text-teal-500">Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestiae
          eveniet excepturi, corporis odio quisquam facilis et error eaque porro
          doloremque minima ipsam quam vel itaque alias illum ea repudiandae
          quae explicabo. Animi adipisci veritatis maxime natus expedita rem
          reiciendis.
        </p>
      </section>
      <section id="contact">
        <h1 className="text-3xl text-teal-500">Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestiae
          eveniet excepturi, corporis odio quisquam facilis et error eaque porro
          doloremque minima ipsam quam vel itaque alias illum ea repudiandae
          quae explicabo. Animi adipisci veritatis maxime natus expedita rem
          reiciendis.
        </p>
      </section>
    </>
  );
};

export default Home;
