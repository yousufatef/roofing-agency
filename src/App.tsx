import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import ContactUs from "./pages/ContactUs"
import NavBar from "./components/NavBar"
import { useEffect } from "react"
import Footer from "./components/Footer"

const App = () => {

  useEffect(() => {
    if (location.pathname === "/") document.title = `home-roofing agency`
    else document.title = `${location.pathname.replace("/"," ")}-roofing agency`
  },[])
  return (
    <>
      <BrowserRouter>
         <NavBar/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App