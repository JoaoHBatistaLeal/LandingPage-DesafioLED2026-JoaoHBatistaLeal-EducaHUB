import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'Para quem é o hub de micro renda?', a: 'Alunos matriculados do 9º ao 3º ano do Ensino Médio, não cursando ensino técnico.' },
  { q: 'Quem pode se voluntariar?', a: 'Empreendedores locais, ensinando ofícios rápidos em sessões de 2 a 4 horas.' },
  { q: 'Como funciona a retenção?', a: 'Regra de 85% como blindagem, não punição. Há flexibilidade empática para imprevistos documentados (saúde, família). O foco é a retenção como acesso, não exclusão.' },
  { q: 'Como adotar o programa?', a: 'Diretamente com a gestão escolar. Fornecemos os manuais sem custo inicial.' },
  { q: 'Os custos são elevados?', a: 'Não. Aproveita-se a infraestrutura ociosa, exigindo apenas kits básicos.' },
  { q: 'É caro para manter?', a: 'Modelo autossustentável. Fundo de reinvestimento mantido por uma pequena taxa das operações repõe os materiais.' },
  { q: 'Como o aluno ganha renda?', a: 'Recebe a porcentagem do lucro de seus serviços. Torna-se produtivo e cria portfólio para Jovem Aprendiz.' },
  { q: 'A quem os serviços são oferecidos?', a: 'Comunidade, a preços populares.' },
];

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="pb-4 mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-8 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-[20px] md:text-[24px] font-extrabold text-[#0A1128] pr-8 tracking-tight">
          {question}
        </span>
        <span className={`text-[#0A1128] font-bold text-[32px] leading-none shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <p className="text-[18px] md:text-[20px] text-[#0A1128]/80 leading-[1.6] font-bold max-w-2xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex justify-center w-full pb-32 pt-20 bg-[#FDFBF7] min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Left Side: Title anchored */}
        <div className="col-span-12 lg:col-span-4 sticky top-32">
          <h1 className="text-[40px] md:text-[72px] font-extrabold text-[#0A1128] leading-[1] tracking-tight">
            Perguntas<br /> <span className="text-[#0A1128]/30">Frequentes</span>
          </h1>
        </div>

        {/* Right Side: FAQ list occupying wider space */}
        <div className="col-span-12 lg:col-span-8 mt-4 lg:mt-0 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
