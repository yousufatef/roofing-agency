import { useState } from "react";

const Footer = () => {
  const [quickLinks] = useState(["Privacy Policy", "Terms Of Service", "Credits", "FAQ"])
  const [ourService] = useState(["Roof Installation", "Roof Repair", "Leak Repair", "Window Changing"])
  return (
    <div className="bg-secondary flex justify-center flex-col p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] pb-8 border-b-[1px] border-slate-400">
        <div className="p-2 text-center md:text-left">
          <h3 className="text-primary font-bold text-2xl">About</h3>
          <p className="text-white py-5 flex-wrap">Cras ultricies ligula sed magna dictum porta. Vestibulum ante primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
          <ul className="flex justify-center md:justify-start">
            {["fa-facebook", "fa-instagram", "fa-twitter", "fa-linkedin"].map(
               (socialIcon, index) => (
                  <li key={index} className="mr-5">
                     <a href="/">
                        <i className={`fa-brands ${socialIcon} text-[25px] text-primary hover:text-white transition-all duration-200`}></i>
                     </a>
                  </li>
               ),
            )}
         </ul>
        </div>
        <div className="p-2 text-center md:text-left">
          <h3 className="text-primary font-bold text-2xl pb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-white">
            {quickLinks.map(link => (
              <span key={link} className="cursor-pointer hover:text-primary transition-all duration-200">{link}</span>
            ))}
           </div>
        </div>
        <div className="p-2 text-center md:text-left">
          <h3 className="text-primary font-bold text-2xl pb-4">Our Services</h3>
          <div className="flex flex-col gap-2 text-white">
            {ourService.map(service => (
              <span key={service} className="cursor-pointer hover:text-primary transition-all duration-200">{service}</span>
            ))}
           </div>
        </div>
        <div className="p-2 text-center md:text-left">
          <h3 className="text-primary font-bold text-2xl">Free Estimate</h3>
          <p className="text-white py-5 flex-wrap">Call Us: +1 2345 6789</p>
          <p className="text-white py-5 flex-wrap">Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis.</p>
        </div>

      </div>
      <div className="flex justify-between text-white pt-8">
        <p>{`Copyright © ${new Date().getFullYear()} Youssef Atef`}</p>
        <p>Powered By Youssef Atef</p>
      </div>
    </div>
  )
};

export default Footer;
