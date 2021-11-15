export default function Footer() {
  return (
    <div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://unidental.us/"
        >
          All rights reserved by Uni Dental, Practice of David Huang DDS Inc.{' '}
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