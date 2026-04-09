import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Gestores() {
  return (
    <div className="flex flex-col justify-center w-full min-h-[calc(100vh-80px)] items-center bg-[#FDFBF7]">
      <div className="w-full max-w-7xl px-6 md:px-10 py-24 grid grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Side: Massive Heading and Action */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-10 lg:pr-10 pb-10 lg:pb-0">
          <h1 className="text-[40px] md:text-[64px] font-extrabold text-[#0A1128] leading-[1.05] tracking-tight">
            Adote o EducaHUB na sua rede <span className="text-[#C6EDDF] bg-[#0A1128] px-2 rounded-sm whitespace-nowrap">pública</span> ou privada.
          </h1>

          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit bg-[#C6EDDF] text-[#0A1128] font-extrabold px-8 py-5 rounded-full text-[15px] flex items-center justify-center gap-3 transition-colors mt-4 shadow-none"
          >
            Download da Cartilha PDF <Download size={20} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Right Side: Copy and Licensing without cards */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-12 lg:mt-4 lg:pl-10">
          
          <div className="flex flex-col gap-8">
            <h2 className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest pb-4">
              Viabilidade e Execução
            </h2>
            <div className="text-[20px] md:text-[24px] text-[#0A1128] font-extrabold leading-[1.6] space-y-6">
              <p>Custo de implantação quase zero.</p>
              <p>Uso inteligente do espaço que a escola já tem ocioso no contraturno.</p>
              <p>Metodologia 100% documentada para qualquer gestor conseguir rodar o projeto do zero, independente da região.</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-4 pt-10">
            <h2 className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest">
              Regra de Licenciamento
            </h2>
            {/* NO CARD. Just thick border and bold typography */}
            <div className="border-l-8 border-[#C6EDDF] pl-6 py-2">
              <p className="text-[18px] md:text-[20px] text-[#0A1128] font-extrabold leading-[1.6]">
                Licença Free: O gestor pode aplicar a metodologia livremente na escola por implementação própria, porém não possui autorização para utilizar o nome, marca ou símbolos do EducaHUB em suas divulgações.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}