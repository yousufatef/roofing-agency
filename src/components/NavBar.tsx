import { useState } from "react"
const NavBar = () => {
   const [links] = useState([
      { name: "Home", url: "/" },
      { name: "About", url: "about" },
      { name: "Services", url: "services" },
      { name: "Projects", url: "projects" },
      { name: "Contact", url: "contact" },
   ])
   const [isOpen, setIsOpen] = useState(false)
   const toggleNavBar = () => {
      setIsOpen(!isOpen)
   }
   return (
      <div className="bg-[url('/src/assets/headerBg.png')] bg-contain bg-center p-[40px]">
      <div className="  hidden md:flex justify-between text-center py-3 text-white opacity-90 ">
         <p>+201115737646</p>
         <p>6 October, Giza, Egypt</p>
         <ul className="flex justify-center">
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

      <nav className="flex justify-between text-center py-4">
         <a href="/">
            <img src="/assets/house-logo1-80x34.png" alt="Logo-img" />
         </a>
         {!isOpen ? <ul id="list" className="hidden md:flex justify-center items-center gap-4 text-white">
            {links.map((link) => (
               <li key={link.name} className="font-medium  opacity-75 hover:opacity-100">
                  <a href={link.url} className="">
                     {link.name}
                  </a>
               </li>
            ))}
         </ul> : <ul id="list" className="md:hidden block bg-[#4F1A2F] text-white absolute left-0 top-0 w-[100%] h-[270px] overflow-hidden">
             <a href="/" className="absolute top-[30px] left-[15px] mt-[10px]">
            <img src="/assets/house-logo1-80x34.png" alt="Logo-img" className="pt-[1.5rem]"/>
             </a>
            <div className="pt-[30px]">
            {links.map((link) => (
                  <li key={link.name} className="text-[20px] font-bold pt-3">
                  <a href={link.url} className="opacity-75  pt-5 hover:opacity-100 transition-all duration-200">
                     {link.name}
                  </a>
               </li>
            ))}
            </div>
         </ul>}
         <div className="text-white hidden md:block">
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
         <span
            className="text-white text-[35px] absolute right-6 cursor-pointer md:hidden"
            onClick={toggleNavBar}>
            {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
         </span>
      </nav>
      <h1
         className="font-extrabold text-5xl bg-contain text-white p-7 text-center alien-center min-h-24">{ location.pathname.replace("/","")}</h1>
     </div>   
   )
}

export default NavBar