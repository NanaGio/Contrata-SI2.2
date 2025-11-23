import React from 'react';
// Importando o CSS
import './JobCard.css';

const JobCard = () => {
  return (
    <div className="job-card">
      
      {/* Barra lateral decorativa */}
      <div className="card-strip"></div>

      <div className="card-content">
        
        {/* Cabeçalho */}
        <div className="card-header">
          <h3 className="card-title">Titulo Vaga</h3>
          <span className="card-date">16/04/2025 10:00</span>
        </div>

        {/* Empresa */}
        <div className="card-body">
          <p className="company-text">
            Empresa: <span className="company-name">Pipipi Popo LTDA</span>
          </p>
        </div>

        {/* Tags (Grid 3 colunas) */}
        <div className="tags-grid">
          {[1, 2, 3, 4, 5, 6].map((tag) => (
            <span key={tag} className="tag">
              TagVaga
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default JobCard;