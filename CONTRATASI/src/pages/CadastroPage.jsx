import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBuilding, FaEye, FaEyeSlash } from 'react-icons/fa';
import './CadastroPage.css';
import logoPreto from '../assets/images/logoPreto.png';
import axios from 'axios'; 

const Cadastro = () => {
  const navigate = useNavigate();
  const [tipoConta, setTipoConta] = useState('profissional'); 
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    arquivo: null
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, arquivo: e.target.files[0] });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const usuarioParaEnviar = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        senha: formData.senha,
        perfilNome: tipoConta === 'profissional' ? 'Profissional' : 'Empresa' 
    };

    try {
    
        await axios.post('http://localhost:8080/api/usuarios', usuarioParaEnviar);
        
        setSuccess('Cadastro realizado com sucesso! Você já pode fazer o login.');
        
        setFormData({ nome: '', email: '', telefone: '', senha: '', arquivo: null });

        if (tipoConta === 'profissional' && formData.arquivo) {
            console.log("Próximo passo: Fazer upload do arquivo:", formData.arquivo.name);
        }

    } catch (err) {
        console.error('Erro no cadastro:', err);
        if (err.response && err.response.data) {
            setError(err.response.data.message || 'Ocorreu um erro ao tentar cadastrar.');
        } else {
            setError('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
        }
    }
  }

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

          <button type="button" className="submit-btn" onClick={() => navigate('/Vagas')}>
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;