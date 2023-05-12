import { NavLink } from 'react-router-dom'
import nav from '../assets/img/logo1.png'

const Navbar = () => {

  return (
    //Create custom navbar here
    <nav>
      <div className="nav-wrapper padding-x">
        <ul className='right'>
          <li><NavLink to="#">Ana Səhifə</NavLink></li>
          <li><NavLink to="#">Çaylar</NavLink></li>
          <li><NavLink to="#">Bal Məhsulları</NavLink></li>
        </ul>
        <NavLink to="#" className="brand-logo"><img src={nav} alt="logo" /> Leafly</NavLink>
        <ul className="right ">
         
          <li><NavLink to="#">Haqqımızda</NavLink></li>
          <li><NavLink to="#">Əlaqə</NavLink></li>
          <li><NavLink to="#" className="login-button">Giriş Et</NavLink></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar