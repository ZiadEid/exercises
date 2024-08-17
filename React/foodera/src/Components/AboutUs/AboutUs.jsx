import React from 'react';
import './AboutUs.css'
import AboutUsImg from '../../assets/1.png';
import AboutUsImgMid from '../../assets/2.png';

const AboutUs = () => {
  return (
    <section className='AboutUs'>
      <div className='AboutUsOpining mt-5 pt-5'>
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-md-column">
            <div className="col-lg-7 col-md-12 ">
              <div className="image-box rounded overflow-hidden">
                <img className='w-100' src={AboutUsImg} alt="Food" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="about-us-opining-content mt-lg-0 mt-md-3">
                <h3>We pride ourselves on making real food from the best ingredients.</h3>
                <p className='pt-2 pb-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>
                <button href="#" className='btn btn-prim text-light rounded-0'>
                  <a href="#">
                    Learn More
                  </a>
                  <i className="fa-solid fa-angle-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='AboutUsMid mt-5 pt-5'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-sm-12">
              <div className="about-us-mid-content">
                <h3>We make everything by hand with the best possible ingredients.</h3>
                <p className='pt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className='list-unstyled mt-4 mb-5'>
                  <li className='mb-2'>
                    <i className="fa-solid fa-check"></i>
                    <span>Etiam sed dolor ac diam volutpat.</span>
                  </li>
                  <li className='mb-2'>
                    <i className="fa-solid fa-check"></i>
                    <span>Erat volutpat aliquet imperdiet.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>purus a odio finibus bibendum.</span>
                  </li>
                </ul>
                <button className='btn btn-prim text-light rounded-0'>
                  <a href="#">
                    Learn More
                    <i className="fa-solid fa-angle-right ms-2"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className="img-box">
                <img className='w-100' src={AboutUsImgMid} alt="Food" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUsEnding py-5 text-center">
        <h2 className='m-0 pt-5 h1'>
          When a man's stomach is full it makes no
          <br />
          difference whether he is rich or poor.
        </h2>
        <p className='pt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
          <br />
          finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
        <br />
        <br />
        <a className='mb-4 d-block' href="https://www.youtube.com/watch?v=bZx8rPd-PKQ">
          <i className="fa-solid fa-play pe-2"></i>
          Watch Our Story
        </a>
        <br />
      </div>
    </section>
  )
}

export default AboutUs