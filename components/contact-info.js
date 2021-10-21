export default function ContactInfo() {
  return (
    <div className="flex overflow-x-scroll md:overflow-hidden w-full justify-around p-6 mt-6 border rounded-xl">
      <pre className="text-left text-lg w-full">
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
  )
}