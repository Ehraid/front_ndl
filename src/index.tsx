import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import AppPage from './pages/app/AppPage';
import TemplatePage from './pages/template/TemplatePage';
import Error404Page from './pages/error404/Error404Page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
  },
  {
    path: "/*",
    element: <Error404Page />
  },


  //if we are debuging
  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
    {
      path: "/template",
      element: <TemplatePage />
    } : {}
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
