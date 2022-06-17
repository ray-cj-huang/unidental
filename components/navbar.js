import Link from 'next/link'
// import Image from 'next/image'
import React, { forwardRef, useState, useRef } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav
        id="#navbar"
        className="flex w-screen flex-wrap items-center lg:p-6 p-2 border-b-2 border-gray-100"
      >
        {/* <span className="text-xl font-bold tracking-wide text-main-color">
          {process.env.NEXT_PUBLIC_COMPANY_NAME}
        </span> */}
        <Link href="/">
            <a>
                <img
                    src="/logo.svg"
                    alt="Unidental Logo"
                    className="h-12 ml-2"
                />
                </a>
        </Link>
        <button
          className="ml-auto inline-flex rounded p-3 text-main-color outline-none md:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full md:inline-flex md:w-auto md:flex-grow`}
        >
          <div className="flex w-full flex-col items-start md:ml-auto md:inline-flex md:h-auto md:w-auto md:flex-row md:items-center">
            <Link href="/about" passHref>
              <button
                type="button"
                className="w-full items-center justify-center rounded-full px-5 py-2 tracking-wide text-main-color md:inline-flex md:w-auto"
                >
                About Us
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button
                type="button"
                className="w-full items-center justify-center rounded-full bg-secondary px-5 py-2 tracking-wide text-main md:inline-flex md:w-auto"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
