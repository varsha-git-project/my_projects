import React from 'react';
import { NavLink } from 'react-router-dom';
import Deals from './Deals';
import Image_Carasuol from './Image_Carasoul';


const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('deals');
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (<>

    {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"> */}
    {/* <div className="carousel-inner"> */}
    {/* <div className="carousel-item active" data-bs-interval="1000"> */}
    {/* <img src ='./images/carasuol/pic7.jpg' className="d-block w-100" height="800px" alt="..."/> */}
    {/* </div> */}
    {/* <div className="carousel-item" data-bs-interval="1000"> */}
    {/* <img src ="./images/carasuol/pic2.jpg" className="d-block w-100" height="800px"  alt="..."/> */}
    {/* </div> */}
    {/* <div className="carousel-item" data-bs-interval="1000"> */}
    {/* <img src ="./images/carasuol/pic3.jpg" className="d-block w-100"height="800px"  alt="..."/> */}
    {/* </div> */}
    {/*  */}
    {/* <div className="carousel-item" data-bs-interval="1000"> */}
    {/* <img src ="./images/carasuol/pic1.jpg" className="d-block w-100" height="800px"  alt="..."/> */}
    {/* </div> */}
    {/* <div className="carousel-item" data-bs-interval="1000"> */}
    {/* <img src ="./images/carasuol/pic9.jpg" className="d-block w-100" height="800px"  alt="..."/> */}
    {/* </div> */}
    {/* <div className="carousel-item" data-bs-interval="1000"> */}
    {/* <img src ="./images/carasuol/pic11.png" className="d-block w-100" height="800px"  alt="..."/> */}
    {/* </div> */}
    {/*  */} 
    {/* </div> */}
    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"> */}
    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
    {/* <span className="visually-hidden">Previous</span> */}
    {/* </button> */}
    {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"> */}
    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
    {/* <span className="visually-hidden">Next</span> */}
    {/* </button> */}
    {/* </div> */}
    {/* <Products /> */}

    <div
      id="introCarousel"
      className="carousel slide carousel-fade shadow-2-strong border border-dark border-3"
      data-mdb-ride="carousel"    >

      <div className="carousel-inner" 
      style={{height :"800px"}}      >
        <div className="carousel-item active">
          <video
            style={{minWidth: "100%", minHeight: "100%"}}
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              className="h-100"
              src="./images/nyka.webm"
              type="video/webm"
            />
          </video>
          <div className="mask" >
            <div
              className="d-flex justify-content-center align-items-inherit mt-5 mb-5 h-100">
              <div className="text-light text-center text-dark ">
                <h1 className=" mt-5">Nykaa</h1>

                <NavLink
                  className="btn btn-dark btn-lg m-2 border border-dark border-3 fw-bold text-light"
                  to="/products"
                  role="button"
                  rel="nofollow"
                  target="_self"
                >Shop now  !</NavLink>
                <NavLink
                  className="btn btn-dark btn-lg m-2 border border-dark border-3 fw-bold text-light"
                  onClick={ handleClickScroll}
                  target="_self"
                  role="button"
                >View Discount Deals</NavLink>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
    <div id="deals">

    <Deals />

    </div>
    
    <Image_Carasuol />

  </>);
}

export default Home;