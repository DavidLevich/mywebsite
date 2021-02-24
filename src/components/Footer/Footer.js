import React from 'react'
import Card from 'react-bootstrap/Card'
import './Footer.css'

const Footer = () => {
   return (
      <div id='contact'>
         <div id='footer-body' className='d-flex justify-content-center pt-5'>
            <Card>
               <Card.Body>
                  <Card.Title className='font-weight-bold' style={{ color: '#53f6c7', marginBottom: '12px' }}>
                     Contact
                  </Card.Title>
                  <Card.Text id='footer-text'>
                     <ul>
                        <div style={{ display: 'flex'}}>
                           <li> 
                              <a href='mailto: david.iosilevich@gmail.com'>
                                 david.iosilevich@gmail.com
                              </a>
                           </li>
                           <p style={{ paddingLeft: '15px' }}> | </p>
                           <li style={{ paddingLeft: '15px' }}>
                              <a href='mailto: di492@nyu.edu'>
                                 di492@nyu.edu
                              </a>
                           </li>
                        </div>
                        <li style={{ marginTop: '-15px' }}>
                           <a href='https://www.linkedin.com/in/davidiosilevich/'>
                              LinkedIn
                           </a>
                        </li>
                     </ul>
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>
      </div>
      
   )
}

export default Footer