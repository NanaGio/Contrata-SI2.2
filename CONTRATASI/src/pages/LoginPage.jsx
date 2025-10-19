import './LoginPage.css';
import logoPreto from '../assets/images/logoPreto.png';
import backgroundClear from '../assets/images/backgroundClear.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import React, { useState } from 'react';

const LoginPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <div>
            <div class='ladoDireito'>
                <h1>D</h1>
            </div>
            <div class='ladoEsquerdo'>
                <h2>E</h2>
            </div>
        </div>
    );
}

export default LoginPage;