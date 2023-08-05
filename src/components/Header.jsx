import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cart_Button from './Buttons/Cart_Button';
import Login from './Buttons/Login';
import Signup from './Buttons/Signup';


const Header = () => {
  // const name = useSelector((state) => state.register.username);
  const show_login = useSelector((state) => state.register.show_login);
  const logged_user = useSelector((state) => state.register.logged_user);
  // console.log(show_login);
  // console.log(logged_user)
  return (<>
    <nav className="navbar navbar-expand-lg  border border-dark border-5" >
      <div className="container-fluid py-2">
        <NavLink className="navbar-brand px-3 py-2 mx-auto fw-bold bg-light rounded-circle border-dark  border border-3 text-dark" to="/">Nykaa {"   "}
        </NavLink> <span>    &nbsp; &nbsp;&nbsp;  </span>

        <span className='fa fa-shopping-bag fa-lg me-1 '></span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li className="nav-item px-3">
              <NavLink className="nav-link active fw-bold text-white" to="/" >Home</NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link active fw-bold text-white" to="/products"  >Products</NavLink>
            </li>

            <li className="nav-item px-3">
              <NavLink className="nav-link active fw-bold text-white" to="/about"  >About</NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link active fw-bold text-white" to="/contact" >Contact</NavLink>
            </li>


          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
            <li className="nav-item float-end ">
              <p className='lead fw-bold  px-2 '> {!show_login && <p>  {logged_user} <i class="fa fa-user" aria-hidden="true"></i>
</p>}</p>

            </li>
          </ul>

        </div>

        {show_login && <Login />}

        {show_login && <Signup />}


        <Cart_Button />
      </div>
    </nav>
  </>);
}

export default Header;