import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import ContactUs from "./pages/ContactUs"
import NavBar from "./components/NavBar"
import { useEffect } from "react"
import Footer from "./components/Footer"
import { navLinks } from "./const"

const App = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = `${navLinks.filter((item)=> item.url == location.pathname)[0].name}-Roofing Agency`
  }, [location])

  return (
    <>
         <NavBar/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App