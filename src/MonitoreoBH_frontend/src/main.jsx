import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ReportForm } from './ReportFrom';
import { Marco } from './Marco';
import { ReportDescription } from './ReportDescription';


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
    path: "/RD",
    element: <ReportDescription></ReportDescription>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
);
