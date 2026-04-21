import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Projeto from './pages/Projeto';
import Gestores from './pages/Gestores';
import Voluntarios from './pages/Voluntarios';
import FAQ from './pages/FAQ';
import Idealizador from './pages/Idealizador';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'O Projeto', path: '/projeto' },
    { label: 'Gestores', path: '/gestores' },
    { label: 'Voluntários', path: '/voluntarios' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Idealizador', path: '/idealizador' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b flex justify-center border-[#0A1128]/10">
      <div className="w-full max-w-7xl px-6 md:px-10 h-[80px] grid grid-cols-12 items-center gap-4">

        <div className="col-span-8 md:col-span-2 lg:col-span-3 flex items-center">
          <Link to="/" className="text-[22px] font-extrabold tracking-tight text-[#0A1128]">
            EducaHUB
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex col-span-10 lg:col-span-9 justify-end items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[14px] lg:text-[15px] font-extrabold tracking-tight transition-colors whitespace-nowrap ${
                location.pathname === link.path ? 'text-[#C6EDDF] bg-[#0A1128] px-3 py-1 rounded-sm' : 'text-[#0A1128]/70 hover:text-[#0A1128]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 pl-4 lg:pl-6 border-l border-[#0A1128]/20">
            <span className="text-[12px] font-bold text-[#0A1128]/60 hidden xl:block uppercase tracking-widest">
              Já é parceiro?
            </span>
            <a 
              href="https://educahub-portal.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0A1128] text-[#C6EDDF] px-5 py-2 rounded-full text-[13px] lg:text-[14px] font-extrabold hover:bg-[#C6EDDF] hover:text-[#0A1128] transition-colors whitespace-nowrap flex items-center gap-2"
            >
              Acessar Portal <ExternalLink size={16} strokeWidth={2.5} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden col-span-4 justify-end">
          <button 
            className="text-[#0A1128]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#FDFBF7] border-b border-[#0A1128]/10 px-6 py-6 flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[18px] font-extrabold text-[#0A1128] tracking-tight"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-4 border-t border-[#0A1128]/10 mt-2">
            <span className="text-[13px] font-bold text-[#0A1128]/50 uppercase tracking-widest text-center">
              Já é um parceiro EducaHUB?
            </span>
            <a 
              href="https://educahub-portal.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0A1128] text-[#C6EDDF] px-6 py-4 rounded-full text-[16px] font-extrabold hover:bg-[#C6EDDF] hover:text-[#0A1128] transition-colors flex items-center justify-center gap-2 w-full shadow-lg"
            >
              Acessar Portal <ExternalLink size={20} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'O Projeto', path: '/projeto' },
    { label: 'Gestores', path: '/gestores' },
    { label: 'Voluntários', path: '/voluntarios' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Idealizador', path: '/idealizador' },
  ];

  return (
    <footer className="w-full py-16 bg-[#0A1128] flex justify-center border-t-[6px] border-[#C6EDDF]">
      <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">

        <div className="col-span-1 md:col-span-4 flex flex-col gap-2">
          <p className="text-[20px] font-extrabold text-[#FDFBF7] tracking-tight">EducaHUB</p>
          <p className="text-[15px] text-[#FDFBF7]/70 font-medium max-w-sm leading-relaxed">
            Hub de Micro-Renda Escolar. Reduzindo evasão através de pertencimento econômico.
          </p>
        </div>
        <div className="col-span-1 md:col-span-4 flex flex-col gap-4 md:pl-8">
          <p className="text-[13px] text-[#C6EDDF]/50 font-extrabold uppercase tracking-widest">
            Mapa do Site
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-[15px] font-bold text-[#FDFBF7] hover:text-[#C6EDDF] transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="col-span-1 md:col-span-4 flex flex-col gap-4 md:items-end">
          <p className="text-[13px] text-[#C6EDDF]/50 font-extrabold uppercase tracking-widest w-full md:text-right">
            Reconhecimento
          </p>
          <div className="flex flex-col gap-3 w-full md:items-end">
            <a 
              href="https://somos.globo.com/movimento-led/desafio-led/noticia/desafio-led-globo-2026-divulga-os-20-projetos-selecionados-para-a-proxima-etapa.ghtml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[15px] font-extrabold text-[#FDFBF7] hover:text-[#C6EDDF] transition-colors w-fit md:text-right flex items-center gap-2"
            >
              Top 20 Desafio LED Globo 2026
            </a>
            <a 
              href="https://somos.globo.com/movimento-led/desafio-led/noticia/desafio-led-globo-2026-divulga-os-40-projetos-selecionados-para-a-proxima-etapa.ghtml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[14px] font-bold text-[#FDFBF7]/70 hover:text-[#C6EDDF] transition-colors w-fit md:text-right"
            >
              Fase Anterior (Top 40)
            </a>
            <a 
              href="https://somos.globo.com/movimento-led-luz-na-educacao/desafio-led/noticia/desafio-led-globo-2026-recebe-mais-de-3820-inscricoes-e-avanca-para-a-proxima-fase.ghtml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[14px] font-bold text-[#FDFBF7]/70 hover:text-[#C6EDDF] transition-colors w-fit md:text-right"
            >
              Fase Inicial (Top 80)
            </a>
          </div>
        </div>

      </div> 
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-[#C6EDDF] selection:text-[#0A1128]">
        <Header />
        <main className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/gestores" element={<Gestores />} />
            <Route path="/voluntarios" element={<Voluntarios />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/idealizador" element={<Idealizador />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}