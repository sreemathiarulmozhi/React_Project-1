//NAVBAR :

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//BOOKING :

/*import React from 'react';
import ReactDOM from 'react-dom';
import Booking from './Components/Booking';

ReactDOM.render(
  <React.StrictMode>
    <Booking />
  </React.StrictMode>,
  document.getElementById('root')
);*/

//PAYMENT :

/*import React from 'react';
import ReactDOM from 'react-dom';
import Payment from './Components/Payment';

ReactDOM.render(
  <React.StrictMode>
    <Payment />
  </React.StrictMode>,
  document.getElementById('root')
);*/