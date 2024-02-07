import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoggedProvider } from './context/UserContext'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoggedProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        transition="bounce"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
  </LoggedProvider>
)
