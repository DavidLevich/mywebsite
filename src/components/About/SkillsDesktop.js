import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import './About.css'

const SkillsDesktop = () => {
   return (
      <div className='card-container'>
         <CardDeck>
            <Card>
               <Card.Body>
                  <Card.Title className='font-weight-bold' style={{ color: '#53f6c7' }}>
                     Front-End
                  </Card.Title>
                  <Card.Text>
                     <ul>
                        <li>React</li>
                        <li>JavaScript</li>
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
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>Pandas</li>
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
                        <li>Git</li>
                        <li>Heroku</li>
                        <li>Figma</li>
                     </ul>
                  </Card.Text>
               </Card.Body>
            </Card>
         </CardDeck>
      </div>
   )
}

export default SkillsDesktop