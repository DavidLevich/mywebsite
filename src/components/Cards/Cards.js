import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Recognition from './Recognition'
import Protocols from './Protocols'
import WeensyOS from './WeensyOS'
import LSLab from './LSLab'
import Parallel from './Parallel'

const Cards = () => {
   return (
      <div className='cards-container pt-5'>
         <Container className='d-flex justify-content-center pb-4 pt-2'>
            <Row className='d-flex justify-content-space-between'>
               <Col className='d-flex justify-content-center'>
                  <WeensyOS />
               </Col>
               <Col className='d-flex justify-content-center'>
                  <LSLab />
               </Col>
               <Col className='d-flex justify-content-center pt-1'>
                  <Protocols />
               </Col>
               <Col className='d-flex justify-content-center pt-1'>
                  <Parallel />
               </Col>
               <Col className='d-flex justify-content-center pt-1'>
                  <Recognition />
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Cards