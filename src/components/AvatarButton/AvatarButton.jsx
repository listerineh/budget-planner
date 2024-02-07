import { useState } from "react";
import { useLogged } from "../../context/UserContext";
import { toast } from 'react-toastify';
import Bell from "../icons/Bell";
import "./AvatarButton.css";

const AvatarButton = () => {
  const [showModal, setShowModal] = useState(false);
  const { logout, user } = useLogged();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    logout();
    toggleModal();
    toast.success("Sesión cerrada");
  };

  return (
    <div className="avatar-container">
      <button className="avatar-button" onClick={toggleModal}>
        <Bell />
      </button>
      {showModal && (
        <div className="appbar-modal">
          <div className="modal-separator">
              <div className="appbar-modal-user">
                Usuario:
                <h3>{user.email}</h3>
              </div>
              <button className="appbar-logout-button" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default AvatarButton;
