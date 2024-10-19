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
import { mostrarReporte } from './mostrarReporte';

import { ReportDescription } from './ReportDescription';
import { ReportForm2 } from './ReportForm2';


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
    element: <mostrarReporte></mostrarReporte>
  },
 


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
);
