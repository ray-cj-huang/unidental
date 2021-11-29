export default function ContactInfo() {
  return (
    <div>
      <div className="flex overflow-hidden w-full justify-around p-6 m-6">
        <div className="text-left text-lg w-full">
          Phone: <a href="tel:+16264582788" className="font-bold hover:text-primary focus:text-primary">(626)458-2788</a><br/>
          Address: <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/phWDHDtJRd4e8Uos7" className="font-bold hover:text-primary focus:text-primary">5898 Encinita Ave, Temple City, CA 91780</a>
          <br/><br/>
          <strong>Office Hours</strong>
          <div className="flex">
            <div className="flex-1">Monday</div>     <div className="flex-auto">9:30 am - 6:00 pm</div>
          </div>
          <div className="flex">
            <div className="flex-1">Tuesday</div>    <div className="flex-auto">9:30 am - 6:00 pm</div>
          </div>
          <div className="flex">
            <div className="flex-1">Wednesday</div>  <div className="flex-auto">9:30 am - 6:00 pm</div>
          </div>
          <div className="flex">
            <div className="flex-1">Thursday</div>   <div className="flex-auto">Closed</div>
          </div>
          <div className="flex">
            <div className="flex-1">Friday</div>     <div className="flex-auto">9:30 am - 6:00 pm</div>
          </div>
          <div className="flex">
            <div className="flex-1">Saturday</div>   <div className="flex-auto">9:30 am - 6:00 pm</div>
          </div>
          <div className="flex">
            <div className="flex-1">Sunday</div>     <div className="flex-auto">Closed</div>
          </div>              
        <br/>
        </div>
      </div>
    </div>
  )
}