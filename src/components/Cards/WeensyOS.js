import React from 'react'
import Card from 'react-bootstrap/Card'
import osGIF from '../../images/weensyos/weensyos1.gif'

const WeensyOS = () => {
   return (
      <div>
         <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={osGIF} />
            <Card.Body>
            <Card.Title className='justify-content-center'>WeensyOS Lab</Card.Title>
            <Card.Text>
            Implemented process memory isolation for a small operating system known as WeensyOS. 
            Improved memory utilization by implementing virtual memory architecture. 
            Also developed a version of the fork system call, which has processes create copies of themselves.
            </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default WeensyOS