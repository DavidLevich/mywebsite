import React from 'react'
import Card from 'react-bootstrap/Card'
import './Footer.css'

const Footer = () => {
   return (
      <div>
         <div id='footer-body' className='d-flex justify-content-center'>
            <Card>
               <Card.Body>
                  <Card.Title className='font-weight-bold' style={{ color: '#53f6c7', marginBottom: '12px' }}>
                     Contact
                  </Card.Title>
                  <Card.Text id='footer-text'>
                     <ul>
                        <li style={{ marginTop: '5px'}}>
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