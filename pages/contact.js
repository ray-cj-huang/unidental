import Head from 'next/head'
import Link from 'next/link'

import { Widget } from '@typeform/embed-react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactInfo from '../components/contact-info'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Uni Dental: Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Uni Dental: Contact"
          content="To schedule an appointment now, call (626)458-2788!"
          key="desc"
        />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-6xl mt-6 font-bold text-primary">
          Contact Us
        </h1>

        <p className="mt-3 text-2xl">
          Make an appointment today!
        </p>

        <ContactInfo />

        <h1 className="text-4xl pt-6 font-bold">
          Got a question? Ask away!
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full border rounded-xl">
          <Widget id="HBn2scf7" className="my-form h-screen w-screen" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
