import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import JobCard from "../components/JobCard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import ModalVaga from "../components/ModalVaga.jsx";
import "./InscricoesPage.css";

const InscricoesPage = () => {
  // --- SIDEBAR ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  // --- MODAL ---
  const [vagaSelecionada, setVagaSelecionada] = useState(null);

  const abrirDetalhes = (vaga) => {
    console.log("Abrindo modal:", vaga);
    setVagaSelecionada(vaga);
  };

  const fecharDetalhes = () => {
    setVagaSelecionada(null);
  };

  // --- MOCK DATA ---
  const minhasInscricoes = [
    {
      id: 1,
      titulo: "Engenheiro de Software Pleno",
      data: "Inscrito em: 10/11/2025",
      empresa: "SoftHouse Brasil",
      nivel: "Pleno",
      modalidade: "Híbrido",
      localizacao: "Av. Central, 455 - São Paulo",
      descricao: "Atuar com desenvolvimento Java e cloud AWS.",
      salario: "R$ 8.500",
      tags: ["Java", "Spring", "AWS"]
    },
    {
      id: 2,
      titulo: "Designer UI/UX Senior",
      data: "Inscrito em: 12/11/2025",
      empresa: "Creative Studio",
      nivel: "Sênior",
      modalidade: "Remoto",
      localizacao: "100% Home Office",
      descricao: "Criação de interfaces e Design System.",
      salario: "R$ 10.000",
      tags: ["Figma", "Prototipagem", "Design System"]
    },
    {
      id: 3,
      titulo: "Estágio em QA (Testes)",
      data: "Inscrito em: 15/11/2025",
      empresa: "BugFree Systems",
      nivel: "Estágio",
      modalidade: "Presencial",
      localizacao: "Centro, Rio de Janeiro",
      descricao: "Testes automatizados e manuais.",
      salario: "R$ 1.200",
      tags: ["Cypress", "Selenium", "Jira"]
    }
  ];

  return (
    <div className="inscricoes-container">
      {/* Navbar */}
      <Navbar onOpenProfile={handleOpenSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* MODAL DE DETALHES */}
      {vagaSelecionada && (
        <ModalVaga vaga={vagaSelecionada} onClose={fecharDetalhes} />
      )}
      <main className="inscricoes-main">
        {/* Título */}
        <h1 className="page-title">Minhas Inscrições</h1>

        {/* LISTA DE INSCRIÇÕES */}
        <div className="cards-grid">
          {minhasInscricoes.map((vaga) => (
            <div
              key={vaga.id}
              onClick={() => abrirDetalhes(vaga)}
              style={{ cursor: "pointer" }}
            >
              <JobCard
                titulo={vaga.titulo}
                data={vaga.data}
                empresa={vaga.empresa}
                tags={vaga.tags}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InscricoesPage;
