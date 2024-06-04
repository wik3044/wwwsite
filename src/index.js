import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from "./Register";
import Login from "./Login";
import Consoles from "./Consoles";
import Audio from "./Audio";
import Video from "./Video";
import All from "./All";
import Products from "./products";
import Product1 from "./1";

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
        path: "consoles",
        element: <Consoles/>,
    },
    {
        path: "audio",
        element: <Audio/>,
    },
    {
        path: "video",
        element: <Video/>,
    },
    {
        path: "all",
        element: <All/>,
    },
    {
        path: "Products",
        element: <Products/>,
    },
    {
        path: "products/1",
        element: <Product1/>,
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
