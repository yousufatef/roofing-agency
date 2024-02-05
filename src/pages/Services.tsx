import { useState } from "react"

const Services = () => {
  const [serviceBox] = useState([
    {image: "services-1.jpg", title :"Roof Installations", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"},
    {image: "services-2.png", title :"Roof Repair", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"},
    {image: "service-3-.png", title :"Leak Repair", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"},
    {image: "vegetative-roof.jpg", title :"Vegetative Roofing", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"},
    {image: "metal-roof-1.jpg", title :"Specialty Metal", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"}
  ])
  return (
    <div>
      {/* Our Services Section*/}
      <div>
        <div className="p-[25px] pt-[50px] max-sm:text-center">
          <h4 className="text-primary font-bold text-2xl">Our Services</h4>
          <h2 className="text-secondary font-bold text-4xl">Trust the Experience</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[25px]">
          {serviceBox.map(box => (
            <div key={box.title} className="p-[30px]  bg-white flex gap-4 flex-col justify-center  rounded shadow-md">
              <img src={`/src/assets/${box.image}`} alt="service-image" />
              <h2 className="text-secondary font-bold text-2xl">{box.title}</h2>
              <p className="text-[18px] tracking-[0.8] leading-7">{box.paragraph}</p>
            </div>
          ))}  
        </div>
      </div>  
      {/*Roof Inspection Section*/}
      <div>
        <div className="bg-[url('/src/assets/rood-inspection-min.jpg')] bg-cover bg-center p-[40px]">
          <div className="bg-white flex flex-col text-center py-10">
            <div className="flex flex-col text-center gap-3 p-3">
              <h4 className="text-primary font-bold text-2xl">Roof Inspection</h4>
              <h2 className="font-bold text-4xl text-secondary">Scheduling An Appointment</h2>
              <p className="text-[18px] tracking-[0.8] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <form className="flex flex-col text-center gap-3 p-10 w-[90%] m-auto">
              <input type="text" placeholder="Enter your full name" className='w-[100%] h-[40px] p-2 border rounded-sm border-gray-400 outline-none'/>
              <input type="text" placeholder="Phone number" className='w-[100%] h-[40px] p-2 border rounded-sm border-gray-400 outline-none'/>
              <button className="bg-primary text-white p-2 mt-5  hover:opacity-[0.9] rounded-sm">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services