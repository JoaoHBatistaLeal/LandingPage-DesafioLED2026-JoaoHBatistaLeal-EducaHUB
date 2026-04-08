import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  // 4. Bloco 4 - Desafio LED (Velocidade e Expansão)
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

      {/* Scroll Prompt Flutuante */}
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
          </div>
        </div>
      </section>

      {/* --- Section 2: Validação --- */}
      <section ref={refVal} className="w-full py-32 flex justify-center bg-[#FDFBF7] relative z-20 overflow-hidden">
        <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          
          <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
             <h2 className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-6">
              Inspiração
             </h2>
             <div className="overflow-hidden py-4">
               <motion.p 
                style={{ y: yValText }}
                className="text-[20px] lg:text-[28px] text-[#0A1128] font-extrabold leading-[1.5] w-full will-change-transform break-words"
              >
                A inspiração para o LED surgiu da minha vivência como aluno no Ensino Médio do{' '}
                <a 
                  href="https://www.colegioeducar.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#C6EDDF] text-[#0A1128] hover:bg-[#0A1128] hover:text-[#C6EDDF] transition-colors px-2 py-0.5 rounded-sm whitespace-nowrap inline-flex items-center gap-1.5 underline decoration-2 underline-offset-4"
                >
                  Colégio Educar <ExternalLink size={20} strokeWidth={2.5} />
                </a>
                , em Guarulhos. Na época, utilizamos a eletiva de empreendedorismo para estruturar campanhas e vender doces em prol do{' '}
                <a 
                  href="https://nucleobatuira.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#C6EDDF] text-[#0A1128] hover:bg-[#0A1128] hover:text-[#C6EDDF] transition-colors px-2 py-0.5 rounded-sm whitespace-nowrap inline-flex items-center gap-1.5 underline decoration-2 underline-offset-4"
                >
                  Núcleo Batuíra <ExternalLink size={20} strokeWidth={2.5} />
                </a>
                . Ver o valor que nós mesmos arrecadamos se transformar em doações na Páscoa Solidária e no Dia das Crianças trouxe uma nova perspectiva sobre mobilização. Essa dinâmica evidenciou que a estrutura escolar, somada à dedicação dos alunos, gera resultados concretos. Como{' '}
                <Link 
                  to="/idealizador" 
                  className="bg-[#C6EDDF] text-[#0A1128] hover:bg-[#0A1128] hover:text-[#C6EDDF] transition-colors px-2 py-0.5 rounded-sm whitespace-nowrap inline-flex items-center underline decoration-2 underline-offset-4"
                >
                  idealizador
                </Link>
                , essa experiência me impulsionou a desenhar um novo formato de apoio à comunidade, estruturando um ecossistema que movimenta toda a vizinhança, seja por meio da prestação de serviços ou pelo{' '}
                <Link 
                  to="/voluntarios" 
                  className="bg-[#C6EDDF] text-[#0A1128] hover:bg-[#0A1128] hover:text-[#C6EDDF] transition-colors px-2 py-0.5 rounded-sm whitespace-nowrap inline-flex items-center underline decoration-2 underline-offset-4"
                >
                  voluntariado
                </Link>
                , mantendo sempre o empreendedorismo como pilar central.
              </motion.p>
             </div>
          </div>
          
          <div className="col-span-1 md:col-span-5 flex flex-col justify-center gap-6 relative pl-8 lg:pl-12">
            <motion.div 
              style={{ scaleY: scaleYBorder }} 
              className="absolute left-0 top-0 bottom-0 w-2 lg:w-3 bg-[#C6EDDF] origin-top will-change-transform"
            />
            
            <p className="text-[14px] font-extrabold text-[#0A1128] tracking-widest uppercase mt-4">
              Evidências Visuais de como foi validado
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
                  Segundo o IBGE, a necessidade de trabalhar e o desinteresse são os principais motivos para o abandono do ensino público. A solução precisa resolver o aspecto financeiro e dar sentido prático aos estudos simultaneamente.
                </p>
                <a 
                  href="https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/28286-necessidade-de-trabalhar-e-desinteresse-sao-principais-motivos-para-abandono-escolar" 
                  target="_blank" rel="noopener noreferrer" 
                  className="mt-4 inline-flex items-center gap-2 text-[15px] font-extrabold text-[#0A1128] bg-[#C6EDDF] hover:bg-[#FDFBF7] px-6 py-4 rounded-full transition-colors w-fit"
                >
                  Matéria do IBGE <ArrowRight size={16} strokeWidth={3} />
                </a>
              </div>
            </div>

            {/* Direita: Text Opacity Reveal via Element In-View */}
            <div className="flex-1 w-full flex flex-col border-l-4 lg:border-l-8 border-[#1E293B] pl-6 lg:pl-10 pb-10 mt-10 lg:mt-0">
              <h2 className="text-[13px] font-extrabold text-[#C6EDDF]/50 uppercase tracking-widest mb-6">
                O que projetamos?
              </h2>
              
              <p className="text-[20px] md:text-[28px] leading-[1.6] font-bold break-words">
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  Como o jovem ainda não tem idade para o ensino técnico formal, o Hub de Micro-Renda Escolar utiliza o espaço da escola no contraturno como um polo de serviços.
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  Profissionais da vizinhança ensinam ofícios rápidos aos alunos, como aplicação de película de celular ou design de sobrancelha.
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  Os estudantes aplicam esse aprendizado cobrando preços populares na própria comunidade, gerando renda lícita imediata.
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  As matérias regulares ganham aplicação imediata. A matemática serve para estruturar o fluxo de caixa e precificar o trabalho, enquanto o português melhora o atendimento e a divulgação digital.
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#C6EDDF] font-extrabold inline-block mb-2 will-change-transform">
                  Para blindar o jovem contra o aliciamento e a evasão, a participação no Hub exige 85% de presença nas aulas regulares.
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#FDFBF7] inline-block mb-2 will-change-transform">
                  A regra de retenção prevê flexibilidade. Faltas justificadas por saúde ou urgências familiares graves são acolhidas para garantir que o aluno não perca sua fonte de renda lícita quando mais precisa.
                </motion.span>
                <br/>
                <motion.span {...textViewportProps} className="text-[#C6EDDF] font-extrabold inline-block will-change-transform">
                  O foco central é manter o aluno estudando, sem excluí-lo.
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
            <p className="text-[20px] md:text-[24px] text-[#0A1128] mt-8 font-bold text-center md:text-left max-w-lg mx-auto md:mx-0">
              De mais de 3.820 inscrições a um dos 40 projetos selecionados no Desafio LED 2026 promovido pela Rede Globo.
            </p>
          </div>
          
          {/* Timeline de aprovação (Dois botões) */}
          <div className="w-full md:w-2/5 flex flex-col gap-4 justify-center items-center md:items-end mt-10 md:mt-0">
            <motion.div 
              style={{ y: yLedBtn }} 
              className="will-change-transform w-full sm:w-auto"
            >
              <a 
                href="https://somos.globo.com/movimento-led/desafio-led/noticia/desafio-led-globo-2026-divulga-os-40-projetos-selecionados-para-a-proxima-etapa.ghtml" 
                target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 text-[18px] font-extrabold text-[#FDFBF7] bg-[#0A1128] hover:bg-black px-10 py-6 rounded-full transition-colors whitespace-nowrap shadow-2xl w-full"
              >
                Ver Top 40 <ExternalLink size={22} strokeWidth={3} />
              </a>
            </motion.div>

            <motion.div 
              style={{ y: yLedBtn }} 
              className="will-change-transform w-full sm:w-auto"
            >
              <a 
                href="https://somos.globo.com/movimento-led-luz-na-educacao/desafio-led/noticia/desafio-led-globo-2026-recebe-mais-de-3820-inscricoes-e-avanca-para-a-proxima-fase.ghtml" 
                target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 text-[16px] font-extrabold text-[#0A1128] border-2 border-[#0A1128] hover:bg-[#0A1128] hover:text-[#FDFBF7] px-8 py-4 rounded-full transition-colors whitespace-nowrap w-full"
              >
                Fase Anterior (Top 80) <ExternalLink size={18} strokeWidth={3} />
              </a>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}