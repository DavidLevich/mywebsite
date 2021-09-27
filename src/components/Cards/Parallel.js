import React from 'react'
import Card from 'react-bootstrap/Card'
// import osGIF from '../../images/weensyos/weensyos1.gif'
import './Card.css'

const Parallel = () => {
   return (
      <div>
         <Card>
            <Card.Body style={{ height: '16rem' }}>
               <Card.Title className='font-weight-bold' style={{ marginTop: '-7px' }}>
                  MPI + OpenMP Labs
               </Card.Title>
               <Card.Text>
                  Developed programs that test performance and scalability of parallelized processes and threads. 
                  Calculated speedup using parallel runtime and the number of processes or threads.
                  Plotted graphs in Matplotlib that display the relationship between speedup and increasing amounts of input. 
                  Written in C.
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Parallel