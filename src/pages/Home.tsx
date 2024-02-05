import { useState } from "react"
import ServiceRequest from "../components/ServiceRequest"
import ContactF from "../components/ContactForm"


const Home = () => {
  const [statisticsBox] = useState([
    {range: "15+", title:"Years in Business", bgColor: "primary", textColor: "white"},
    {range: "1.5K", title:"Happy Clients", bgColor: "white", textColor: "primary"},
    {range: "2.5k", title:"Projects Completed", bgColor: "primary", textColor: "white"},
    {range: "150+", title:"Trained Staff", bgColor: "white", textColor: "primary"}
  ])
  const [serviceBox] = useState([
    {image: "services-1.jpg", title :"Roof Installations", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"},
    {image: "services-2.png", title :"Roof Repair", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"},
    {image: "service-3-.png", title :"Leak Repair", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi placeat dolor quae nesciunt blanditiis atque suscipit accusantium"}
  ])
  const [offers] = useState(["Stucco", "Window Replacement", "Skylights & Sun Tunnels", "Chimney Spark Arrestor", "Interior Sheetrock Repair"])
  const [sixReasons] = useState([
    {icon: "fa-solid fa-award", title: "Quality Material", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {icon: "fa-regular fa-circle-check", title: "Accredited", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {icon: "fa-regular fa-user", title: "Trained Workers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {icon: "fa-regular fa-clock", title: "Time Availability", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {icon: "fa-solid fa-phone-volume", title: "Quick Response", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {icon: "fa-solid fa-certificate", title: "1 Year Warranty", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
  ])
  const [employees] = useState([
    {image: "profile-1.jpg", name: "Youssef Atef", position: "CEO", descriptipn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."},
    {image: "profile-2.jpg", name: "Mohamed Ali", position: "CHEF", descriptipn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."},
    {image: "profile-3.png", name: "Omar Yahya", position: "CFO", descriptipn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
  ])

  return (
    <div>
      <ServiceRequest/>
      {/* About Company */}
      <div className="py-4 flex text-center justify-center items-center flex-col md:grid md:grid-cols-2">
        <div className="relative">
            <img src="/assets/photo-hero-15.jpg" alt="services-img" className="max-w-full p-5 hover:translate-y-1.5 duration-300 ease-in"/>
            <img src="/assets/photo-54.jpeg" alt="services-img" className="absolute w-[50%] bottom-[-30px] right-[11px] hover:translate-y-1.5 duration-300 ease-in "/>
        </div>
        <div className=" px-[25px] py-[80px]">
          <p className="font-bold text-lg text-primary">About Company</p>
          <h1 className="font-bold text-3xl leading-10 text-globalColor">Professional Roofing Contractors</h1>
          <p className="leading-9 text-globalColor mb-3">
               Donec rutrum congue leo eget malesuada. 
               Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
               Vestibulum ante ipsum primis in faucibus orci luctus et
            </p>
          <p className="leading-9 text-globalColor">
               ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
                Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
            <div className="mt-2">
                <i className="fa-solid fa-certificate text-primary"></i>
                <span className="ml-2 text-globalColor">Certified Company</span>
            </div>
            <div className="mt-8">
              <button className="bg-primary text-white p-2 hover:opacity-[0.9]">Read More</button>
            </div>
         </div>
      </div>
      {/* statisticsBox Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center mt-[30px]">
      {statisticsBox.map(box =>(
        <div key={box.title} className={`bg-${box.bgColor} text-${box.textColor} p-[25px] w-[270px] h-[120px] max-lg:w-[400px] max-sm:w-[100%]`} >
        <h2 className="font-bold text-[30px]">{box.range}</h2>
        <p>{box.title}</p>
      </div>
      ))}
      </div>
      {/* Additional Services Section */}
      <div className="bg-third text-white text-center py-[50px]"> 
        <div className="py-5">
        <h4 className="text-primary font-bold text-xl">Our Services</h4>
         <h2 className="font-semibold text-4xl">We Provide Superior Roofing Services</h2>
        </div>  
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[50px]">
          {serviceBox.map(box => (
            <div key={box.title}>
              <img src={`/assets/${box.image}`} alt="service-image" className="p-3"/>
              <div className="p-4">
                <h2 className="font-bold text-xl">{box.title}</h2>
                <p>{box.paragraph}</p>
              </div>
              <a href="#" className="hover:text-primary font-semibold transition-all duration-200">
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[100px]">
          <div className="flex flex-col justify-center md:items-start md:justify-start md:text-left gap-[12px] p-5">
            <h4 className="text-primary font-bold text-xl">Additional Services</h4>
            <h2 className="font-semibold text-5xl">We Also Offer</h2>
            <p className="tracking-[0.8px]">Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.</p>
            <div>
              {offers.map(ofer => (
                 
                <p className="pt-4"> <i className="fa-solid fa-arrow-right pr-2"></i>  {`${ofer}`}</p>
              ))}
              
            </div>
            <div className="mt-8">
              <button className="bg-primary text-white p-2  rounded hover:opacity-[0.9]">Know More</button>
            </div>
          </div>
          <img src="/assets/services-11.jpg" alt="services-image" className="m-auto"/>
        </div>
      </div>
        {/* six Reason Section */}
      <div className="bg-[url('/src/assets/shape-3.png')] bg-contain bg-center">
      <div className="p-[25px] pt-[50px]">
        <h4 className="text-primary font-bold text-xl">Why Choose Us</h4>
         <h2 className="font-semibold text-4xl text-secondary">Six Reasons For People Choosing Us</h2>
        </div>  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[25px]">
          {sixReasons.map(reason => (
            <div key={reason.title} className="p-[30px]  bg-white flex flex-col justify-center items-center text-center rounded shadow-md">
              <i className={`${reason.icon} text-secondary text-[40px] py-2`}></i>
              <h2 className="text-primary font-bold text-xl py-3">{reason.title}</h2>
              <p className="font-normal tracking-[0.8] py-2">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* We Are Business Section */}
      <div className="flex justify-center items-center gap-[15px] flex-col md:grid md:grid-cols-3 p-[30px] pt-[50px]">
        <div className="md:text-left">
          <h4 className="text-primary font-bold text-xl text-wrap">We Are Business Who Cares, And it Shows</h4>
          <p>OVER 540 “5 STARS” REVIEWS AND CLIMBING</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src="/assets/yelp.png" alt="yelp-image" className="w-[100px] h-[100px]"/>
          <h4 className="text-secondary font-bold text-[18px]">Rate Us on Yelp</h4>
          <p>248 reviews</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src="/assets/logo-google.png" alt="yelp-image" className="w-[100px] h-[100px]"/>
          <h4 className="text-secondary font-bold text-[18px]">Rate Us on Yelp</h4>
          <p>248 reviews</p>
        </div>
      </div>
      {/* People Say The Nicest Things Section */}
      <div className="felx flex-col bg-gray-100 py-[50px]">
        <div className="p-5 pb-[50px] text-center">
          <h2 className="text-secondary text-[45px] font-bold p-3">People Say The Nicest Things</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {employees.map(employee => (
                <div className="rounded shadow-md p-5 m-4 bg-white flex flex-col justify-center items-center text-center">
                  <img src={`/assets/${employee.image}`} alt="profile-image" className="w-[100px] h-[100px] rounded-[50%] my-3"/>
                  <div>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
                  </div>
                  <h3 className="text-secondary font-bold py-3">{employee.name}</h3>
                  <span>{employee.position}</span>
                  <p className="py-3">{employee.descriptipn}</p>
                </div>
              ))}
            </div>

      </div>
      {/* Get A Solutions Section */}
      <div className="bg-[url('/src/assets/quotes-min.jpg')] bg-cover bg-center text-center h-[200px] flex flex-col justify-center items-center"> 
          <h3 className="text-white font-bold text-1xl md:text-2xl">Don't Know What To Start With?</h3>
        <h4 className="text-white font-bold text-3xl md:text-4xl">Get A Solutions For All Roofing Services</h4>
      </div>
      {/* Head Office Section*/}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <div className="flex flex-col text-center md:text-left gap-5 p-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-primary font-bold text-2xl">Offices</h2>
              <h4 className="text-secondary font-bold text-3xl">Head Office</h4>
              <p>Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>24th St. Ave. San Francisco, California</p>
              <p>Phone: +1 2345 678</p>
              <p>Email: office@example.com</p>
            </div>
          </div>
          <div className="py-5 text-center">
            <h3 className="text-primary font-bold text-2xl">Free Consultation</h3>
            <h2 className="text-secondary font-bold text-4xl">Get A Free Quote</h2>
            <ContactF/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home