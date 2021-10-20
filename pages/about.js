import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/navbar'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Uni Dental: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-primary text-6xl font-bold mt-6">
          About Us
        </h1>

        <p className="mt-6 text-2xl">
          We are a family-owned dental office in Temple City, CA 😊
        </p>

        <h1 className="text-4xl pt-6 font-bold">
          Our Values
        </h1>

        <div
          className="p-6 mt-6 border rounded-xl hover:text-primary focus:text-primary"
        >
          <p className="text-left text-lg min-w-96">
            <strong>Uni</strong>que because we are a family caring for families.<br/>
            <strong>Uni</strong>versal because we provide high quality dental care for everyone, regardless of ability to pay.<br/>
            <strong>Uni</strong>ted because we bring our team members and our clients together.<br/>
            <br/>
            Uni brings U-N-I (you and I) together
          </p>
        </div>

        {/* <div className="flex flex-wrap items-center justify-center max-w-4xl mt-6 sm:w-full">
          <p className="text-left text-lg">
            <strong>Uni</strong>que because we are a family caring for families.<br/>
            <strong>Uni</strong>versal because we provide high quality dental care for everyone, regardless of ability to pay.<br/>
            <strong>Uni</strong>ted because we bring our team members and our clients together.<br/>
            <br/>
            Uni brings U-N-I (you and I) together
          </p>
        </div> */}

        <h1 className="text-4xl pt-6 font-bold">
          Our Team
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl pb-6 sm:w-full">
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
            <h3 className="text-2xl font-bold">Dr. Timothy Hung, DDS</h3>
            <p className="mt-4 text-xl">
              {/* Learn about Next.js in an interactive course with quizzes! */}
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
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
            <h3 className="text-2xl font-bold">Ling Wang</h3>
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

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://unidental.us/"
        >
          All rights reserved by Uni Dental{' '}
          <img
            src="/logo.svg"
            alt="Unidental Logo"
            className="h-8 ml-2"
          />
        </a>
      </footer> 
    </div>
  )
}
