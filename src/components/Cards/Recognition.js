import React from 'react'
import Card from 'react-bootstrap/Card'
import osGIF from '../../images/recog/recog1.gif'
import './Card.css'

const Recognition = () => {
   return (
      <div>
         <Card>
            <Card.Img className='rounded' variant="top" src={osGIF} />
            <Card.Body style={{ height: '16rem' }}>
               <Card.Title className='font-weight-bold' style={{ marginTop: '-7px' }}>
                  Facial Recognition App
               </Card.Title>
               <Card.Text>
                  Developed an image processing web app using Clarifai machine learning API. 
                  Displays a detected face after an image URL is provided. 
                  Added Bcrypt hashing function for password verification. 
                  Uses React, Express.js, and PostgreSQL.
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Recognition