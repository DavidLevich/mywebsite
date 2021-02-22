import React from 'react'
import Card from 'react-bootstrap/Card'
import lsGIF from '../../images/ls-lab/ls-large.gif'

const WeensyOS = () => {
   return (
      <div>
         <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={lsGIF} />
            <Card.Body>
            <Card.Title>WeensyOS Lab</Card.Title>
            <Card.Text>
            Implemented a version of the “ls” Unix command.
            Worked with Unix system calls to read and print files in a given directory.
            Implemented several options supported by the command, such as listing pseudofiles with “-a”, 
            using long listing format with “-l”, recursively listing files in subdirectories with “-R”, 
            and using any combination of the three.
            </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default WeensyOS