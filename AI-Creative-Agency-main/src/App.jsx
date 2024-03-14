
import './App.css'
import About from './Components/About/About'
import Contact from './Components/ContactUS/Contact'
import Customer from './Components/Customer/Customer'
import Footer from './Components/Footer/Footer'
import Gallery from './Components/Gallery/Gallery'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Project from './Components/Project/Project'
import Services from './Components/Services/Services'

function App() {


  return (
    <>
     <Header/>
     <Hero/>
     {/* <About/> */}
     <Services/>
     <Customer/>
     {/* <Project/> */}
     <Gallery/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
