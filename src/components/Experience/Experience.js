import React from 'react'
import { Card } from 'react-bootstrap'
import './Experience.css'


const Experience = () => {
   return (
      <div id='exp-body'>
         <Card id='exp-card' className='d-flex justify-content-center pt-4 pb-4'>
            <Card.Body>
               <Card.Title className='font-weight-bold' style={{ color: '#53f6c7' }}>
                  Experience
               </Card.Title>
               <Card.Text>
                  <span style={{ fontWeight: '500' }}>TraderZpro Software Developer <i id='date' className='font-weight-normal'>(Sept. 2021 - current)</i></span>
                  <ul id='bullets'>
                     <li>Responsible for front-end design and implementation using the React framework, along with server-side Express development</li>
                     <li>Building a PostgreSQL database containing user information, connected to client-side login and registration forms</li>
                     <li>Closely working with the startup’s team to effectively translate their needs and realize the firm’s core product</li>
                  </ul>
               </Card.Text>
               <Card.Text style={{ marginTop: '-7px' }}>
                  <span style={{ fontWeight: '500' }}>Operating Systems Grader <i id='date' className='font-weight-normal'>(Sept. 2020 - current)</i></span>
                  <ul id='bullets'>
                     <li>Managing 25 students at NYU</li>
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