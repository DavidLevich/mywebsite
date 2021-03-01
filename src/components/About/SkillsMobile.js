import React from 'react'

const SkillsMobile = () => {
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
                        <li>JavaSript</li>
                        <li>HTML/CSS</li>
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
   )
}

export default SkillsMobile