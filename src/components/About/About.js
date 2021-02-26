import React from 'react'
import Card from 'react-bootstrap/Card'
import './About.css'

const About = () => {
   return (
      <div>
         <div className='d-flex justify-content-center' style={{ marginTop: '12em', height: '16em' }}>
            <Card style={{ width: '45.4em' }}>
               <Card.Body>
                  <Card.Text id='text'>
                     <span id='intro'>Hey, I'm <span id='name'>David</span>. </span>
                     I'm a software developer currently 
                     pursuing a joint B.A. degree in Computer Science and Mathematics at 
                     NYU Courant. Focusing on full-stack web development.
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>
         {/* <div className='d-flex justify-content-center' style={{ height: '17em' }}>
            <Card>
               <Card.Body>
                  <div id='front-end'>
                     <Card.Title className='font-weight-bold' style={{ color: '#53f6c7' }}>
                        Front-End
                     </Card.Title>
                     <Card.Text id='footer-text'>
                        <ul>
                           <li>JavaSript (React/Gatsby)</li>
                           <li>HTML</li>
                           <li>CSS</li>
                        </ul>
                     </Card.Text>
                  </div>
                  <div id='back-end'>
                     <Card.Title className='font-weight-bold' style={{ color: '#53f6c7', marginRight: '12px' }}>
                        Back-End
                     </Card.Title>
                     <Card.Text>
                        <ul>
                           <li>Python</li>
                           <li>C</li>
                           <li>Node.js (Express.js)</li>
                        </ul>
                     </Card.Text>
                  </div>
                  <div id='dev-tools'>
                     <Card.Title className='font-weight-bold' style={{ color: '#53f6c7', marginRight: '12px' }}>
                        Development Tools
                     </Card.Title>
                     <Card.Text>
                        <ul>
                           <li>Command Line</li>
                           <li>Git Version Control</li>
                           <li>Heroku Deployment</li>
                        </ul>
                     </Card.Text>
                  </div>
               </Card.Body>
            </Card>
         </div> */}
      </div>
   )
}

export default About