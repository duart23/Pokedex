import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root'
import App from './App';
import About from './About';
import { RouterProvider, createHashRouter } from "react-router-dom"

const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          { 
            path: "/",
            element: <App />,
          },
          {
            path: "/about",
            element: <About />,
        },
      ],
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
