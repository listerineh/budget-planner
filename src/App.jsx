import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";
import Clean from "./pages/Clean";
import Home from "./pages/Home/Home";
import Finance from "./pages/Finance/Finance";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useLogged } from "./context/UserContext";

const App = () => {
  const { isLogged } = useLogged();

  const PrivateRoute = ({ element }) => {
    return isLogged ? element : <Navigate to="/login" />;
  };

  const FreeRoute = ({ element }) => {
    return !isLogged ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<FreeRoute element={<Login />} />} />
        <Route
          path="/register"
          element={<FreeRoute element={<Register />} />}
        />
        <Route path="/services" element={<PrivateRoute element={<Home />} />} />
        <Route
          path="/finance"
          element={<PrivateRoute element={<Finance />} />}
        />
        <Route
          path="/expenses"
          element={<PrivateRoute element={<div>Working on...</div>} />}
        />
        <Route
          path="/monet"
          element={<PrivateRoute element={<div>Working on...</div>} />}
        />
        <Route
          path="/cards"
          element={<PrivateRoute element={<div>Working on...</div>} />}
        />
        <Route path="/old" element={<Clean />} />
      </Routes>
    </Router>
  );
};

export default App;
