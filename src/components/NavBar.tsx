import { useState } from "react"

const NavBar = () => {
  const [links] = useState(["About", "Services", "Projects", "Contact"])
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleNavBar = () =>{
    setIsOpen(!isOpen)
    document.getElementById("list").style.display = "flex"
  }
  return (
    <div className="header">
      {/* create above navBar that contain number and address and social-links*/}
      <div id="above-nav" className="grid grid-cols-3 justify-around text-center py-3 bg-red-600 text-white opacity-[0.9] max-md:hidden">
      <div>
        <p>+201115737646</p>
      </div>
      <div>
        <p>6 October, Giza, Egypt</p>
      </div>
      <ul className="flex justify-center">
        <li className="mr-2"><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
        <li className="mr-2"><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
        <li className="mr-2"><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
        <li className="mr-2"><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
      </ul>
      </div>
      {/* create navBar that contain Logo and links and btn */}
      <div id="nav" className="grid grid-cols-3 justify-around text-center py-4 bg-blue-500">
      <div className="flex justify-center max-md:mb-6">
        <a href="/">
          <img src="../../src/assets/house-logo1-80x34.png" alt="Logo-img" />
        </a>
      </div>
      
      <ul id="list" className="flex justify-center max-md:bg-red-500 text-white max-md:flex max-md:flex-col max-md:mb-5 max-md:absolute max-md:item-center max-md:bg-white max-md:w-full max-md:left-0 max-md:top-0 max-md:py-5 max-md:hidden">
       <li className="max-md:mb-2 max-md:font-medium max-md:text-lg">
            <a href="/" className="px-2">Home</a>
       </li>
        {links.map((link)=>(
          <li key={link} className="max-md:mb-2 max-md:font-medium max-md:text-lg">
            <a href={`/${link.toLocaleLowerCase()}`} className="px-2">{link}</a>
          </li>
        ))}
      </ul>
      
       {/* malty Lang */}
       <div className="text-white max-md:mt-3 max-md:hidden">
        <i className="fa-solid fa-globe"></i>
        <select className="outline-none bg-transparent ml-1">
          <option value="English" className="bg-transparent text-black">English</option>
          <option value="Arabic" className="bg-transparent text-black">Arabic</option>
        </select>
      </div>
      <span className="  max-md:text-white text-3xl absolute right-6 cursor-pointer md:hidden" onClick={toggleNavBar}>
        {isOpen ?  "" : <i className="fa-solid fa-bars"></i>}
        </span>
      </div>
    </div>
  )
}
export default NavBar