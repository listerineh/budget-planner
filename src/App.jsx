import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Clean from "./pages/Clean";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
