import Head from 'next/head'
import Link from 'next/link'

import { Widget } from '@typeform/embed-react'

import Navbar from '../components/navbar'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Uni Dental: Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-6xl mt-6 font-bold">
          Contact Us
        </h1>

        <p className="mt-3 text-2xl">
          Make an appointment today!
        </p>

        <div className="flex overflow-scroll w-full justify-around p-6 mt-6 border rounded-xl">
          <pre className="text-left text-lg">
            Phone: <a href="tel:+16264582788" className="font-bold hover:text-primary focus:text-primary">(626)458-2788</a><br/>
            <br/>
            Office Hour: Monday     9:30 am - 6:00 pm<br/>
        {'             '}Tuesday    9:30 am - 6:00 pm<br/>
        {'             '}Wednesday  9:30 am - 6:00 pm<br/>
        {'             '}Thursday   Closed<br/>
        {'             '}Friday     9:30 am - 6:00 pm<br/>
        {'             '}Saturday   9:30 am - 6:00 pm<br/>
        {'             '}Sunday     Closed<br/>
          <br/>
            Address: <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/phWDHDtJRd4e8Uos7" className="font-bold hover:text-primary focus:text-primary">5898 Encinita Ave, Temple City, CA 91780</a>
          </pre>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full border rounded-xl">
          <Widget id="HBn2scf7" className="my-form h-screen w-screen" />
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
