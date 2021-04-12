import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductProvider } from "./Context"


ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);


