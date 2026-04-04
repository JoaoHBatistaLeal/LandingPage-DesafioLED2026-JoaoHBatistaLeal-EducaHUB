export default function Idealizador() {
  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-80px)] items-center py-20 bg-[#FDFBF7]">
      <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Hand: Identificator details */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-10">
          <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#0A1128] leading-[1.1] tracking-tight pb-8">
            Sobre o Idealizador
          </h1>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-2">
                Atuação
              </p>
              <p className="text-[20px] font-extrabold text-[#0A1128]">Desenvolvedor (19 anos)</p>
            </div>
            <div>
              <p className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-2">
                Formação
              </p>
              <p className="text-[20px] font-extrabold text-[#0A1128]">Estudante de Análise e Desenvolvimento de Sistemas (FIAP)</p>
            </div>
            <div>
              <p className="text-[13px] font-extrabold text-[#0A1128]/50 uppercase tracking-widest mb-2">
                Localidade
              </p>
              <p className="text-[20px] font-extrabold text-[#0A1128]">Residente em Guarulhos, SP</p>
            </div>
          </div>
        </div>

        {/* Right Hand: Core thesis */}
        <div className="col-span-12 lg:col-span-7 flex items-center lg:border-l-4 border-[#C6EDDF] lg:pl-10 lg:h-full mt-8 lg:mt-0">
          <p className="text-[24px] md:text-[36px] text-[#0A1128] font-extrabold leading-[1.4] tracking-tight">
            Focado em criar soluções tecnológicas e metodologias que unem visão de negócios à realidade das periferias, gerando <span className="text-[#C6EDDF] bg-[#0A1128] px-2 py-1 mx-1 rounded-sm whitespace-nowrap">impacto social prático.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
