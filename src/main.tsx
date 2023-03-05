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
    path: '/ts_easy_tools',
    element: <App />,
    children: [
      {
        path: "/ts_easy_tools/",
        element: <Home />
      },
      {
        path: "/ts_easy_tools/numbers",
        element: <Numbers />
      },
      {
        path: "/ts_easy_tools/temperature",
        element: <Temperature />
      },
      {
        path: "/ts_easy_tools/time",
        element: <Time />
      },
      {
        path: "/ts_easy_tools/length",
        element: <Length />
      },
      {
        path: "/ts_easy_tools/velocity",
        element: <Velocity />
      },
      {
        path: "/ts_easy_tools/energy",
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
