import React from 'react'
import Card from 'react-bootstrap/Card'
import osGIF from '../../images/weensyos/weensyos1.gif'
import './Card.css'

const WeensyOS = () => {
   return (
      <div className='remove-margin mobile-remove'>
         <Card>
            <Card.Img className='rounded' variant="top" src={osGIF} />
            <Card.Body style={{ height: '16rem' }}>
               <Card.Title className='font-weight-bold' style={{ marginTop: '-7px' }}>
                  WeensyOS Lab
               </Card.Title>
               <Card.Text>
                  Implemented process memory isolation for a small operating system known as WeensyOS. 
                  Improved memory utilization by implementing virtual memory architecture. 
                  Also developed a version of the fork system call, which has processes create copies of themselves. 
                  Written in C.
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default WeensyOS