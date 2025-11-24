import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logoPreto.png';

// Importa o arquivo CSS que acabamos de criar
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  const handleSeguir = () => {
    navigate('/login');
  };

  return (
    <div className="main-container">

      {/* Logo */}
      <div className="logo-wrapper">
        <img
          src={logoImg}
          alt="Logo ContrataSI"
          className="logo-img"
        />
      </div>

      {/* Texto Descritivo */}
      <p className="description-text">
        ContrataSI é uma plataforma criada para centralizar e organizar
        vagas de Sistemas de Informação e Tecnologia disponíveis na
        região de Feira de Santana. Seu objetivo é facilitar o acesso a
        oportunidades profissionais, reunindo em um só lugar estágios,
        empregos e programas de trainee voltados para estudantes e
        profissionais da área de TI, tornando a busca mais rápida,
        acessível e eficiente.
      </p>

      {/* Botão */}
      <button
        className="follow-btn"
        onClick={handleSeguir}
      >
        SEGUIR
      </button>

    </div>
  );
}

export default MainPage;