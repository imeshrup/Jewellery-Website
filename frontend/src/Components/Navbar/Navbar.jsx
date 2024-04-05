import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import dropdown from '../Assets/dropdown.jpg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle= (e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>setMenu("shop")}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("rings")}><Link style={{textDecoration: 'none'}} to='/rings'>Rings</Link> {menu==="rings"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("necklaces")}><Link style={{textDecoration: 'none'}} to='/necklaces'>Necklaces</Link> {menu==="necklaces"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("bangles")}><Link style={{textDecoration: 'none'}} to='/bangles'>Bangles</Link> {menu==="bangles"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
