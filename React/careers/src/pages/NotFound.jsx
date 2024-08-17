import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, consequuntur? Omnis alias repellendus nesciunt nobis aliquid incidunt suscipit, nisi molestias, deleniti commodi fugiat veritatis. Corporis perferendis ut asperiores ipsa alias.
      </p>
      <p><strong>Go To The <Link to='/'>Home Page</Link>.</strong></p>
    </div>
  )
}

export default NotFound