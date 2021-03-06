import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Uni Dental: About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Uni Dental: About"
          content="Learn more about Uni Dental, located in Temple City, CA!"
          key="desc"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="pt-8 pb-2 text-primary text-6xl font-bold">About Us</h1>

        <p className="text-2xl">
          We are a family-owned dental office in Temple City, CA 😊
        </p>

        <h1 className="pt-6 pb-3 text-4xl font-bold">Our Values</h1>

        <div className="w-3/4 p-12 border rounded-xl hover:text-secondary focus:text-primary">
          <p className="text-left sm:text-md md:text-xl tracking-wide min-w-96">
            <strong className="text-primary">Uni</strong>que because we are a
            family caring for families.
            <br />
            <strong className="text-primary">Uni</strong>versal because we
            provide high quality dental care for everyone, regardless of ability
            to pay.
            <br />
            <strong className="text-primary">Uni</strong>ted because we bring
            our team members and our clients together.
            <br />
          </p>
        </div>

        <h1 className="pt-6 text-4xl font-bold">Our Team</h1>

        <div className="flex flex-wrap items-center justify-around w-3/4 pb-6 sm:w-full">
          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dr. David Huang, DDS</h3>
            <p className="mt-4 text-xl">
              {/* Find in-depth information about Next.js features and API. */}
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dr. Jason Huang, DDS</h3>
            <p className="mt-4 text-xl">
              {/* Find in-depth information about Next.js features and API. */}
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dr. Timothy Hung, DDS</h3>
            <p className="mt-4 text-xl">
              {/* Learn about Next.js in an interactive course with quizzes! */}
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Shawnt Issakhanian</h3>
            <p className="mt-4 text-xl">
              {/* Discover and deploy boilerplate example Next.js projects. */}
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Ling</h3>
            <p className="mt-4 text-xl">
              {/* Instantly deploy your Next.js site to a public URL with Vercel. */}
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Tina</h3>
            <p className="mt-4 text-xl">
              {/* Discover and deploy boilerplate example Next.js projects. */}
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Joanie</h3>
            <p className="mt-4 text-xl">
              {/* Instantly deploy your Next.js site to a public URL with Vercel. */}
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
