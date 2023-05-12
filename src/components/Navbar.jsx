import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    //Create custom navbar here
    <nav>
      <div className="nav-wrapper padding-x">
        <NavLink to="#" className="brand-logo">Logo</NavLink>
        <ul className="right ">
          <li><NavLink to="#">Ana Səhifə</NavLink></li>
          <li><NavLink to="#">Çaylar</NavLink></li>
          <li><NavLink to="#">Bal Məhsulları</NavLink></li>
          <li><NavLink to="#">Haqqımızda</NavLink></li>
          <li><NavLink to="#">Əlaqə</NavLink></li>
          <li><NavLink to="#" className="login-button">Giriş Et</NavLink></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar