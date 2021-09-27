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
         <Container className='d-flex justify-content-center pb-5 pt-2'>
            <Row className='d-flex justify-content-space-between px-auto'>
               <Col className='recog d-flex justify-content-center pt-2'>
                  <Recognition />
               </Col>
               <Col className='recog d-flex justify-content-center pt-2'>
                  <Protocols />
               </Col>
               <Col className='d-flex justify-content-center pt-1'>
                  <WeensyOS />
               </Col>
               <Col className='d-flex justify-content-center pt-1'>
                  <LSLab />
               </Col>
               <Col className='d-flex justify-content-center pt-1'>
                  <Parallel />
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Cards