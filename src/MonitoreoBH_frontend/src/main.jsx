import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Reports} from './Reports';
import { ReportForm } from './ReportFrom';
import { Marco } from './Marco';
import { ReportForm2 } from './ReportForm2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/RF",
    element: <ReportForm></ReportForm>
  },
  {
    path: "/RF",
    element: <ReportForm></ReportForm>
  },
  {
    path: "/PM",
    element: <Marco></Marco>
  },
  {
    path: "/RF2",
    element: <ReportForm2></ReportForm2>
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
);
