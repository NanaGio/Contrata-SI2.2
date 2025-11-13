import './CadastroPage.css';
import logoPreto from '../assets/images/logoPreto.png';

function CadastroPage() {
    return (
       <div className='cadastro-page-container'>
            <div className='container-flex'>
                
                {/* --- Cabeçalho do Card --- */}
                <div className='form-header'>
                    <img src={logoPreto}/>
                    <h2>Criar conta</h2>
                </div>

                {/* --- Abas de Seleção --- */}
                <div className='tabs-container'>
                    <button className='tab active'>
                        {/* <IconePessoa /> */}
                        Profissional
                    </button>
                    <button className='tab'>
                        {/* <IconeEmpresa /> */}
                        Empresa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CadastroPage;