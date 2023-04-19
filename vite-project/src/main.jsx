import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './10-redux/store/store';
import { Registro } from './Registro';
import { Father } from './Homework-Challenge-10/src/components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
          <Father /> 
    </BrowserRouter>
  </Provider>
)
