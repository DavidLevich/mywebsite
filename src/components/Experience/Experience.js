import React from 'react'
import { Card } from 'react-bootstrap'
import './Experience.css'


const Experience = () => {
   return (
      <div id='exp-body'>
         <Card id='exp-card' className='d-flex justify-content-center pb-4'>
            <Card.Body>
               <Card.Title className='font-weight-bold' style={{ color: '#53f6c7' }}>
                  Experience
               </Card.Title>
               <Card.Text style={{ marginTop: '-7px' }}>
                  <span style={{ fontWeight: '500' }}>Operating Systems Grader <i id='date' className='font-weight-normal'>(Fall 2020 - current)</i></span>
                  <ul id='grader'>
                     <li>Managing 40 students at NYU</li>
                     <li>Writing scripts to automate grading labs and assignments</li>
                     <li>Providing feedback to students to help them understand material better</li>
                  </ul>
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Experience