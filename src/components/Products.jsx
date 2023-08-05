import React from 'react';
import { products_data } from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../redux/Slice';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const Products = () => {
    const [search, setSearch] = useState("");
    const data = useSelector((state) => state.products.prod_state);
    const [retrieved_data, setRetrievedData] = useState(products_data);
    const dispatch = useDispatch();

    const filteredData = retrieved_data.filter((val) => {
        if (search === "") {
            return val;
        }

        else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
        }
    });

    const filterCategory = (category) => {
        const result = products_data.filter((item) => {
            return item.category.includes(category);
        });
        setRetrievedData(result);
    }
    return (
        <>
        <div className='bgtry'>
            <div className='container py-5  '>
                <div className='row'>
                    <div className='col-12 text-center border border-dark border-3'>
                        <h1>Products</h1>
                        {/* <hr /> */}
                    </div>
                </div>
            </div>
            <div className='container py-5 '>
                <div className='row'>
                    <div className="input-group ">
                        <input type="search" className="form-control rounded border border-dark border-3" placeholder="Search Products" onChange={(e) => setSearch(e.target.value)} value={search} />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className='container-fluid  border border-dark border-3  '>
                <div className='row mt-5 mx-2  '>
                    <div className='col-md-3 '>
                        <h1 className='btn btn-dark btn-lg btn-block w-100 fw-bold b lead mb-4'> Categories</h1>
                        <button type="button" className="btn btn-secondary text-capitalize btn-lg btn-block border border-dark border-3 mb-3 w-100  fw-light" onClick={() => { filterCategory("Women") }}   >Women</button>
                        <button type="button" className="btn btn-secondary text-capitalize btn-lg btn-block border border-dark border-3 mb-3 w-100  fw-light" onClick={() => { filterCategory("Men") }}   >Men</button>
                        <button type="button" className="btn btn-secondary text-capitalize btn-lg btn-block border border-dark border-3 mb-3 w-100  fw-light" onClick={() => { filterCategory("Baby") }}   >Baby Wear</button>
                        <button type="button" className="btn btn-secondary text-capitalize btn-lg btn-block border border-dark border-3 mb-3 w-100  fw-light" onClick={() => { filterCategory("Makeup") }}   > Beauty</button>
                        <button type="button" className="btn btn-secondary text-capitalize btn-lg btn-block border border-dark border-3 mb-3 w-100  fw-light" onClick={() => { filterCategory("Toys") }}   > Toys</button>
                        <button type="button" className="btn btn-secondary text-capitalize btn-lg btn-block border border-dark border-3 mb-3 w-100  fw-light" onClick={() => { setRetrievedData(products_data) }}   > All</button>
                    </div>
                    <div className='col-md-9  '>

                        <div className='row justify-content-around'>

                            {
                                filteredData.map((item, index) => {
                                    return (
                                        // <div className="col-lg-4 mb-5" key={index}>

                                        <div key={item.id} className="card my-5 py-4 mx-5 border border-dark border-2 " style={{ width: "18rem" }}>
                                        <img src={item.img} className="card-img-top " alt={item.title} height="250px" />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className='lead'>${item.price}</p>
                                                    <p className='lead'>{item.description}</p>
                                                    <NavLink className="btn btn-dark" onClick={() => {
                                                        dispatch(add_to_cart({ id: index, title: item.title, price: item.price, img: item.img, quantity: item.quantity }))
                                                        toast.success(" Added to Cart", {
                                                            position: toast.POSITION.TOP_CENTER, autoClose: 500
                                                        });

                                                        // if (data.length === 0) {
                                                        // dispatch(add_to_cart({ id: index, title: item.title, price: item.price, img: item.img, quantity: item.quantity }))
                                                        // toast.success(" Added to Cart", {
                                                        // position: toast.POSITION.TOP_CENTER, autoClose: 500
                                                        // });
                                                        // 
                                                        // }
                                                        // 
                                                        // else if(data.id.includes(item.id)){
                                                        // console.log("dupesfdf");
                                                        // 
                                                        // }
                                                        // 
                                                        // else
                                                        // {
                                                        // dispatch(add_to_cart({ id: index, title: item.title, price: item.price, img: item.img, quantity: item.quantity }))
                                                        // toast.success(" Added to Cart", {
                                                        // position: toast.POSITION.TOP_CENTER, autoClose: 500
                                                        // });
                                                        // 
                                                        // }
                                                    }}>Add to Cart</NavLink>
                                                </div>
                                            </div>
                                        // </div> 
                                    )
                                }
                                )

                            }


                        </div>
                    </div>
                </div>
            </div>
</div>
            <ToastContainer />
        </>
    );
}



export default Products;

// dispatch(add_to_cart({ id: index, title: item.title, price: item.price, img: item.img, quantity : item.quantity }))
// toast.success(" Added to Cart", {
    // position: toast.POSITION.TOP_CENTER,autoClose: 500
// });
