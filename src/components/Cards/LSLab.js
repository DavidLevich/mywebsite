import React from 'react'
import Card from 'react-bootstrap/Card'
import lsGIF from '../../images/ls-lab/ls-medium.gif'

const WeensyOS = () => {
   return (
      <div className='mobile-add'>
         <Card>
            <Card.Img className='rounded' variant="top" src={lsGIF} />
            <Card.Body style={{ height: '16rem'}}>
               <Card.Title className='font-weight-bold' style={{ marginTop: '-7px' }}>
                  LS Lab
               </Card.Title>
               <Card.Text>
                  Implemented a version of the “ls” Unix command.
                  Worked with Unix system calls to read and print files in a given directory.
                  Implemented several options supported by the command, such as listing pseudofiles with “-a”, 
                  using long listing format with “-l”, recursively listing files in subdirectories with “-R”, 
                  and using any combination of the three. Written in C.
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default WeensyOS