import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

import LandingPage from "../pages/LandingPage";
import Skills from "../pages/Skills";

export const router = createBrowserRouter ([
  {
    path:'/',
    element:<LandingPage />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />
    //   },
    //   {
    //     path: 'about',
    //     element: <About />
    //   },
    //   {
    //     path: 'skills',
    //     element: <Skills />
    //   }

    // ]
  }
]);