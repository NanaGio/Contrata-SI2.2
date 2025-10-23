import './LoginPage.css';
import logoPreto from '../assets/images/logoPreto.png';
import backgroundClear from '../assets/images/backgroundClear.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const handLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando para o back-end (simulado):");
        console.log("Email:", email);
        console.log("Senha:", password)

        alert(`Login simulado: ${email}`)
    }

    return (
        <div className='login-page-container'>
            <div className='ladoDireito'>
                <div className='container-flex'>
                    <div className='login'>
                        <img src={logoPreto}/>
                        <h2 className="login-title">Acessar conta</h2>
                        <form onSubmit={handLoginSubmit} className="login-form">

                            <div className='form-group'>
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="seuemail@exemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <button type='submit' className='login-button'>
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