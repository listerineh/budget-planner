import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";
import Clean from "./pages/Clean";
import Home from "./pages/Home/Home";
import Finance from "./pages/Finance/Finance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/services",
    element: <Home />,
  },
  {
    path: "/finance",
    element: <Finance />,
  },
  {
    path: "/expenses",
    element: <div>Working on ...</div>,
  },
  {
    path: "/monet",
    element: <div>Working on ...</div>,
  },
  {
    path: "/cards",
    element: <div>Working on ...</div>,
  },
  {
    path: "/old",
    element: <Clean />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
