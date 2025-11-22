import { Bell, Search } from 'lucide-react';
import logoImg from '../assets/images/logoPreto.png'; // Ajuste o caminho da logo

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
      {/* Lado Esquerdo: Logo + Nome */}
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
      </div>

      {/* Lado Direito: Botão Vagas, Notificações, Perfil */}
      <div className="flex items-center gap-6">
        <button className="bg-[#00C075] hover:bg-[#00a060] text-white px-6 py-2 rounded-full flex items-center gap-2 font-bold text-sm shadow-sm transition">
            <Search size={16} strokeWidth={3} />
            Vagas
        </button>
        
        <button className="text-gray-600 hover:text-emerald-600 transition">
          <Bell size={24} />
        </button>

        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold cursor-pointer">
          P
        </div>
      </div>
    </nav>
  );
};

export default Navbar;