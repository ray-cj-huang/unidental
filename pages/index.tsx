import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex grow w-screen flex-col items-center">
      <Head>
        <title>Uni Dental</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Uni Dental"
          content="We are a family-owned dental office in Temple City, CA 😊"
          key="desc"
        />
      </Head>

      <main className="flex grow flex-col items-center justify-around w-screen text-center">
        <h1 className="lg:text-5xl text-4xl font-bold">
          Welcome to <p className="text-primary">Uni Dental!</p>
        </h1>

        <p className="text-2xl px-5">
          We are a family-owned dental office in Temple City, CA 😊
        </p>

        <Image src="/hours.png" alt="Office Hours" width={350} height={350} />
      </main>
    </div>
  );
};

export default Home;
