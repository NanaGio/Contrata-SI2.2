import React, { useState } from 'react'; // 1. Importe useState
import { Bell, Search } from 'lucide-react';
import './Navbar.css';
import logoImg from "../assets/images/LogoB.png";

// 2. Importe o componente de notificações
import NotificationPanel from './NotificationPanel';

const Navbar = ({ onOpenProfile }) => {
  // 3. Estado para controlar se mostra ou esconde
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="navbar-container">
      
      {/* Lado Esquerdo */}
      <div className="nav-left">
        <img src={logoImg} alt="Logo ContrataSI" className="nav-logo" />
        <span className="nav-title">ContrataSI</span>
      </div>

      {/* Lado Direito */}
      <div className="nav-right">
        
        <button className="btn-vagas">
          <Search size={20} strokeWidth={2.5} />
          <span>Vagas</span>
        </button>
        
        {/* --- ÁREA DE NOTIFICAÇÃO --- */}
        <div className="notification-wrapper">
          
          {/* O clique acontece aqui para abrir/fechar */}
          <div 
            className="bell-trigger" 
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={28} />
            <span className="notification-dot"></span>
          </div>

          {/* Renderização Condicional: Só aparece se showNotifications for true */}
          {showNotifications && (
            <div className="dropdown-container">
              <NotificationPanel />
            </div>
          )}
          
        </div>

        <div className="user-avatar" onClick={onOpenProfile}>
          P
        </div>

      </div>
    </nav>
  );
};

export default Navbar;