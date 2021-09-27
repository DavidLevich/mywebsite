import React from 'react'
import { Card } from 'react-bootstrap'
import SkillsDesktop from './SkillsDesktop'
import SkillsMobile from './SkillsMobile'
import './About.css'

const About = () => {
   return (
      <div>
         <div className='desc d-flex justify-content-center'>
            <Card style={{ width: '45.4em' }}>
               <Card.Body>
                  <Card.Text className='text'>
                     <span className='intro'>Hey, I'm <span className='name'>David</span>. </span>
                     I'm a software developer currently studying Computer Science and Mathematics 
                     at NYU Courant. Focusing on full-stack web development.
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>
         <div className='desktop'>
            <SkillsDesktop />
         </div>
         <div className='mobile'>
            <SkillsMobile />
         </div>
      </div>
   )
}

export default About