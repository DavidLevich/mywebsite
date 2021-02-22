import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import WeensyOS from './WeensyOS'
import LSLab from './LSLab'

const Cards = () => {
   return (
      <Container className='d-flex justify-content-center'>
         <Row className='px-auto'>
            <Col className='d-flex justify-content-center p-2'>
               <WeensyOS />
            </Col>
            <Col className='d-flex justify-content-center p-2'>
               <LSLab />
            </Col>
         </Row>
      </Container>
   )
}

export default Cards