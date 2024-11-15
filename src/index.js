import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Resources/css/custom.css";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import appReduxStore from './redux/app-redux-store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={appReduxStore}>
      <AppRoutes /> 
    </Provider>
  </BrowserRouter>
);

 