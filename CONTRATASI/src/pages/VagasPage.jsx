import React, { useState } from 'react';
import { Filter, Search, Trash2 } from 'lucide-react';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './VagasPage.css';

const VagasPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  // --- DADOS FANTASIA ---
  const listaDeVagas = [
    {
      id: 1,
      titulo: "Desenvolvedor Front-end Jr",
      data: "27/11/2025 14:30",
      empresa: "Tech Solutions BA",
      tags: ["React", "CSS", "JavaScript", "Figma"]
    },
    {
      id: 2,
      titulo: "Analista de Suporte TI",
      data: "26/11/2025 09:00",
      empresa: "Rede Conecta",
      tags: ["Hardware", "Redes", "Windows", "Atendimento"]
    },
    {
      id: 3,
      titulo: "Estágio em Dados",
      data: "25/11/2025 16:45",
      empresa: "DataCorp Feira",
      tags: ["SQL", "Excel", "PowerBI", "Python"]
    },
    {
      id: 4,
      titulo: "Dev Back-end Java",
      data: "24/11/2025 11:20",
      empresa: "Sistema Forte LTDA",
      tags: ["Java", "Spring Boot", "API REST", "Docker"]
    }
  ];

  return (
    <div className="vagas-container">
      <Navbar onOpenProfile={handleOpenSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <main className="vagas-main">
        
        {/* --- SEÇÃO DE BUSCA (Mantive igual) --- */}
        <div className="search-section">
          <div className="search-row">
            <label className="input-label">Buscar:</label>
            <div className="search-wrapper">
              <input type="text" className="search-input" />
              <Search size={20} className="search-icon" />
            </div>
          </div>

          <div className="filters-row">
            <div className="filter-group">
              <label className="input-label">Empresa:</label>
              <select className="filter-select">
                <option value="">Selecione...</option>
                <option value="tech">Tech Solutions</option>
                <option value="rede">Rede Conecta</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="input-label">Competência:</label>
              <select className="filter-select">
                 <option value="">Selecione...</option>
                 <option value="dev">Desenvolvimento</option>
                 <option value="sup">Suporte</option>
              </select>
            </div>

            <div className="actions-group">
              <button className="btn btn-filter">
                <Filter size={18} /> Filtrar
              </button>
              <button className="btn btn-clear">
                 <Trash2 size={18} /> Limpar
              </button>
            </div>
          </div>
        </div>

        {/* --- GRID DE VAGAS DINÂMICO --- */}
        <div className="cards-grid">
          
          {/* Aqui fazemos o loop nos dados fantasia */}
          {listaDeVagas.map((vaga) => (
            <JobCard 
              key={vaga.id}
              titulo={vaga.titulo}
              data={vaga.data}
              empresa={vaga.empresa}
              tags={vaga.tags}
            />
          ))}

        </div>

      </main>
    </div>
  );
};

export default VagasPage;