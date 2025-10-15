import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe o ReactDOM aqui
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importe o createBrowserRouter

import './index.css';

// Importe suas páginas
import LoginPage from './pages/LoginPage.jsx';
import MainPage from './pages/MainPage.jsx';
// O import do App.jsx não é necessário aqui, pode remover se quiser

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

// Use a variável ReactDOM que você importou
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
