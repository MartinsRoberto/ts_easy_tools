import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Numbers from './routes/Numbers';

import App from './App'
import './index.css'
import Home from './routes/Home';
import Temperature from './routes/Temperature';
import Time from './routes/Time';
import Length from './routes/Length';
import Velocity from './routes/Velocity';
import Energy from './routes/Energy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/numbers",
        element: <Numbers />
      },
      {
        path: "/temperature",
        element: <Temperature />
      },
      {
        path: "/time",
        element: <Time />
      },
      {
        path: "/length",
        element: <Length />
      },
      {
        path: "/velocity",
        element: <Velocity />
      },
      {
        path: "/energy",
        element: <Energy />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
