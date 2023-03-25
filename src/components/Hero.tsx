import Link from "next/link";
import styles from "../styles/index.module.css";

const Hero = (): JSX.Element => {
  return (
    <section
      id="hero"
      // * Height class with media queries
      className={`flex min-h-screen flex-col items-start justify-center pt-20 ${
        styles.minHeight as string
      }`}
    >
      <span className="text-xl font-semibold tracking-tight text-cyan-400">
        Hi, I&apos;m
      </span>
      <h1 className="mt-1 text-4xl font-semibold tracking-tight text-white">
        Samuel Palacios
      </h1>
      <h2 className="text-2xl font-semibold text-gray-400">
        a full-stack developer who loves to build things with code.
      </h2>
      <p className="mt-6 text-base font-normal text-gray-400">
        I&apos;m a software engineering student who loves to build things for
        the web. Through constant practice and learning, I create products that
        not only provide value to users, but are also exceptional and
        user-friendly.
      </p>

      <div className="btn-wrapper">
        <Link
          href="#projects"
          className="hover:to-blue-7 mt-8 inline-block transform rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          See my projects
        </Link>
      </div>
    </section>
  );
};

export default Hero;
