import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Home from './components/Layout/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Reviews from './components/Reviews/Reviews';
import Shop from './components/Shop/Shop';
import SingUp from './components/SignUp/SingUp';
import './index.css';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: "review",
        element: <Reviews></Reviews>
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SingUp></SingUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
 
  </React.StrictMode>,
)
