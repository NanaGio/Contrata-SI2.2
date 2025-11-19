import { useState } from 'react';
import { FaUser, FaBuilding, FaEye, FaEyeSlash } from 'react-icons/fa';
import './CadastroPage.css';
import logoPreto from '../assets/images/logoPreto.png';

const Cadastro = () => {
  const [tipoConta, setTipoConta] = useState('profissional'); 
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    arquivo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, arquivo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', { ...formData, tipoConta });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
            <div className="logo-container"> 
                <img src={logoPreto} alt="Logo ContrataSI" className="logo-img" />
            </div>
            <h2>Criar conta</h2>
        </div>

        <div className="toggle-container">
          <button
            type="button"
            className={`toggle-btn ${tipoConta === 'profissional' ? 'active' : ''}`}
            onClick={() => setTipoConta('profissional')}
          >
            <FaUser style={{ marginRight: '8px' }} /> Profissional
          </button>
          <button
            type="button"
            className={`toggle-btn ${tipoConta === 'empresa' ? 'active' : ''}`}
            onClick={() => setTipoConta('empresa')}
          >
            <FaBuilding style={{ marginRight: '8px' }} /> Empresa
          </button>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-group">
            <label>Nome *</label>
            <input 
              type="text" 
              name="nome" 
              value={formData.nome} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>E-mail *</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Telefone *</label>
            <input 
              type="tel" 
              name="telefone" 
              value={formData.telefone} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Senha *</label>
            <div className="password-wrapper">
              <input
                type={mostrarSenha ? "text" : "password"}
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <span 
                className="eye-icon" 
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

    
          {tipoConta === 'profissional' && (
            <div className="file-group">
              <label>Anexar Currículo:</label>
              <label htmlFor="file-upload" className="custom-file-upload">
                Escolher Arquivo
              </label>
              <input 
                id="file-upload" 
                type="file" 
                onChange={handleFileChange} 
              />
              {formData.arquivo && <span className="file-name">{formData.arquivo.name}</span>}
            </div>
          )}

          <button type="submit" className="submit-btn">
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;