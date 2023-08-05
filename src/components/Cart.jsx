import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { del_from_cart , add_to_cart, decrease} from '../redux/Slice';

const Cart = () =>
{
    const data = useSelector((state) => state.products.prod_state);
    const dispatch = useDispatch();
    // console.log(data)
    const empty = () =>
    {
        return(
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4 '>
                    <div className='row'>
                    <h3 className='text-center'> Ooops!! Your Cart is Empty 
                    </h3>
                    <img src="./images/cart.svg" height="400px"/>
                    
                    </div>
                </div>
            </div>
        );
    }
    const check_out = () =>
    {
        return(
            <div className='container '>
                <div className='row  mx-5 px-5'>
                    <div className='col-12 mx-5 px-5 '>
                    <NavLink  to= "/checkout" className="btn btn-secondary btn-block mb-5 w-100">Proceed to Checkout</NavLink>
                    </div>
                </div>
            </div>
        );
    }
    return(<>
    <div className='bgtry'>
     {
     data.length === 0 && empty()
}
     {
     data.length !== 0 && data.map((item, index)=>
     {
        let quantity = (item.quantity);
        return(
            <div  key={index} className='px-4 my-5 bg-white rounded-3 '>
                <div className='container py-4 border border-dark border-3'>
                    <button className='btn-close float-end' onClick={() => {dispatch(del_from_cart(index))}}></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={item.img} height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                        <p className='lead fw-bold'>${item.price}</p>
                        <p className='lead fw-bold'>

                            <span className='btn' onClick={ () => dispatch(add_to_cart({id: item.id}))} ><i className="fa fa-plus" aria-hidden="true"></i></span> 
                            <span className='fs-3'>{"  "}{quantity}{"    "}</span>
                            <span className='btn' onClick={ () => dispatch(decrease ({id : item.id}))}><i className="fa fa-minus" aria-hidden="true"></i></span> 

                        </p>
                        <p className='lead fw-bold'> Total =  {item.price} * {quantity} = {item.price * quantity} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
     })}

     {data.length !== 0 && check_out()}
     </div>
    </>);
}

export default Cart;