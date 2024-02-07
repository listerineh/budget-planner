import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebase";
import { toast } from 'react-toastify';
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSimpleRegister = async (e) => {
    e.preventDefault();
    let res = {}
    try{
      res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      toast.error(error.message);
      return;
    }
    
    if (!res.user) {
      toast.error("Hubo un problema al crear la cuenta, intente mas tarde.");
      return;
    }

    toast.success("Cuenta creada exitosamente");
    navigate("/login");
  };

  return (
    <div class="register-container">
      <form class="register-form">
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
          <button type="submit" onClick={handleSimpleRegister}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
