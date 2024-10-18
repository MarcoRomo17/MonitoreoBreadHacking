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
<<<<<<< HEAD
import { ReportDescription } from './ReportDescription';
=======
import { ReportForm2 } from './ReportForm2';
>>>>>>> 8dcbcb2919aea4a4dfb835400e934af037e3f6ce


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
<<<<<<< HEAD
    path: "/RD",
    element: <ReportDescription></ReportDescription>
  }
=======
    path: "/RF2",
    element: <ReportForm2></ReportForm2>
  },
>>>>>>> 8dcbcb2919aea4a4dfb835400e934af037e3f6ce


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
);
