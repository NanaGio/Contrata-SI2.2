import React from 'react';
import './JobCard.css';

// Recebendo as props aqui dentro dos parênteses {}
const JobCard = ({ titulo, empresa, data, tags, onClick }) => {
  return (
    <div className="job-card" onClick={onClick}>
      
      {/* Barra lateral decorativa */}
      <div className="card-strip"></div>

      <div className="card-content">
        
        {/* Cabeçalho */}
        <div className="card-header">
          <h3 className="card-title">{titulo}</h3>
          <span className="card-date">{data}</span>
        </div>

        {/* Empresa */}
        <div className="card-body">
          <p className="company-text">
            Empresa: <span className="company-name">{empresa}</span>
          </p>
        </div>

        {/* Tags (Dinâmicas) */}
        <div className="tags-grid">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default JobCard;