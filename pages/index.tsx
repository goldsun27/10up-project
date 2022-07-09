import type { NextPage } from "next";
import Head from "next/head";

//Import component
import HeaderContent from "../components/HeaderContent";
import HeroContent from "../components/HeroContent";
import EyebrowTop from "../components/EyebrowTop";
import EyebrowBottom from "../components/EyebrowBottom";
import FooterContent from "../components/FooterContent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>10up App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/10up_Logo.svg" />
      </Head>
      <HeaderContent></HeaderContent>
      <HeroContent></HeroContent>
      <EyebrowTop></EyebrowTop>
      <EyebrowBottom></EyebrowBottom>
      <FooterContent></FooterContent>
    </div>
  );
};

export default Home;