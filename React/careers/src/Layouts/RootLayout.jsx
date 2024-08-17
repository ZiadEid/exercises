import { NavLink, Outlet } from "react-router-dom"
import BreadCrumbs from "../Components/BreadCrumbs"

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Careers</h1>
          <NavLink to='home'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav>
      </header>
      <BreadCrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout