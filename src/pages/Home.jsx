import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-20 pb-32 bg-[#FDFBF7]">
      <div className="max-w-4xl px-6 w-full flex flex-col gap-10">
        
        {/* TEXTO - Direto, descritivo e funcional */}
        <div className="flex flex-col gap-10">
          <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-extrabold text-[#0A1128] leading-[1.05] tracking-tight">
            O pico de evasão escolar no Brasil acontece aos <span className="text-[#C6EDDF] bg-[#0A1128] px-2 rounded-sm whitespace-nowrap">14 e 15 anos.</span>
          </h1>
          
          <div className="flex flex-col gap-6">
            <p className="text-[18px] md:text-[22px] text-[#0A1128]/80 font-medium leading-[1.6]">
              A urgência de ajudar na renda familiar e a falta de interesse em um ensino distante da realidade afastam os jovens das salas de aula durante a transição para o Ensino Médio.
            </p>
            <p className="text-[18px] md:text-[22px] text-[#0A1128]/80 font-medium leading-[1.6]">
              O crime organizado acaba se tornando o maior concorrente da escola ao oferecer pertencimento e dinheiro rápido. A promessa de futuro pelos estudos dificilmente compete com a urgência financeira do presente.
            </p>
            
            <div className="border-l-8 border-[#C6EDDF] pl-6 py-2 mt-4 inline-block">
              <p className="text-[20px] md:text-[26px] font-extrabold text-[#0A1128] leading-[1.4] tracking-tight">
                A proposta é utilizar o contraturno para estruturar o <span className="text-[#0A1128] underline decoration-[#C6EDDF] decoration-4 underline-offset-4">Hub de Micro-Renda</span>.
              </p>
            </div>
          </div>
        </div>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 flex-wrap">
          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/gestores')}
            className="bg-[#C6EDDF] hover:bg-[#AEE0CC] text-[#0A1128] font-extrabold px-8 py-5 rounded-full text-[15px] sm:text-[16px] text-center shadow-none transition-colors whitespace-nowrap"
          >
            Quero adotar na minha escola
          </motion.button>

          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/voluntarios')}
            className="bg-[#C6EDDF] hover:bg-[#AEE0CC] text-[#0A1128] font-extrabold px-8 py-5 rounded-full text-[15px] sm:text-[16px] text-center shadow-none transition-colors whitespace-nowrap"
          >
            Por que ser voluntário?
          </motion.button>

          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projeto')}
            className="bg-transparent border-2 border-[#0A1128] hover:bg-[#0A1128] hover:text-[#C6EDDF] text-[#0A1128] font-extrabold px-8 py-5 rounded-full text-[15px] sm:text-[16px] flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            Conhecer o projeto <ArrowRight size={18} strokeWidth={3} />
          </motion.button>
        </div>
        
      </div>
    </div>
  );
}