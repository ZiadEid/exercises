import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="text-content">
          <h1 className='mb-4'>Good food choices are good investments.</h1>
          <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
          <div className="buttons">
            <a href='#' className='btn btn-prim text-light rounded-0'>
              Order Now
              <i className="fa-solid fa-basket-shopping ms-2"></i>
            </a>
            <a href='#' className='btn btn-defult rounded-0'>
              Learn More
              <i className="fa-solid fa-angle-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header