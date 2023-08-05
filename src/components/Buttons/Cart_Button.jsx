import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Cart_Button = () =>
{

    const data = useSelector((state) => state.products.prod_state);
    return(<>
    <NavLink to="/cart" className="btn border border-dark ms-2">
        <span className='fa fa-shopping-cart me-1'></span>
        {" "}
          {/* <span className="badge bg-primary rounded-pill">{data.length}</span> */}

        ({data.length})
    </NavLink>
    </>);
}

export default Cart_Button;