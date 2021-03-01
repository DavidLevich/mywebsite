import React from "react"
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import '../styles/global.css'


const IndexPage = () => (
  <div id='home'>
    <Navbar />
    <About />
    <hr id='projects'/>
    <Cards />
    <hr/>
    <Experience />
    <Footer />
  </div>
)

export default IndexPage
