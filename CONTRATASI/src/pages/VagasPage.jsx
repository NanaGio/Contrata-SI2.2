import React, {useState} from 'react';
import { Filter, Search, Trash2 } from 'lucide-react';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar'; // Importe a Sidebar

// Importando o arquivo CSS tradicional
import './VagasPage.css';

const VagasPage = () => {
  // Estado para controlar se a sidebar está visível
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Funções para abrir e fechar
  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="vagas-container">
      
      {/* Passamos a função de abrir para a Navbar */}
      <Navbar onOpenProfile={handleOpenSidebar} />

      {/* Componente Sidebar (fica "escondido" até o estado mudar) */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <main className="vagas-main">
        
        {/* --- SEÇÃO DE BUSCA E FILTROS --- */}
        <div className="search-section">
          
          {/* Linha de Busca */}
          <div className="search-row">
            <label className="input-label">Buscar:</label>
            <div className="search-wrapper">
              <input 
                type="text" 
                className="search-input"
              />
              <Search size={20} className="search-icon" />
            </div>
          </div>

          {/* Linha de Filtros e Botões */}
          <div className="filters-row">
            
            {/* Select Empresa */}
            <div className="filter-group">
              <label className="input-label">Empresa:</label>
              <select className="filter-select">
                <option value="">Selecione...</option>
                <option value="pipipi">Pipipi Popo LTDA</option>
              </select>
            </div>

            {/* Select Competência */}
            <div className="filter-group">
              <label className="input-label">Competência:</label>
              <select className="filter-select">
                 <option value="">Selecione...</option>
                 <option value="react">React</option>
                 <option value="java">Java</option>
              </select>
            </div>

            {/* Botões de Ação */}
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

        {/* --- GRID DE VAGAS --- */}
        <div className="cards-grid">
          {/* Gerando 12 cards para visualização */}
          {Array.from({ length: 12 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>

      </main>
    </div>

    
  );
};

export default VagasPage;