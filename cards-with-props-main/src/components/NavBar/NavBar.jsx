import logo from '../../assets/imgs/default-logo.png'

const NavBar = () => {
  return (
    <div className='navbar d-flex align-items-center py-3'>
      <div className="container">
        <img src={logo} alt="logo" />
        <ul className='list-unstyled d-flex gap-3 mb-0'>
          <li className='fw-bold'>Home</li>
          <li className='fw-bold'>About</li>
          <li className='fw-bold'>Company</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar