
const JobCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden h-full flex flex-col">
      
      {/* Barra lateral decorativa (Aquele verde escuro na esquerda) */}
      <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#1B4D3E]"></div>

      <div className="p-5 pl-7 flex flex-col h-full"> {/* pl-7 para dar espaço da barra lateral */}
        
        {/* Cabeçalho */}
        <div className="mb-3 border-b border-gray-100 pb-3">
          <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">Titulo Vaga</h3>
          <p className="text-xs text-gray-500 font-medium">16/04/2025 10:00</p>
        </div>

        {/* Empresa */}
        <div className="mb-4 flex-grow">
          <p className="text-sm text-gray-600">
            Empresa: <span className="font-bold text-gray-900">Pipipi Popo LTDA</span>
          </p>
        </div>

        {/* Tags (Grid 3x2 exato) */}
        <div className="grid grid-cols-3 gap-2 mt-auto">
          {[1, 2, 3, 4, 5, 6].map((tag) => (
            <span 
              key={tag} 
              className="bg-emerald-100/80 text-emerald-800 text-[10px] font-bold px-1 py-1.5 rounded-md text-center whitespace-nowrap"
            >
              TagVaga
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;