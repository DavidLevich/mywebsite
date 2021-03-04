import React from "react"
import { Helmet } from 'react-helmet'

const NotFoundPage = () => (
  <div className='m-5'>
    <Helmet>
      <title>404</title>
    </Helmet>
    <h1 style={{ color: '#53f6c7' }}>404: <span style={{ color: '#ffff', fontSize: '0.85em' }}>Not Found</span></h1>
  </div>
)

export default NotFoundPage
