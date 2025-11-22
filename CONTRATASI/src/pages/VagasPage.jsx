import { Filter, Search, Trash2 } from 'lucide-react';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';

const VagasPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]"> {/* Fundo cinza bem clarinho */}
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        
        {/* --- ÁREA DE BUSCA E FILTROS (Centralizada) --- */}
        <div className="max-w-5xl mx-auto mb-12">
          
          {/* 1. Linha de Busca */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-800 mb-2 ml-1">Buscar:</label>
            <div className="relative shadow-sm">
              <input 
                type="text" 
                className="w-full border border-emerald-500 rounded-2xl py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
              />
              <Search className="absolute right-4 top-3.5 text-emerald-600" size={20} />
            </div>
          </div>

          {/* 2. Linha de Filtros (Grid para alinhar inputs e botões) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
            {/* Select Empresa (Ocupa 4 colunas) */}
            <div className="md:col-span-4">
              <label className="block text-sm font-bold text-gray-800 mb-2 ml-1">Empresa:</label>
              <select className="w-full border border-emerald-500 rounded-lg h-[45px] px-3 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Selecione...</option>
              </select>
            </div>

            {/* Select Competência (Ocupa 4 colunas) */}
            <div className="md:col-span-4">
              <label className="block text-sm font-bold text-gray-800 mb-2 ml-1">Competência:</label>
              <select className="w-full border border-emerald-500 rounded-lg h-[45px] px-3 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                 <option value="">Selecione...</option>
              </select>
            </div>

            {/* Botões (Ocupam 4 colunas divididas entre eles) */}
            <div className="md:col-span-4 flex gap-3">
              <button className="flex-1 bg-[#2E8B57] hover:bg-[#246d44] text-white rounded-lg h-[45px] flex items-center justify-center gap-2 font-semibold transition shadow-sm text-sm">
                <Filter size={16} /> Filtrar
              </button>

              <button className="flex-1 bg-[#2E8B57] hover:bg-[#246d44] text-white rounded-lg h-[45px] flex items-center justify-center gap-2 font-semibold transition shadow-sm text-sm">
                 <Trash2 size={16} /> Limpar
              </button>
            </div>
          </div>
        </div>

        {/* --- GRADE DE VAGAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>

      </main>
    </div>
  );
};

export default VagasPage;