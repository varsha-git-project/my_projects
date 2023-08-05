import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { configureStore  } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import product_reducer from './redux/Slice';
import register_reducer from './redux/RegistrationSlice';



const store = configureStore({

  reducer :
  {
    products :product_reducer,
    register :register_reducer
  }
});

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
  <BrowserRouter>
  <Provider store = {store}>
    <App />
  </Provider>
</BrowserRouter>
  </>
);