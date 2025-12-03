import React from 'react';
import { Mail, Info } from 'lucide-react';
import './Notifications.css';

const NotificationCard = ({ title, message }) => {
  return (
    <div className="notif-card">
      
      {/* Ícone de Informação (i) */}
      <div className="icon-wrapper">
        <div style={{ 
          width: '24px', 
          height: '24px', 
          border: '1.5px solid #374151', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#374151'
        }}>
          i
        </div>
      </div>

      {/* Conteúdo de Texto */}
      <div className="notif-content" style={{ paddingRight: '30px' }}>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>

      {/* Botão de Ação (Envelope) */}
      <button className="action-btn">
        <Mail size={16} />
      </button>

    </div>
  );
};

export default NotificationCard;