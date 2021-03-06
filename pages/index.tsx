import type { NextPage } from "next";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { Footer } from "../components/organism/Footer";
import { Header } from "../components/organism/Header";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="/dist/output.css" rel="stylesheet" />
        </Head>

        <Header />

        <main>
          <h1>Soundhub</h1>
        </main>
        <button className="btn">Button</button>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
