import Head from 'next/head'
import Link from 'next/link'

import React, { useRef, useEffect, useState } from 'react';

import Navbar from '../components/navbar'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicmF5anVseSIsImEiOiJja3V6MjNyejAyb2ZxMm5vNjlkZW01OWp1In0.K5dU1jCg4uuXRFjGA_7Lpw';

const fullConfig = resolveConfig(tailwindConfig)

export default function Location() {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  const longLatDental = [-118.06777824461415, 34.10531257597108];

  useEffect(() => {
    setPageIsMounted(true)
      const map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: longLatDental,
        minZoom: 15,
      });
      const popup = new mapboxgl.Popup({ closeOnClick: false, closeButton: false, className: 'text-xl text-link font-bold underline' })
        .setLngLat(longLatDental)
        .setHTML(
          '<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/phWDHDtJRd4e8Uos7">5898 Encinita Ave, Temple City, CA 91780</a>'
        )
        .addTo(map);
      const unidental = new mapboxgl.Marker({color: fullConfig.theme.colors.secondary})
        .setLngLat(longLatDental)
        .setPopup(popup)
        .addTo(map);
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Uni Dental: Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-primary text-6xl font-bold mt-6 mb-6">
          Location
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mb-6 sm:w-full">
          <p className="text-2xl">
            We are located near the intersection of Las Tunas Drive and Encinita Ave!
          </p>
        </div>

        <div className="w-screen h-screen md:px-12">
          <div id="my-map" className="w-full h-full"/>
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
