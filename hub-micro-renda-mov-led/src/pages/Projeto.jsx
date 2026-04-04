import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowDown } from 'lucide-react';

export default function Projeto() {
  // 1. Navegação e Orientação (Global)
  const { scrollYProgress } = useScroll();
  
  // O prompt agora desaparece apenas no pé da página
  const scalePrompt = useTransform(scrollYProgress, [0.9, 0.99], [1, 0]);

  // 2. Header Section (Parallax Inverso e Masking)
  const refHeader = useRef(null);
  const { scrollYProgress: scrollProgHeader } = useScroll({
    target: refHeader,
    offset: ["start start", "end start"]
  });
  // Título sobe e escapa da máscara enquanto a página rola
  const yHeaderTitle = useTransform(scrollProgHeader, [0, 1], [0, -200]);
  const yHeaderSub = useTransform(scrollProgHeader, [0, 1], [0, -100]);

  // 3. Bloco 1 - Validação Real (Scaled Structural Reveal)
  const refVal = useRef(null);
  const { scrollYProgress: scrollProgVal } = useScroll({
    target: refVal,
    offset: ["start end", "center center"]
  });
  
  // Esquerda: Texto desliza verticalmente sem fade genérico
  const yValText = useTransform(scrollProgVal, [0, 0.6], [100, 0]);
  
  // Direita: Borda desenhando e Links Staggered (x offset restrito)
  const scaleYBorder = useTransform(scrollProgVal, [0.2, 0.7], [0, 1]);
  const xLink1 = useTransform(scrollProgVal, [0.4, 0.7], [50, 0]);
  const xLink2 = useTransform(scrollProgVal, [0.5, 0.8], [50, 0]);
  const xLink3 = useTransform(scrollProgVal, [0.6, 0.9], [50, 0]);

  // Viewport Props para Animação Flutuante/Opacidade dos textos 
  const textViewportProps = {
    initial: { opacity: 0.1, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: false, margin: "-20% 0px -20% 0px" }
  };

  // 5. Bloco 4 - Desafio LED (Velocidade e Expansão)
  const refLed = useRef(null);
  const { scrollYProgress: scrollProgLed } = useScroll({
    target: refLed,
    offset: ["start end", "end center"]
  });

  const scaleLedBlock = useTransform(scrollProgLed, [0, 1], [0.8, 1.1]);
  const yLedBtn = useTransform(scrollProgLed, [0, 1], [40, 0]);


  return (
    <div className="w-full relative bg-[#FDFBF7] overflow-x-hidden">
      
      {/* ProgressBar Global */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-1 bg-[#C6EDDF] w-full z-50 origin-left will-change-transform"
      />

      {/* Scroll Prompt Flutuante (Some aos 90% do scroll global) */}
      <motion.div 
        style={{ scale: scalePrompt }}
        className="fixed bottom-10 right-10 lg:right-16 z-40 flex flex-col items-center gap-2 will-change-transform origin-bottom"
      >
        <span className="text-[#0A1128] font-extrabold text-[12px] uppercase tracking-widest bg-white/80 px-2 py-1 backdrop-blur-sm rounded-md shadow-sm">
          Role para Explorar
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[#0A1128] bg-white p-2 rounded-full shadow-md"
        >
          <ArrowDown size={18} strokeWidth={3} />
        </motion.div>
      </motion.div>

      {/* --- Section 1: Header (Parallax e Mask) --- */}
      <section ref={refHeader} className="w-full relative h-[60vh] flex items-center justify-center bg-[#FDFBF7] overflow-hidden">
        <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-8 items-end relative z-10">
          <div className="col-span-12 md:col-span-8 overflow-hidden py-4">
            <motion.h1 
              style={{ y: yHeaderTitle }} 
              className="text-[48px] md:text-[80px] font-extrabold text-[#0A1128] tracking-tight leading-[1] will-change-transform"
            >
              Conheça o Projeto
            </motion.h1>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end overflow-hidden py-4">
            <motion.p 
              style={{ y: yHeaderSub }}
              className="text-[14px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest text-left md:text-right will-change-transform"
            >
              Metodologia Validada
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Validação (Structural Reveal sem fade) --- */}
      <section ref={refVal} className="w-full py-32 flex justify-center bg-[#FDFBF7] relative z-20 overflow-hidden">
        <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          
          <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
             <h2 className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-6">
              Validação Real
             </h2>
             <div className="overflow-hidden py-4">
               <motion.p 
                 style={{ y: yValText }}
                 className="text-[20px] lg:text-[28px] text-[#0A1128] font-extrabold leading-[1.5] w-full will-change-transform break-words"
               >
                 Essa ideia foi baseada em uma experiência passada no Ensino Médio do Colégio Educar Guarulhos, onde os alunos na matéria de empreendedorismo vendiam doces para arrecadar fundos nas campanhas solidárias de Páscoa e Dia das Crianças para o Instituto Batuíra. A ideia já é validada quando os alunos e a escola unem forças.
               </motion.p>
             </div>
          </div>
          
          <div className="col-span-1 md:col-span-5 flex flex-col justify-center gap-6 relative pl-8 lg:pl-12">
            <motion.div 
              style={{ scaleY: scaleYBorder }} 
              className="absolute left-0 top-0 bottom-0 w-2 lg:w-3 bg-[#C6EDDF] origin-top will-change-transform"
            />
            
            <p className="text-[14px] font-extrabold text-[#0A1128] tracking-widest uppercase mt-4">
              Evidências Visuais
            </p>

            <div className="flex flex-col gap-5 overflow-hidden py-4 border-l border-transparent">
              <motion.a 
                style={{ x: xLink1 }}
                href="https://www.instagram.com/reel/C3-gzSTr_OL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-[18px] font-extrabold text-[#0A1128] hover:text-[#C6EDDF] transition-colors w-fit will-change-transform"
              >
                <ExternalLink size={20} strokeWidth={3} /> Ver Evidência 1
              </motion.a>
              <motion.a 
                style={{ x: xLink2 }}
                href="https://www.instagram.com/reel/DA1A1MaxjIP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-[18px] font-extrabold text-[#0A1128] hover:text-[#C6EDDF] transition-colors w-fit will-change-transform"
              >
                <ExternalLink size={20} strokeWidth={3} /> Ver Evidência 2
              </motion.a>
              <motion.a 
                style={{ x: xLink3 }}
                href="https://www.instagram.com/reel/DIjedNAx_J1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-[18px] font-extrabold text-[#0A1128] hover:text-[#C6EDDF] transition-colors w-fit will-change-transform"
              >
                <ExternalLink size={20} strokeWidth={3} /> Ver Evidência 3
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Core (Fluxo Normal & Viewport Highlighting) --- */}
      {/* Container garantido para não exceder 100vw */}
      <section className="w-full max-w-full overflow-hidden py-32 bg-[#0A1128] relative">
        <div className="w-full pt-32">
          <div className="w-full max-w-7xl px-6 md:px-10 mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
            
            {/* Esquerda: Contexto */}
            <div className="w-full lg:w-1/3 shrink-0 h-full">
              <div className="flex flex-col gap-8">
                <h2 className="text-[13px] font-extrabold text-[#C6EDDF]/50 uppercase tracking-widest">
                  Contexto e Dados
                </h2>
                <p className="text-[20px] text-[#FDFBF7] font-bold leading-[1.6] break-words">
                  Entender os motivos da evasão é o primeiro passo para arquitetar uma solução eficaz. De acordo com o IBGE, a necessidade de trabalhar e o desinteresse são os principais fatores de abandono do ensino público.
                </p>
                <a 
                  href="https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/28286-necessidade-de-trabalhar-e-desinteresse-sao-principais-motivos-para-abandono-escolar" 
                  target="_blank" rel="noopener noreferrer" 
                  className="mt-4 inline-flex items-center gap-2 text-[15px] font-extrabold text-[#0A1128] bg-[#C6EDDF] hover:bg-[#FDFBF7] px-6 py-4 rounded-full transition-colors w-fit"
                >
                  Base do IBGE <ArrowRight size={16} strokeWidth={3} />
                </a>
              </div>
            </div>

            {/* Direita: Text Opacity Reveal via Element In-View */}
            {/* O flex-1 garante que isso preencha o espaço sem forçar o width pra fora da tela */}
            <div className="flex-1 w-full flex flex-col border-l-4 lg:border-l-8 border-[#1E293B] pl-6 lg:pl-10 pb-10 mt-10 lg:mt-0">
              <h2 className="text-[13px] font-extrabold text-[#C6EDDF]/50 uppercase tracking-widest mb-6">
                A Solução (Ramo Contraturno)
              </h2>
              
              <p className="text-[20px] md:text-[28px] leading-[1.6] font-bold break-words">
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  Como o jovem não tem idade para ingressar num curso técnico formal, proponho o Hub de Micro-Renda Escolar: 
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  usar a escola no contraturno como um polo de empreendedorismo, onde os alunos prestam serviços a preços populares para a própria vizinhança. 
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  A operação funciona na base da troca. Profissionais do bairro vão à escola ensinar ofícios rápidos, como aplicar película de celular ou design de sobrancelha. Em contrapartida, os alunos usam o que aprendem para ajudar o comércio desses voluntários. 
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  A matemática vira ferramenta para montar planilhas de caixa, enquanto o português melhora o atendimento na internet. O jovem adquire renda lícita. 
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#C6EDDF] font-extrabold inline-block mb-2 will-change-transform">
                  Para blindá-lo contra a evasão, a participação exige 85% de presença nas aulas. 
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  Porém, a realidade da escola pública exige empatia: faltas por saúde ou imprevistos familiares graves são acolhidas. 
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#C6EDDF] font-extrabold inline-block will-change-transform">
                  O objetivo é reter, não punir.
                </motion.span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 4: LED Pop Action --- */}
      <section ref={refLed} className="w-full max-w-[100vw] overflow-hidden bg-[#C6EDDF] py-40 flex justify-center">
        <div className="w-full max-w-7xl px-6 md:px-10 flex flex-col md:flex-row relative items-center justify-between gap-16">
          
          <div className="flex flex-col z-10 w-full md:w-3/5">
            <h2 className="text-[16px] font-extrabold text-[#0A1128] uppercase tracking-[0.2em] mb-4 text-center md:text-left">
              Desafio LED
            </h2>
            <motion.div 
              style={{ scale: scaleLedBlock }}
              className="origin-center md:origin-left flex w-full justify-center md:justify-start will-change-transform"
            >
              <p className="text-[64px] md:text-[96px] lg:text-[120px] font-extrabold text-[#0A1128] tracking-tighter leading-[0.9] text-center md:text-left">
                Top 40<br/>GLOBO
              </p>
            </motion.div>
            <p className="text-[20px] md:text-[24px] text-[#0A1128] mt-8 font-bold text-center md:text-left">
              Projetos selecionados no Desafio LED 2026 promovido pela Rede Globo.
            </p>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0">
            <motion.div 
              style={{ y: yLedBtn }} 
              className="will-change-transform"
            >
              <a 
                href="https://somos.globo.com/movimento-led/desafio-led/noticia/desafio-led-globo-2026-divulga-os-40-projetos-selecionados-para-a-proxima-etapa.ghtml" 
                target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-[18px] font-extrabold text-[#FDFBF7] bg-[#0A1128] hover:bg-black px-10 py-6 rounded-full transition-colors shrink-0 whitespace-nowrap shadow-2xl"
              >
                Link da Matéria <ExternalLink size={24} strokeWidth={3} />
              </a>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}