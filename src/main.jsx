import React from 'react'
import ReactDOM from 'react-dom/client'

// Imports additional hooks
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Imports the main App, and all the main body pages
import App from './App';
// import Error from './pages/Error';
import AboutMe from './Components/Pages/aboutMe';
import ContactMe from './Components/Pages/contactMe'
import Resume from './Components/Pages/resume';
import Portfolio from './Components/Pages/portfolio';

// Defines the accessible routes, and which react page respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      // Sets AboutMe page as the default
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/ContactMe',
        element: <ContactMe />,
      },
    ],
  },
]);

// Main root that renders the route, with main and the associated outlet
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

