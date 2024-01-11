import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import ContactUs from "./pages/ContactUs"
import NavBar from "./components/NavBar"

const App = () => {
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
      </BrowserRouter>
    </>
  )
}

export default App