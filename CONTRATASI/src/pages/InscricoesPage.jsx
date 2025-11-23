import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/SideBar';
import './InscricoesPage.css';

const InscricoesPage = () => {
  // Lógica da Sidebar (igual a da VagasPage)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="inscricoes-container">
      
      {/* Navbar com a função de abrir o perfil */}
      <Navbar onOpenProfile={handleOpenSidebar} />

      {/* Sidebar (menu lateral) */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <main className="inscricoes-main">
        
        {/* Título Centralizado */}
        <h1 className="page-title">Inscrições</h1>

        {/* Grid de Cards */}
        <div className="cards-grid">
          {/* Gerando 5 cards como no exemplo (mas o grid aguenta mais) */}
          {Array.from({ length: 5 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>

      </main>
    </div>
  );
};

export default InscricoesPage;