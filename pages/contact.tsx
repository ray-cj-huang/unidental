import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Widget } from "@typeform/embed-react";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col grow">
      <Head>
        <title>Uni Dental: Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Uni Dental: Contact"
          content="To schedule an appointment now, call (626)458-2788!"
          key="desc"
        />
      </Head>

      <main className="flex flex-col grow items-center justify-around w-full flex-1 text-center">
        <h1 className="sm:text-6xl text-4xl font-bold text-primary">Contact Us</h1>

        <p className="text-xl text-left md:px-0 px-5">
          Phone:{" "}
          <a
            href="tel:+16264582788"
            className="font-bold hover:text-primary focus:text-primary"
          >
            (626)458-2788
          </a>
          <br />
          Address:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/USMjjXawef8i7bse8"
            className="font-bold hover:text-primary focus:text-primary"
          >
            5898 Encinita Ave, Temple City, CA 91780
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto: contact@unidental.us"
            className="font-bold hover:text-primary focus:text-primary"
          >
            contact@unidental.us
          </a>
        </p>

        <Image src="/hours.png" alt="Office Hours" width={350} height={350} />
      </main>
    </div>
  );
};

export default Home;
