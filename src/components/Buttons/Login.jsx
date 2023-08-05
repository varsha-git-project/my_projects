import React from 'react';
import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { toast , ToastContainer } from 'react-toastify';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { login , logged} from '../../redux/RegistrationSlice';

const Login = () =>
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const data = useSelector((state) => state.register.user_data);
  const logged_user = useSelector((state) => state.register.logged_user);
  // const [head, setHead] = useState(logged_user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(head)

// console.log(data);


    return(<>

    {/* <!-- Button trigger modal --> */}
<button type="button" className="btn border border-dark ms-2"  onClick={ () => {setModal(!modal)}}>
  Login
</button>
<Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} >
      <ModalHeader toggle={() => setModal(!modal)}  >
        {/* <h5>Enter Your Data</h5> */}
      </ModalHeader >
      <ModalBody>
      <form onSubmit={ (e) =>
      {
        let decision = false;
        e.preventDefault();
        data.map((val) =>
        {
          if( (val.email === email) && (val.password === password))
          {
            decision= true;
            setEmail("");
            setPassword("");
             setModal(!modal);    
            toast.success("Logged in succesfully", {
              position: toast.POSITION.TOP_CENTER,autoClose: 500});
          dispatch(login());
          dispatch(logged(val.name));


          }


        });

        if(decision == false)
        {
          toast.error("Invalid Credentials", {
            position: toast.POSITION.TOP_CENTER,autoClose: 500
        });
          setEmail("");
          setPassword("");
           setModal(!modal);
  
        }
         
          
      }}  >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange = { (e) => setEmail(e.target.value)}   />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={ (e) => setPassword(e.target.value) }    />
  </div>
  <button type="submit" className="btn btn-secondary w-100" >Submit</button>
 </form>   


      </ModalBody>
    </Modal>
    <ToastContainer />


    </>);
}

export default Login;