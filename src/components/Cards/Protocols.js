import React from 'react'
import Card from 'react-bootstrap/Card'
import protocolsImg from '../../images/protocols/protocols.png'
import './Card.css'

const Protocols = () => {
   return (
      <div className='protocols add-margin'>
         <Card>
            <Card.Img className='rounded' variant="top" src={protocolsImg}/>
            <Card.Body style={{ height: '16rem' }}>
               <Card.Title className='font-weight-bold' style={{ marginTop: '-7px' }}>
                  Network Protocols Lab
               </Card.Title>
               <Card.Text>
                  Implemented the Stop-And-Wait and Sliding Window protocols, along with an EWMA filter and retransmission timeout calculator to control a simulated network. 
                  Developed an AIMD algorithm that eliminates congestion collapse produced by the Sliding Window protocol. 
                  Generated and analyzed graphs in Matplotlib comparing throughput, round-trip time, and window size. 
                  Written in Python.
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Protocols