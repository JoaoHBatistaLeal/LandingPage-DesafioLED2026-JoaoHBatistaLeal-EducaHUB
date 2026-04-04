export default function Voluntarios() {
  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-80px)] items-center py-20 bg-[#FDFBF7]">
      <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Side */}
        <div className="col-span-12 lg:col-span-5 lg:pr-10">
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-[#0A1128] leading-[1.05] tracking-tight">
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
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 lg:border-l-2 border-[#0A1128]/10 lg:pl-10 h-full justify-center">
          <p className="text-[22px] md:text-[32px] text-[#0A1128] font-extrabold leading-[1.4] tracking-tight">
            Qualquer empreendedor local pode participar com sessões de <span className="bg-[#0A1128] text-[#C6EDDF] px-2 py-1 mx-1">2 a 4 horas.</span> Ensina algo rápido que não compromete sua receita.
          </p>
          <p className="text-[18px] md:text-[22px] text-[#0A1128]/80 font-bold leading-[1.6]">
            Garante que o jovem permaneça na escola e crie renda lícita, afastando do crime organizado. Forma um futuro talento que poderá ser contratado como Jovem Aprendiz.
          </p>
        </div>
        
      </div>
    </div>
  );
}
