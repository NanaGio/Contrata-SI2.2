import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import backgroundClear from '../assets/images/backgroundClear.png'; // Verifique se o caminho está certo
import logoPreto from '../assets/images/logoPreto.png'; // Verifique se o caminho está certo
import './LoginPage.css';



const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const handLoginSubmit = async (event) => {
    event.preventDefault();
    setError('');

const defaultEmail = "admin@teste.com";
const defaultPassword = "123456";

    // --- LOGIN LOCAL HARDCODED ---
    if (login === defaultEmail && password === defaultPassword) {
        localStorage.setItem("authToken", "token_fake_default");
        alert("Login bem-sucedido (modo padrão)!");
        navigate('/vagas'); // Redireciona para a página inicial após login bem-sucedido
        return;
    }

    // --- LOGIN VIA API (mantido caso queira usar ambos) ---
    try {
        const response = await axios.post('http://localhost:8080/api/auth/login', {
            username: login,
            password: password
        });

        console.log("Login bem-sucedido!", response.data);
        localStorage.setItem('authToken', response.data.token);
        alert("Login bem-sucedido via API!");
        navigate('/vagas'); // Redireciona para a página inicial após login bem-sucedido
    } catch (err) {
        console.error("Erro no login:", err);
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
            setError("Login ou senha inválidos.");
        } else {
            setError("Erro de conexão. Tente mais tarde.");
        }
    }
};


    return (
        <div className='login-page-container'>
            {/* Lado Esquerdo - Formulário */}
            <div className='lado-esquerdo-form'>
                <div className='form-wrapper'>
                    <div className='logo-area'>
                        <img src={logoPreto} alt="Logo ContrataSi" className='logo-img'/>
                    </div>
                    
                    <h2 className="login-title">Acessar conta</h2>
                    
                    <form onSubmit={handLoginSubmit} className="login-form">
                        
                        <div className='form-group'>
                            <label htmlFor="login">E-mail *</label>
                            <input
                                type="text"
                                id="login"
                                // value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">Senha *</label>
                            <div className="password-input-container">
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span onClick={togglePasswordVisibility} className='eye-icon'>
                                    {passwordShown ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                        </div>

                        {/* Links de ajuda (Cadastre-se e Esqueceu Senha) */}
                        <div className="form-helper-links">
                            <span className="text-muted">
                                Não tem conta? <Link to="/cadastro" className='link-verde'>Cadastre-se</Link>
                            </span>
                        </div>

                        {error && <p className="error-msg">{error}</p>}

                        <button type='submit' className='login-button'>
                            ENTRAR
                        </button>
                    </form>
                </div>
            </div>

            {/* Lado Direito - Imagem */}
            <div className='lado-direito-img'>
                <img src={backgroundClear} alt="Fundo Decorativo" />
            </div>
        </div>
    );
}

export default LoginPage;