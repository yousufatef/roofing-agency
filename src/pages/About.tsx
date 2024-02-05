import { useState } from "react"

const About = () => {
  const [sixReasons] = useState([
    {icon: "fa-regular fa-circle-check", title: "Accredited Company", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {icon: "fa-solid fa-user-shield", title: "100% Guarantee", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {icon: "fa-solid fa-helmet-safety", title: "Quality Material", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  ])

  return (
    <div>
      <img src="/src/assets/about-us-1.jpg" alt="about-us-image" className="rounded-none w-[100%]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] p-5 py-8">
        <div className="flex flex-col gap-1 p-5 text-center md:text-left">
          <h3 className="text-primary font-bold text-2xl">About Company</h3>
          <h2 className="text-secondary font-bold text-4xl">Professional and Expert Roofing Contractor</h2>
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada..
          </p>
          <button className="bg-primary text-white p-2 mt-5 md:w-[150px] hover:opacity-[0.9] rounded-sm">Read More</button>
        </div>
        <div className="flex flex-col gap-2 p-5 text-center md:text-left">
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada..
          </p>
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada..
          </p>
          <div >
            <div className="flex gap-4 py-5 justify-center md:justify-start text-center items-center">
            <img src="/src/assets/founder.jpg" alt="founder-image" className="w-[80px] h-[80px] rounded-full" />
            <div className="text-center">
              <h4 className="pb-1 text-secondary font-bold text-xl">Max Stewart</h4>
              <p className="tracking-[0.9] leading-8 text-xl font-normal ">Founder</p>
            </div>
            </div>
            <h3 className="text-secondary font-bold text-xl ">Need help? Contact me</h3>
            <p>+1 2345 678 or info@example.com</p>
          </div>
        </div>
      </div>
      {/* Our History Section */}
      <div className="bg-secondary text-center py-[80px]">
        <div className="pb-10">
          <h4 className="text-primary font-bold text-xl">Our History</h4>
          <h2 className="text-white font-bold text-4xl">Superior Roofing Services</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] m-auto">
          <div className="flex flex-col sm:flex-row p-4 gap-4 m-auto">
            <img src="/src/assets/about-us-11.jpg" alt="about-us-image" className="max-w-[280px] max-h-[280px]"/>
            <img src="/src/assets/about-us-12.jpg" alt="about-us-image" className="max-w-[280px] max-h-[280px]"/>
          </div>
          <div className="text-white py-[25px] pl-[100px] pr-[100px] lg:text-left">
            <p className="text-primary text-xl font-bold pb-5">1993 - 2017</p>
            <h3 className="text-2xl font-bold pb-3">Our Most Efficient Year</h3>
            <p className="tracking-[0.8] leading-5">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.
              <br />Vestibulum ac diam sit amet quam vehicula elementum <br /> sed sit amet dui. Sed porttitor lectus nibh.
            </p>
            <button className="bg-primary text-white p-2 hover:opacity-[0.9] rounded-sm mt-10">Read More</button>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="bg-[url('/src/assets/shape-3.png')] bg-contain bg-center">
      <div className="p-[25px] pt-[50px]">
        <h4 className="text-primary font-bold text-xl">Why Choose Us</h4>
         <h2 className="font-semibold text-4xl text-secondary">Reason For Choosing Us</h2>
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
      {/* Working With The Best Section */}
      <div className="bg-primary text-white items-center text-center p-5 py-[50px]">
      <div className="pb-10">
          <h4 className="font-bold text-xl">Working With The Best</h4>
          <h3 className="font-bold text-5xl">Our Partners</h3>
        </div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-3">
          <img src="/src/assets/logo-1.png" alt="logo-image" className="w-[250px]"/>
          <img src="/src/assets/logo-2.png" alt="logo-image" className="w-[250px]" />
          <img src="/src/assets/logo-17.png" alt="logo-image" className="w-[250px]" />
          <img src="/src/assets/logo-4.png" alt="logo-image" className="w-[250px]" />
        </div>
      </div>
    </div>
  )
}

export default About