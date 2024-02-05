import ContactF from "../components/ContactForm"

const ContactUs = () => {
  return (
    <div>
      {/* Get In Touch Section*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 py-14">
        <img src="/assets/contact-us-1.jpg" alt="contact-us-image" className="max-h-[450px] max-md:m-auto"/>
        <div className="flex flex-col gap-3 text-center">
          <div className="flex flex-col justify-center items-center py-3">
            <h4 className="text-primary font-bold text-2xl">Get In Touch</h4>
            <h2 className="text-secondary font-bold text-4xl">Any Question? Write Down And Send Us</h2>
          </div>
          <div>
            <ContactF/> 
          </div>
        </div>
      </div>
      {/* Cards Section*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[25px] py-[80px]">
        <div className="p-[30px] h-[300px] bg-white flex gap-3 flex-col justify-center items-center text-center rounded shadow-md">
          <div className="md:flex gap-5 items-center">
            <i className="fa-solid fa-location-arrow text-primary text-3xl"></i>
            <h2 className="text-secondary font-bold text-4xl">Main Office</h2>
          </div>
            <div className="text-center">
              <p className="text-secondary font-bold text-xl">San Francisco, CA</p>
              <p className="text-xl tracking-[0.8]">20 Reynolds Neck Str-50121</p>
            </div>
        </div>
        <div className="p-[30px] h-[300px] bg-white flex gap-3  flex-col justify-center items-center text-center rounded shadow-md">
          <div className="md:flex gap-5 items-center">
            <i className="fa-solid fa-phone text-primary text-3xl"></i>
            <h2 className="text-secondary font-bold text-4xl">Make a Call</h2>
          </div>
            <div className="text-center">
              <p className="text-secondary font-bold text-xl">+1 2345 678</p>
              <p className="text-xl tracking-[0.8]">2Mon - Sat: 09am - 08pm</p>
            </div>
        </div>
        <div className="p-[30px] h-[300px] bg-white flex gap-3  flex-col justify-center items-center text-center rounded shadow-md">
          <div className="md:flex gap-5 items-center">
            <i className="fa-solid fa-envelope text-primary text-3xl"></i>
            <h2 className="text-secondary font-bold text-4xl">Send a Mail</h2>
          </div>
          <p className="text-center text-xl tracking-[0.8]">info@example.com</p>
        </div>
      </div>
      {/* map Section*/}
      <div className="py-[80px]">
        <div className="flex justify-center items-center w-[100%]">
          <iframe width="100%" height="500" frameBorder="0" scrolling="no"  src="https://maps.google.com/maps?width=80%25&amp;height=600&amp;hl=en&amp;q=San%20Francisco,%20CA%20%2020%20Reynolds%20Neck%20Str-50121+(Roofing%20agency)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
