import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import nav from '../assets/img/logo1.png'

const Navbar = () => {
   
  const [change, setChange] = useState(false)
  
  window.addEventListener('scroll', () => {
    window.scrollY > 45 ? setChange(true) : setChange(false)
  })

  return (
    
    <nav className={change? "color" : null}>
      <div className="nav-wrapper padding-x">
        <ul className='right'>
          <li><NavLink to="#">Çaylar</NavLink></li>
          <li><NavLink to="#">Bal Məhsulları</NavLink></li>
          <li><NavLink to="#" className="coffee">Qəhvələr</NavLink></li>
        </ul>
        <NavLink to="#" className="brand-logo"><img src={nav} alt="logo" /> Leafly</NavLink>
        <ul className="right ">
         
          <li><NavLink to="#">Çay Aksesuarları</NavLink></li>
          <li><NavLink to="#">Çayla İçilənlər</NavLink></li>
          <li><NavLink to="#" className="login-button"></NavLink></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar