import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from "./Register";
import Login from "./Login";
import All from "./All";
import Products from "./products";
import Payment from "./payment";
import Pay from "./Pay";
import Product1 from "./1";
import Product2 from "./2";
import Product3 from "./3";
import Product4 from "./4";
import Product5 from "./5";
import Product6 from "./6";
import Product7 from "./7";
import Product8 from "./8";
import Product9 from "./9";
import Product10 from "./10";
import Product11 from "./11";
import Product12 from "./12";
import Product13 from "./13";
import Product14 from "./14";
import Product15 from "./15";
import Product16 from "./16";
import Product17 from "./17";
import Product18 from "./18";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "register",
        element: <Register/>,
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "all",
        element: <All/>,
    },
    {
        path: "pay",
        element: <Pay/>,
    },
    {
        path: "Products",
        element: <Products/>,
    },
    {
        path: "payment",
        element: <Payment/>,
    },
    {
        path: "products/1",
        element: <Product1/>,
    },
    {
        path: "products/2",
        element: <Product2/>,
    },
    {
        path: "products/3",
        element: <Product3/>,
    },
    {
        path: "products/4",
        element: <Product4/>,
    },
    {
        path: "products/5",
        element: <Product5/>,
    },
    {
        path: "products/6",
        element: <Product6/>,
    },
    {
        path: "products/7",
        element: <Product7/>,
    },
    {
        path: "products/8",
        element: <Product8/>,
    },
    {
        path: "products/9",
        element: <Product9/>,
    },
    {
        path: "products/10",
        element: <Product10/>,
    },
    {
        path: "products/11",
        element: <Product11/>,
    },
    {
        path: "products/12",
        element: <Product12/>,
    },
    {
        path: "products/13",
        element: <Product13/>,
    },
    {
        path: "products/14",
        element: <Product14/>,
    },
    {
        path: "products/15",
        element: <Product15/>,
    },
    {
        path: "products/16",
        element: <Product16/>,
    },
    {
        path: "products/17",
        element: <Product17/>,
    },
    {
        path: "products/18",
        element: <Product18/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
