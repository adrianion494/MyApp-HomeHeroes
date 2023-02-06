import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import UserRegister from './Pages/UserRegister';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import HandmanRegister from './Pages/HandmanRegister';
import About from './Pages/About';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Shop from './Pages/Shop';




const router = createBrowserRouter([
  {
    path: "/r",
    element: <Register/>,
  },
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/ru",
    element: <UserRegister/>,
  },
  {
    path: "/rh",
    element: <HandmanRegister/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/shop",
    element: <Shop/>
  },

  
  
  

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router ={router}/>
);

