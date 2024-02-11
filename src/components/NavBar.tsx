import { useState } from "react"
import { NavLink } from "react-router-dom"
import { navLinks } from "../const"

const NavBar = () => {
   const [links] = useState(navLinks)
   const [isOpen, setIsOpen] = useState(false)
   const toggleNavBar = () => {
      
      setIsOpen(!isOpen)
   }
  return (
     <>
        {/* Large Screen*/}
      <div className="max-md:hidden bg-[url('/assets/headerBg.png')] bg-contain bg-center p-[40px]">  
         {/*Top NavBar*/}
         <div className="flex justify-between text-center py-3 text-white opacity-90 ">
            <p className="hidden md:block">+201115737646</p>
            <p className="hidden md:block">6 October, Giza, Egypt</p>
            <ul className="max-md:hidden flex justify-center">
            {["fa-facebook", "fa-instagram", "fa-twitter", "fa-linkedin"].map(
                  (socialIcon, index) => (
                     <li key={index} className="mr-2">
                        <a href="/">
                           <i className={`fa-brands ${socialIcon}`}></i>
                        </a>
                     </li>
                  ),
               )}
            </ul>
        </div>
        {/*NavBar*/}
        <nav >
           <div className="max-md:hidden flex justify-between items-center">
               <a href="/">
                  <img src="/assets/house-logo1-80x34.png" alt="Logo-img" />
               </a>
           <ul id="list" className="hidden md:flex justify-center items-center gap-4 text-white">
             {links.map((link) => (
               <li key={link.name} className="font-medium  opacity-75 hover:opacity-100">
                  <NavLink to={link.url}>
                     {link.name}
                  </NavLink>
               </li>
            ))}
           </ul>
           <div className="max-md:hidden text-white block">
            <i className="fa-solid fa-globe"></i>
            <select className="outline-none bg-transparent">
                <option value="English" className=" text-black">
                   English
                </option>
                <option value="Arabic" className=" text-black">
                   Arabic
                </option>
             </select>
           </div>
           </div>
           <h1 className="font-extrabold text-5xl bg-contain text-white p-7 text-center alien-center min-h-24">{location.pathname.replace("/","")}</h1>
        </nav>
        </div>
               
        {/*small Screen*/ }
        {!isOpen ?
         <div className="md:hidden bg-[url('/assets/headerBg.png')] bg-contain bg-center p-[40px]"> 
           <div className="flex justify-between items-center">
               <a href="/">
                  <img src="/assets/house-logo1-80x34.png" alt="Logo-img" />
              </a>
              <span
               className="text-white text-[35px] absolute right-6 cursor-pointer md:hidden"
               onClick={toggleNavBar}>
               {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
             </span>
           </div>
         <h1 className="font-extrabold text-5xl bg-contain text-white p-7 text-center alien-center min-h-24">{location.pathname.replace("/","")}</h1>
           </div> :          
           <div className="fixed w-[100%] max-h-full bg-[#4F1A2F] md:hidden bg-contain bg-center p-[40px]">
           <div className="flex justify-between items-center">
               <a href="/">
                  <img src="/assets/house-logo1-80x34.png" alt="Logo-img" />
              </a>
              <span
               className="text-white text-[35px] absolute right-6 cursor-pointer md:hidden"
               onClick={toggleNavBar}>
               {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
             </span>
           </div>
             <ul id="list" className=" text-white  w-[100%] h-[270px] overflow-hidden">
                           <div className="pt-[30px]">
                          {links.map((link) => (
                                 <li key={link.name} className="text-2xl font-bold pt-3">
                                 <NavLink onClick={toggleNavBar} to={link.url} className="opacity-75  pt-5 hover:opacity-100 transition-all duration-200">
                                    {link.name}
                                 </NavLink>
                             </li>
                           ))}
                  </div>
              </ul>
             <ul className="flex text-xl text-white mt-2">
             {["fa-facebook", "fa-instagram", "fa-twitter", "fa-linkedin"].map(
                (socialIcon, index) => (
                   <li key={index} className="mr-2">
                      <a href="/">
                         <i className={`fa-brands ${socialIcon}`}></i>
                      </a>
                   </li>
                ),
             )}
              </ul>
           </div>
        }

     </>
       
  )
}

export default NavBar