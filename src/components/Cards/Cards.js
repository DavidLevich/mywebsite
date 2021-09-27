import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import WeensyOS from './WeensyOS'
import LSLab from './LSLab'
import Recognition from './Recognition'

const Cards = () => {
   return (
      <div className='cards-container pt-5'>
         <Container className='d-flex justify-content-center pb-5 pt-2'>
            <Row className='d-flex justify-content-space-between px-auto'>
               <Col className='d-flex justify-content-center pt-2'>
                  <WeensyOS />
               </Col>
               <Col className='d-flex justify-content-center pt-2'>
                  <LSLab />
               </Col>
               <Col className='recog d-flex justify-content-center pt-3'>
                  <Recognition />
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Cards