import React from "react"
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet'
import '../styles/global.css'


const IndexPage = () => (
  <div id='home'>
    <Helmet>
      <title>DavidIOS</title>
      <meta name='description' content='Software developer studying Computer Science and Mathematics at NYU Courant. Focusing on full-stack web development.' />
    </Helmet>
    <Navbar />
    <About />
    <hr id='projects'/>
    <Cards />
    <hr id='contact'/>
    <Experience />
    <Footer />
  </div>
)

export default IndexPage
