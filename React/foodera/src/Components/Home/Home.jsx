import React from 'react'
import Header from '../Header/Header'
import './Home.css'

const Home = () => {
  return (
    <>
      <Header />
      <section className='numbers text-light'>
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-3">
              <div className="box">
                <h2>1287+</h2>
                <span>SAVINGS</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <h2>5786+</h2>
                <span>PHOTOS</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <h2>1440+</h2>
                <span>ROCKETS</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <h2>7110+</h2>
                <span>GLOBS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home