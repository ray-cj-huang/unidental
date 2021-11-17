import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactInfo from '../components/contact-info'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Uni Dental</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Uni Dental"
          content="We are a family-owned dental office in Temple City, CA 😊"
          key="desc"
        />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-6xl mt-6 font-bold">
          Welcome to{' '}
          <p className="text-primary">Uni Dental!</p>
        </h1>

        <p className="mt-3 text-2xl">
          We are a family-owned dental office in Temple City, CA 😊
          {/* Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code> */}
        </p>

        <ContactInfo />

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {/* <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
