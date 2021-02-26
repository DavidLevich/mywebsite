import React from 'react'
import { Card, CardDeck }from 'react-bootstrap'
import './About.css'

const About = () => {
   return (
      <div>
         <div id='desc' className='d-flex justify-content-center'>
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
         <div className='d-flex justify-content-center'>
            <CardDeck style={{ width: '46em', height: '16em', marginLeft: '1em' }}>
               <Card >
                  <Card.Body>
                     <Card.Title className='font-weight-bold' style={{ color: '#53f6c7' }}>
                        Front-End
                     </Card.Title>
                     <Card.Text>
                        <ul>
                           <li>React</li>
                           <li>JavaSript</li>
                           <li>HTML</li>
                           <li>CSS</li>
                        </ul>
                     </Card.Text>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Body>
                     <Card.Title className='font-weight-bold' style={{ color: '#53f6c7' }}>
                        Back-End
                     </Card.Title>
                     <Card.Text>
                        <ul>
                           <li>Python</li>
                           <li>C</li>
                           <li>Node.js</li>
                        </ul>
                     </Card.Text>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Body>
                     <Card.Title className='font-weight-bold' style={{ width: '12em', color: '#53f6c7' }}>
                        Development Tools
                     </Card.Title>
                     <Card.Text>
                        <ul>
                           <li>Command Line</li>
                           <li>Git Version Control</li>
                           <li>Heroku Deployment</li>
                        </ul>
                     </Card.Text>
                  </Card.Body>
               </Card>
            </CardDeck>
         </div>
      </div>
   )
}

export default About