import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'material-icons/iconfont/material-icons.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
