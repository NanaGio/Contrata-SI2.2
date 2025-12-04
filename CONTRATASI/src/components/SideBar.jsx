import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importe isso
import { Phone, Mail, FileText, Download } from 'lucide-react';
import './Sidebar.css';
import { userData } from '../Data';


const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // 2. Inicialize o hook

  // Função que navega e fecha o menu
  const handleIrParaInscricoes = () => {
    navigate('/inscricoes'); // Navega para a rota configurada
    onClose(); // Fecha a sidebar para não atrapalhar a nova tela
  };

  return (
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      
      <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Cabeçalho Perfil */}
        <div className="profile-header">
          <div className="sidebar-avatar">{userData.iniciais}</div>
          <div className="profile-info">
            <h2>{userData.nome}</h2>
            <span>{userData.tipo}</span>
          </div>
        </div>

        <div className="divider"></div>

        {/* Contatos */}
        <div className="contact-section">
          <div className="contact-item">
            <Phone size={20} className="text-gray-700" />
            <span>{userData.telefone}</span>
          </div>
          <div className="contact-item">
            <Mail size={20} className="text-gray-700" />
            <span>{userData.email}</span>
          </div>
        </div>

        {/* Box Currículo (PDF) */}
        <div className="cv-box">
          <div className="cv-content">
            <FileText size={24} color="#dc2626" />
            <span className="cv-name">{userData.curriculoNome}</span>
          </div>
          <Download size={20} className="cursor-pointer text-gray-600" />
        </div>

        {/* Anexar Currículo */}
        <div className="upload-section">
          <span className="upload-label">Anexar Currículo:</span>
          <button className="btn-upload">Escolher Arquivo</button>
        </div>

        {/* 3. Adicione o onClick no botão */}
        <button className="btn-inscricoes" onClick={handleIrParaInscricoes}>
          Inscrições
        </button>

      </div>
    </div>
  );
};

export default Sidebar;