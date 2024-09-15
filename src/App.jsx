import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <>
    <Header />
    <About />
    <br/>
    <Services/>
    <br/>
    <Testimonials />
    <br/>
    <Contact />
    <br/>
    <Footer/>
    </>
  )
}

export default App