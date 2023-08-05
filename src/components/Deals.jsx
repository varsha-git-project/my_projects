import React from 'react';
import { products_data } from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../redux/Slice'; 
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deals = () => {
    const data = useSelector((state) => state.products.prod_state);
    // console.log(data);
    const dispatch = useDispatch();
    
    return (
    <>
    <div className='bgtest'>
        <div className='container py-5'>
            <div className='row'>
            <hr />

                <div className='col-12 text-center '>
                    <h1>Surprising Deals !!</h1>
                    <hr />
                </div>
            </div>
        </div>
        <div className='container '>
            <div className='row justify-content-around '>
                
                {
                products_data.map((item, index)=>
                {
                    return (
            
                        <div key={item.id} className="card my-5 py-4 mx-5 border border-dark border-2 " style={{ width: "18rem" }}>
                            <img src={item.img}  className="card-img-top " alt={item.title} height="250px" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className='lead'>${item.price}</p>
                                <p className='lead'>{item.description}</p>
                                <NavLink className="btn btn-secondary" onClick={() => {
                                    dispatch(add_to_cart({title:item.title, price: item.price, img: item.img, quantity : item.quantity,id:item.id  }))
                                    toast.success(" Added to Cart", {
                                        position: toast.POSITION.TOP_CENTER,
                                        autoClose:500
                                      });
                                    }}>Add to Cart</NavLink>
                            </div>
                        </div>
                    )
                }
                )

            }
            </div>
        </div>
        </div>
        <ToastContainer />
    </>
    );
}



export default Deals;