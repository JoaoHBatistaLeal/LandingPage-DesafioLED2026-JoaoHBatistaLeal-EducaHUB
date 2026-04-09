import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Voluntarios() {
  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-80px)] items-center py-16 md:py-20 bg-[#FDFBF7] overflow-hidden">
      {/* Correção Principal: grid-cols-1 no mobile, lg:grid-cols-12 no desktop */}
      <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Side */}
        <div className="lg:col-span-5 lg:pr-10 w-full">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-[#0A1128] leading-[1.05] tracking-tight break-words">
            Por que ser voluntário?
          </h1>
          <div className="mt-8 border-l-8 border-[#C6EDDF] pl-6 py-2">
            <h2 className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-4">
              O Papel da Comunidade
            </h2>
            <p className="text-[20px] md:text-[24px] text-[#0A1128] font-bold leading-[1.6]">
              A comunidade investindo tempo nela mesma.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-7 flex flex-col gap-8 lg:border-l-2 border-[#0A1128]/10 lg:pl-10 h-full justify-center items-start w-full">
          <p className="text-[22px] md:text-[32px] text-[#0A1128] font-extrabold leading-[1.7] md:leading-[1.6] tracking-tight w-full">
            Com blocos de <span className="bg-[#0A1128] text-[#C6EDDF] px-2 py-0.5 md:py-1 rounded-sm box-decoration-clone">2 a 4 horas</span>, qualquer empreendedor local pode ensinar um ofício rápido, <span className="bg-[#0A1128] text-[#C6EDDF] px-2 py-0.5 md:py-1 rounded-sm box-decoration-clone">que não pese na sua receita principal.</span> É um formato ágil, pensado para não atrapalhar a rotina de quem já tem um negócio para tocar.
          </p>
          
          <p className="text-[18px] md:text-[22px] text-[#0A1128]/80 font-bold leading-[1.6] w-full">
            O resultado prático vem na hora. O jovem continua estudando, passa a gerar renda lícita e fica blindado contra o aliciamento das ruas. De quebra, o comerciante capacita alguém que amanhã pode virar seu próprio Jovem Aprendiz.
          </p>

          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-fit bg-[#C6EDDF] text-[#0A1128] font-extrabold px-8 py-5 rounded-full text-[15px] flex items-center justify-center gap-3 transition-colors mt-6 md:mt-10 shadow-lg hover:shadow-xl hover:bg-[#A8DFCC]"
          >
            <span className="text-center">Baixe o Guia do Voluntário</span> <Download size={20} strokeWidth={2.5} className="shrink-0" />
          </motion.button>
        </div>
        
      </div>
    </div>
  );
}