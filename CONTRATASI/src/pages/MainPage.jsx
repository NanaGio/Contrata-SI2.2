import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logoPreto.png';

function MainPage() {
  const navigate = useNavigate();

  const handleSeguir = () => {
    navigate('/login');
  };

  return (
    // 1. Adicionei 'gap-8': Isso força um espaço automático entre TODOS os elementos
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-10 gap-8">

      {/* Logo */}
      <div className="w-full flex justify-center">
        <img
          src={logoImg}
          alt="Logo ContrataSI"
          // Mudei para w-64 (base) e sm:w-80 (telas maiores)
          // w-64 = 256px | w-80 = 320px
          className="w-64 sm:w-80 h-auto object-contain"
        />
      </div>


      {/* Texto Descritivo */}
      {/* Removi margens manuais para confiar no gap */}
      <p className="text-gray-800 text-base sm:text-lg text-justify max-w-2xl leading-relaxed">
        ContrataSI é uma plataforma criada para centralizar e organizar
        vagas de Sistemas de Informação e Tecnologia disponíveis na
        região de Feira de Santana. Seu objetivo é facilitar o acesso a
        oportunidades profissionais, reunindo em um só lugar estágios,
        empregos e programas de trainee voltados para estudantes e
        profissionais da área de TI, tornando a busca mais rápida,
        acessível e eficiente.
      </p>

      {/* Botão */}
      <button
        className="w-72 h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-md transition-all duration-300 uppercase tracking-widest text-base flex items-center justify-center"
        onClick={handleSeguir}
      >
        SEGUIR
      </button>

    </div>
  );
}

export default MainPage;