import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../../services/firebase";
import { useLogged } from "../../context/UserContext";
import { toast } from 'react-toastify';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useLogged();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

    toast.success("Bienvenido");

    const user = res.user;
    login(user);
    navigate("/services");
  };

  const handleSimpleLogin = async (e) => {
    e.preventDefault();
    const res = await signInWithEmailAndPassword(auth, email, password);
    
    if (!res.user) {
      toast.error("Usuario o contraseña incorrectos");
      return;
    }

    const user = res.user;
    login(user);
    navigate("/services");
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div>
          <h2>MONET</h2>
          <h3>A SUITE-POWERED FINANCIAL SOLUTIONS</h3>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSimpleLogin}>
            Iniciar sesión
          </button>
          <button type="button" onClick={() => navigate("/register")}>
            Registrarse
          </button>
        </div>
      </form>
      <span className="login-separator">o</span>
      <div className="google-button-container">
        <button type="button" onClick={handleGoogleLogin}>
          Inicia sesión con Google
        </button>
      </div>
    </div>
  );
};

export default Login;
