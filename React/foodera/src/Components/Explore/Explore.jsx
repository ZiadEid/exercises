import React from 'react';
import './Explore.css'
import Data from '../Data/Data';

const Explore = () => {
  const disc = price => price - 1.3;
  return (
    <section className='Explore text-center'>
      <div className="container">
        <div className="py-5 my-4">
          <h2 className='fw-bold mb-3'>Explore Our Foods</h2>
          <p className='w-75 pb-2 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
          </p>
        </div>
        < div className="row">
          {Data.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-5" key={index}>
                <div className="item text-start">
                  <img className='w-100 rounded-3' src={item.img} alt={item.title} />
                  <div className="item-text overflow-hidden p-2">
                    <h4 className='m-0'>{item.title}</h4>
                    <p className='mb-2'>Time: {item.time} | Serves: 1</p>
                    <div className="price my-3">
                      <span className='fw-bold pe-3'>${item.price}0</span>
                      <span className="disc fw-bold text-decoration-line-through">${disc(item.price)}</span>
                    </div>
                    <button className='btn btn-prim text-light rounded-0 mt-4 ms-1'>Order Now</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section >
  )
}

export default Explore