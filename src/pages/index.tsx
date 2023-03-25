import { type NextPage } from "next";
import Hero from "../components/Hero";
import dynamic from "next/dynamic";
const MainContent = dynamic(() => import("../components/MainContent"));

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <MainContent />
    </>
  );
};

export default Home;
