import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () =>
{
    const data = useSelector((state) => state.products.prod_state);
    var total, sum= 0;

return(
    <div className='container my-5'>
    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-secondary">Your cart</span>
          <span className="badge bg-secondary rounded-pill">{data.length}</span>
        </h4>
        <ul className="list-group mb-3">
        {data.map((item, index) =>
        {
            sum = sum+ ((item.price)*(item.quantity));
            
            return(
                <li key ={index}className="list-group-item d-flex justify-content-between lh-sm">

                <div>
                  <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price} * {item.quantity} = { (item.price) * (item.quantity) } </span>
              </li>
    
            );
        })}

          <li className="list-group-item d-flex justify-content-between border border-dark border-3">
            <span>Total (USD)</span>{}
            <strong>${sum}</strong>
          </li>
        </ul>

      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" className="form-control border border-dark border-3" id="firstName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control border border-dark border-3" id="lastName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>


            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control border border-dark border-3" id="email" placeholder=""/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control border border-dark border-3" id="address" placeholder="" required=""/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>


            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select border border-dark border-3" id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <select className="form-select border border-dark border-3" id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control border border-dark border-3" id="zip" placeholder="" required=""/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>


          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>
        <div className='border border-dark border-3 p-3'>
          <div className="my-3" >
            <div className="form-check ">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required=""/>
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control border border-dark border-3" id="cc-name" placeholder="" required=""/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control border border-dark border-3" id="cc-number" placeholder="" required=""/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control border border-dark border-3" id="cc-expiration" placeholder="" required=""/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control border border-dark border-3" id="cc-cvv" placeholder="" required="" />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-secondary btn-lg border border-dark border-3" type="submit">Pay</button>
        </form>
      </div>
    </div>
    </div>
);
}

export default Checkout;