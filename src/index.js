import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar Font Awesome
import AuthProvider from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);