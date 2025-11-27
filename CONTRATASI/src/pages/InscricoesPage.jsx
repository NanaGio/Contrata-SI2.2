import React, { useState } from 'react';
// Adicionando .jsx para garantir que o compilador encontre os arquivos
import Navbar from '../components/Navbar.jsx';
import JobCard from '../components/JobCard.jsx';
import Sidebar from '../components/Sidebar.jsx'; 
import './InscricoesPage.css';

const InscricoesPage = () => {
  // Lógica da Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  // --- DADOS DAS INSCRIÇÕES (Mock Data) ---
  const minhasInscricoes = [
    {
      id: 1,
      titulo: "Engenheiro de Software Pleno",
      data: "Inscrito em: 10/11/2025",
      empresa: "SoftHouse Brasil",
      tags: ["Java", "Spring", "AWS"]
    },
    {
      id: 2,
      titulo: "Designer UI/UX Senior",
      data: "Inscrito em: 12/11/2025",
      empresa: "Creative Studio",
      tags: ["Figma", "Prototipagem", "Design System"]
    },
    {
      id: 3,
      titulo: "Estágio em QA (Testes)",
      data: "Inscrito em: 15/11/2025",
      empresa: "BugFree Systems",
      tags: ["Cypress", "Selenium", "Jira"]
    }
  ];

  return (
    <div className="inscricoes-container">
      
      {/* Navbar */}
      <Navbar onOpenProfile={handleOpenSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <main className="inscricoes-main">
        
        {/* Título */}
        <h1 className="page-title">Minhas Inscrições</h1>

        {/* Grid de Cards */}
        <div className="cards-grid">
          
          {/* Mapeando os dados para criar os cards dinamicamente */}
          {minhasInscricoes.map((inscricao) => (
            <JobCard 
              key={inscricao.id}
              titulo={inscricao.titulo}
              data={inscricao.data}
              empresa={inscricao.empresa}
              tags={inscricao.tags}
            />
          ))}

        </div>

      </main>
    </div>
  );
};

export default InscricoesPage;