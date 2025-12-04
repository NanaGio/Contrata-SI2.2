import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import backgroundClear from '../assets/images/backgroundClear.png';
import logoPreto from '../assets/images/logoPreto.png';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const handLoginSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try{
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username: login, 
                password: password
            });

            console.log("Login bem-sucedido!");
            console.log("Token:", response.data.token);

            localStorage.setItem('authToken', response.data.token);
            
            alert(`Login bem-sucedido!`);
        } catch (err) {
            console.error("Erro no login:", err);
            if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                setError("Login ou senha inválidos. Tente novamente.");
            } else {
                setError("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
            }
        }
    }

    return (
        <div className='login-page-container'>
            <div className='ladoDireito'>
                <div className='container-flex'>
                    <div className='login'>
                        <img src={logoPreto}/>
                        <h2 className="login-title">Acessar conta</h2>
                        <Link to="/cadastro" className='cadastro'>
                            Ou cadastre-se
                        </Link>
                        <form onSubmit={handLoginSubmit} className="login-form">

                            <div className='form-group'>
                                <label htmlFor="login">Login *</label>
                                <input
                                    type="login"
                                    id="login"
                                    placeholder="Username"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    required
                                />
                                <div className='form-group password-group'>
                                <label htmlFor="password">Senha *</label>
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    id="password"
                                    placeholder="Sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span onClick={togglePasswordVisibility} className='eye-icon'>
                                    {passwordShown ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                            </div>
                            <button type='button' className='login-button' onClick={() => navigate('/Vagas')}>
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='ladoEsquerdo'>
                <img className='imgbkgrd' src={backgroundClear}/>
            </div>
        </div>
    );
}

export default LoginPage;