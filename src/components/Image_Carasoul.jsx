
import React from 'react';

const Image_Carasuol = () =>
{
    return(<>
    <h1 className='text-center'> Most Purchased </h1><hr />
        <div id="carouselExampleAutoplaying" className="carousel slide  mx-5" data-bs-ride="carousel">
    <div className="carousel-inner w-100 ">
    <div className="carousel-item active" data-bs-interval="1000">
    <img src ='./images/carasuol/pic1.jpg' className="d-block test w-100" height="600px" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
    <img src ="./images/products/sneakers.jpg" className="d-block w-100" height="600px"  alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
    <img src ="./images/products/shoes.jpg" className="d-block w-100"height="600px"  alt="..."/>
    </div>
    
    <div className="carousel-item" data-bs-interval="1000">
    <img src ="./images/products/ladies.svg" className="d-block w-100" height="600px"  alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
    <img src ="./images/products/blackt.png" className="d-block w-100" height="600px"  alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
    <img src ="./images/products/shirt_blue.png" className="d-block w-100" height="600px"  alt="..."/>
    </div>
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </div>

    </>);
}

export default Image_Carasuol;