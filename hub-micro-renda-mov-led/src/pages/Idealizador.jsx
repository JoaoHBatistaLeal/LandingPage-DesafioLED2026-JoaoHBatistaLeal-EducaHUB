import { Github, Linkedin } from 'lucide-react';
import fotoJoao from '../assets/jhbl-pic.png';

export default function Idealizador() {
  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-80px)] items-center py-16 md:py-20 bg-[#FDFBF7] overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        
        {/* Left Side: Profile & Details */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-8 w-full">
          
          <div className="flex items-center gap-6">
            {/* Foto de Perfil */}
            <img 
              src = {fotoJoao} 
              alt="João Batista Leal" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#C6EDDF] shadow-md shrink-0"
            />
            <div className="flex flex-col">
              <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#0A1128] leading-[1.1] tracking-tight">
                João Leal
              </h1>
              <p className="text-[16px] font-bold text-[#0A1128]/70 mt-1">
                19 anos
              </p>
              
              {/* Redes Sociais */}
              <div className="flex gap-3 mt-3">
                <a 
                  href="https://github.com/JoaoHBatistaLeal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0A1128] hover:text-[#C6EDDF] transition-colors bg-[#0A1128]/5 p-2 rounded-full hover:bg-[#0A1128]"
                >
                  <Github size={20} strokeWidth={2.5} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/joão-leal-8ba769307/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0A1128] hover:text-[#C6EDDF] transition-colors bg-[#0A1128]/5 p-2 rounded-full hover:bg-[#0A1128]"
                >
                  <Linkedin size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div>
              <p className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-1">
                Atuação
              </p>
              <p className="text-[18px] md:text-[20px] font-extrabold text-[#0A1128]">Desenvolvedor de Software</p>
            </div>
            <div>
              <p className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-1">
                Formação
              </p>
              <p className="text-[18px] md:text-[20px] font-extrabold text-[#0A1128]">Análise e Desenvolvimento de Sistemas (FIAP)</p>
            </div>
            <div>
              <p className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-1">
                Base
              </p>
              <p className="text-[18px] md:text-[20px] font-extrabold text-[#0A1128]">Guarulhos, SP</p>
            </div>
          </div>
        </div>


        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center lg:border-l-4 border-[#C6EDDF] lg:pl-10 h-full mt-4 lg:mt-0 w-full">
          <p className="text-[22px] md:text-[32px] text-[#0A1128] font-extrabold leading-[1.6] md:leading-[1.5] tracking-tight w-full">
            Uso o desenvolvimento e o empreendedorismo como ferramentas para contar histórias. Gosto de criar projetos autênticos e com personalidade, buscando a mesma presença de uma arquitetura brutalista ou a intensidade de <span className="bg-[#0A1128] text-[#C6EDDF] px-2 py-0.5 md:py-1 rounded-sm box-decoration-clone">um filme do Tarantino.</span>
          </p>
          <p className="text-[18px] md:text-[22px] text-[#0A1128]/80 font-bold leading-[1.6] mt-6 w-full">
            Tudo começa na curiosidade. Sou fascinado em entender as pequenas engrenagens que ditam o tique-taque de um relógio, a engenharia milimétrica e audível de um Fórmula 1 e a lógica por trás do mercado financeiro. Para equilibrar o ritmo, alterno tudo isso com a filosofia e o foco do Zen. É exatamente esse repertório vivo e fora das telas que me define como desenvolvedor.
          </p>
        </div>

      </div>
    </div>
  );
} 