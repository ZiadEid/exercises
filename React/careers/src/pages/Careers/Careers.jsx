import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Careers = () => {
  const careers = useLoaderData();
  return (
    <div className='careers'>
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>{career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// loader function

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4001/careers');

  if (!res.ok) {
    throw Error('This page is not working');
  }

  return res.json();
}

export default Careers