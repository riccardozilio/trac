import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home";
import Caffetteria from "./page/Caffetteria";
import Mezzanino from "./page/Mezzanino";
import Concession from "./page/Concession";

import Trac from "./page/Trac/Trac";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Row } from "antd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/caffetteria",
      element: <Caffetteria></Caffetteria>,
    },
    {
      path: "/mezzanino",
      element: <Mezzanino></Mezzanino>,
    },
    {
      path: "/concession",
      element: <Concession></Concession>,
    },

    {
      path: "/tracciabilità",
      element: <Trac></Trac>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
