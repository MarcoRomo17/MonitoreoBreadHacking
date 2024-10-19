"use client";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Marco } from './Marco';
import { ReportDescription } from './ReportDescription';
import { ReportForm2 } from './ReportForm2';
import { MostrarReporte } from './MostrarReporte';
import {NLogin }from './Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/PM",
    element: <Marco></Marco>
  },
  {
    path: "/RD",
    element: <ReportDescription></ReportDescription>
  },
  {
    path: "/R",
    element: <ReportForm2></ReportForm2>
  },
  {
    path: "/MR",
    element: <MostrarReporte></MostrarReporte>
  },
  {
    path: "/L",
    element: <NLogin></NLogin>
  }
  
 
 


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
);
