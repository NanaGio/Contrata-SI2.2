import React, { useState } from 'react';
import { Mail, MailOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import NotificationCard from './NotificationCard';
import './Notifications.css';

const NotificationPanel = () => {
  // Estado para controlar qual aba está ativa
  const [activeTab, setActiveTab] = useState('unread'); // 'unread' ou 'read'

  return (
    <div className="notification-container">
      
      {/* --- ABAS --- */}
      <div className="tabs-header">
        
        {/* Aba Não Lidas */}
        <button 
          className={`tab-btn ${activeTab === 'unread' ? 'active' : ''}`}
          onClick={() => setActiveTab('unread')}
        >
          <Mail size={18} />
          Não Lidas
          {activeTab === 'unread' && <span className="badge">1</span>}
        </button>

        {/* Aba Lidas */}
        <button 
          className={`tab-btn ${activeTab === 'read' ? 'active' : ''}`}
          onClick={() => setActiveTab('read')}
        >
          <MailOpen size={18} />
          Lidas
        </button>

      </div>

      {/* --- CONTEÚDO DA LISTA --- */}
      <div className="notification-list">
        
        {activeTab === 'unread' ? (
          /* Lista de Não Lidas */
          <>
            <NotificationCard 
              title="Você foi APROVADO!" 
              message="A Empresa {Nome da empresa} aceitou sua inscrição..." 
            />
             {/* Você pode adicionar mais cards aqui */}
          </>
        ) : (
          /* Lista de Lidas (Exemplo vazio ou com mensagem) */
          <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
            Nenhuma notificação lida.
          </div>
        )}

      </div>

      {/* --- PAGINAÇÃO --- */}
      <div className="pagination">
        <button className="page-arrow">
          <ChevronLeft size={24} />
        </button>
        
        <div className="page-number">1</div>
        
        <button className="page-arrow">
          <ChevronRight size={24} />
        </button>
      </div>

    </div>
  );
};

export default NotificationPanel;