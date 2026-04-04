import React from 'react';

import { BookOpen, Users, BarChart3, Quote, Award, ExternalLink } from 'lucide-react';

import Accordion from '../components/Accordion';



export default function Conceito() {

  const faqItems = [

    {

      question: "O que dizem os dados sobre a evasão escolar e como o Hub resolve isso?",

      answer: "Segundo o IBGE (Pesquisa Nacional por Amostra de Domicílios Contínua - PNAD), a \"necessidade de trabalhar\" e o \"desinteresse\" são os principais motivos para o abandono escolar no Brasil. O Hub de Micro-Renda ataca exatamente esses dois pontos: combate a necessidade de trabalhar fora oferecendo geração de renda dentro da escola, e combate o desinteresse conectando as matérias escolares à prática real de mercado. (https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/28286-necessidade-de-trabalhar-e-desinteresse-sao-principais-motivos-para-abandono-escolar)"

    },

    {

      question: "Por que se voluntariar no Hub?",

      answer: "Voluntariar-se é a chance de reter talentos e transformar realidades. O voluntário atua como mentor, ensinando tarefas práticas para que os alunos se tornem ativos produtivos, mesmo antes de terem idade ou recursos para um curso técnico formal. É preferível garantir que o jovem esteja dentro da escola, ganhando seu dinheiro de forma lícita, do que trabalhando em subempregos sem estudar — o que parece um \"adianto\" inicial, mas destrói seu futuro —, ou pior, vulnerável ao aliciamento pelo crime organizado nas ruas. No futuro, esse mesmo jovem poderá se tornar um Jovem Aprendiz na própria empresa do voluntário."

    },

    {

      question: "Como os alunos irão gerar renda na prática?",

      answer: "Por meio de oficinas ministradas pelos voluntários, os alunos aprenderão ofícios e realizarão tarefas simples, passando a vender seus serviços a preços populares para a comunidade (como pintar unhas, aplicar películas de celular, pequenos reparos, etc.). Essa é uma visão de longo prazo: os alunos participam das oficinas nos finais de semana e oferecem seus serviços no contraturno escolar, criando um ciclo sustentável de micro-renda comunitária."

    },

    {

      question: "Como os alunos aplicam as matérias da escola no cotidiano do projeto?",

      answer: "O Hub transforma o currículo escolar em prática de negócios. Os alunos utilizam a Matemática para calcular lucros, custos de materiais e precificação dos seus serviços a preços populares; usam a Informática para gerenciar planilhas de clientes e fluxo de caixa; e aplicam conceitos de Português e Artes na criação de campanhas de marketing locais para divulgar seus serviços. A escola ganha um sentido prático e imediato."

    }

  ];



  return (

    <div className="w-full bg-[#F8F9FA] pb-32">

      {/* Editorial Header */}

      <header className="bg-[#F6F4EB] pt-24 pb-20 px-6 lg:px-8 border-b border-stone-200">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-[#C84B31] font-bold uppercase tracking-widest text-sm mb-6 block">Nosso Porquê</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-stone-900 leading-[1.1] mb-8">

            A raiz do abandono, <br className="hidden sm:block" />

            e a semente da solução.

          </h1>

          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium">

            Entenda como o Hub de Micro-Renda conecta dados reais a uma transformação tangível dentro das escolas públicas brasileiras.

          </p>

        </div>

      </header>



      {/* Banner LED */}

      <section className="px-6 pt-12 max-w-4xl mx-auto">

        <a

          href="https://somos.globo.com/movimento-led/desafio-led/noticia/desafio-led-globo-2026-divulga-os-40-projetos-selecionados-para-a-proxima-etapa.ghtml"

          target="_blank"

          rel="noopener noreferrer"

          aria-label="Ver projeto no Desafio LED Globo 2026 — abre em nova aba"

          className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-stone-900 text-white rounded-2xl px-8 py-6 hover:bg-[#1a1714] transition-colors duration-300"

        >

          <div className="flex items-center gap-4">

            <Award size={28} strokeWidth={1.5} className="text-[#C84B31] shrink-0" />

            <div>

              <p className="text-xs font-bold uppercase tracking-widest text-[#C84B31] mb-1">

                Desafio LED Globo 2026

              </p>

              <p className="font-serif text-lg font-bold text-white leading-tight">

                Selecionado — <span className="text-[#C84B31]">Top 40</span> projetos de impacto social do Brasil

              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 group-hover:text-white transition-colors shrink-0">

            Ver publicação oficial

            <ExternalLink size={15} strokeWidth={2} />

          </div>

        </a>

      </section>



      {/* Main Content (IBGE Data) */}

      <section className="px-6 py-20 lg:py-24 max-w-4xl mx-auto">

        <div className="bg-white border border-stone-200 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm mb-16 relative overflow-hidden">

          <div className="absolute top-0 right-0 p-8 text-stone-100/50">

            <BarChart3 size={200} strokeWidth={1} />

          </div>



          <div className="relative z-10">

            <div className="flex items-center gap-4 text-[#C84B31] mb-8">

              <BarChart3 size={36} strokeWidth={2.5} />

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">

                A Realidade em Números

              </h2>

            </div>



            <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-medium mb-10">

              De acordo com dados concretos do IBGE, a <strong className="text-stone-900 border-b-2 border-[#C84B31]">necessidade de trabalhar</strong> e o <strong className="text-stone-900 border-b-2 border-[#C84B31]">desinteresse</strong> são apontados como os dois principais motivos para o abandono escolar. Esses números revelam que não basta insistir; é preciso ressignificar o espaço escolar.

            </p>



            <div className="bg-[#F6F4EB] p-8 md:p-10 rounded-3xl relative border border-stone-100">

              <Quote size={40} className="text-[#2D6A4F]/20 absolute top-6 left-6" />

              <p className="text-xl md:text-2xl font-serif italic text-stone-800 leading-relaxed relative z-10 pl-8">

                "Enquanto o mundo do trabalho gritar mais alto, a sala de aula sempre perderá." <br />

                <span className="block mt-4 text-base font-sans font-semibold text-[#2D6A4F] not-italic">— A premissa que nos move.</span>

              </p>

            </div>

          </div>

        </div>



        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* Card: Contra o Desinteresse */}

          <div className="bg-white border border-stone-200 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">

            <div className="w-16 h-16 bg-[#2D6A4F]/10 rounded-full flex items-center justify-center text-[#2D6A4F] mb-6">

              <BookOpen size={28} strokeWidth={2.5} />

            </div>

            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Contra o Desinteresse</h3>

            <p className="text-stone-600 leading-relaxed font-medium text-lg">

              Ao gerenciar o HUB, o aluno aprende precificação, margem de lucro e marketing, transformando matemática, português e informática em ferramentas de sobrevivência e protagonismo.

            </p>

          </div>



          {/* Card: Uma Teia Comunitária */}

          <div className="bg-white border border-stone-200 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">

            <div className="w-16 h-16 bg-[#C84B31]/10 rounded-full flex items-center justify-center text-[#C84B31] mb-6">

              <Users size={28} strokeWidth={2.5} />

            </div>

            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Uma Teia Comunitária</h3>

            <p className="text-stone-600 leading-relaxed font-medium text-lg">

              Mentoria do bairro para o aluno, e serviço do aluno para o bairro. O contraturno ganha propósito e todos saem ganhando através da micro-renda comunitária lícita.

            </p>

          </div>

        </div>

      </section>



      {/* FAQ Accordion Section */}

      <section className="bg-white py-24 px-6 lg:px-8 border-t border-stone-200">

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-stone-900 mb-6">

              Perguntas Frequentes

            </h2>

            <p className="text-lg text-stone-600 font-medium max-w-2xl mx-auto">

              Tudo o que você precisa saber sobre a implementação e o impacto sustentável do Hub.

            </p>

          </div>



          <Accordion items={faqItems} />



        </div>

      </section>

    </div>

  );

}