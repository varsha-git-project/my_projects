import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../redux/RegistrationSlice';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () =>

{ 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

       return(<>

       <button type="button" className="btn border border-dark ms-2 " onClick={() => setModal(!modal)}>
  Sign Up
</button>

           <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} >
      <ModalHeader toggle={() => setModal(!modal)}  >
        {/* <h5>Enter Your Data</h5> */}
      </ModalHeader >
      <ModalBody>
      <form>
  <div className="mb-3">
    <label htmlFor="" className="form-label">Name </label>
    <input type="text" className="form-control" id=""  value={name} onChange={ (e) => setName(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange = { (e) => setEmail(e.target.value)}   />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={ (e) => setPassword(e.target.value) }    />
  </div>
  <button type="submit" className="btn btn-secondary w-100" onClick={ (e) =>{ e.preventDefault(); dispatch(register({name: name, email: email, password:password}));
  setName("");
  setEmail("");
  setPassword("");
   setModal(!modal)
 }}>Submit</button>
 </form>   


      </ModalBody>
    </Modal>
    <ToastContainer />
    </>);
}

export default Signup;