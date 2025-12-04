import React from "react";
import "./ModalVaga.css";
import { X } from "lucide-react";

const ModalVaga = ({ vaga, onClose }) => {
  if (!vaga) return null; // Agora só depende da vaga

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fechar */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Cabeçalho */}
        <div className="modal-header">
          <h1 className="modal-titulo">{vaga.titulo}</h1>
          <span className="modal-data">{vaga.data}</span>
        </div>

        <p className="modal-empresa">
          Empresa: <strong>{vaga.empresa}</strong>
        </p>

        {/* Campos */}
        <div className="modal-grid">
          <div>
            <label>Nível:</label>
            <input value={vaga.nivel} disabled />
          </div>

          <div>
            <label>Modalidade:</label>
            <input value={vaga.modalidade} disabled />
          </div>

          <div>
            <label>Localização:</label>
            <input value={vaga.localizacao} disabled />
          </div>

          <div className="modal-descricao-area">
            <label>Descrição:</label>
            <textarea value={vaga.descricao} disabled />
          </div>

          <div>
            <label>Salário:</label>
            <input value={vaga.salario} disabled />
          </div>
        </div>

        {/* Tags */}
        <div className="modal-tags">
          {vaga.tags?.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <button className="btn-inscrever">Inscrever-se</button>
      </div>
    </div>
  );
};

export default ModalVaga;
