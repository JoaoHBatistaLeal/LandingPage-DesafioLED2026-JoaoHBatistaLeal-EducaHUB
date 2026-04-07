import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
      {/* 12-column grid applied to header to spread items to extremes */}
      <div className="w-full max-w-7xl px-6 md:px-10 h-[80px] grid grid-cols-12 items-center gap-6">
        
        {/* Logo anchors completely to the left col-span-3 */}
        <div className="col-span-8 md:col-span-3 flex items-center">
          <Link to="/" className="text-[22px] font-extrabold tracking-tight text-[#0A1128]">
            EducaHUB
          </Link>
        </div>

        {/* Desktop Nav anchors completely to the right col-span-9 */}
        <nav className="hidden md:flex col-span-9 justify-end gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[15px] font-extrabold tracking-tight transition-colors ${
                location.pathname === link.path ? 'text-[#C6EDDF] bg-[#0A1128] px-3 py-1 rounded-sm' : 'text-[#0A1128]/70 hover:text-[#0A1128]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden col-span-4 justify-end">
          <button 
            className="text-[#0A1128]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

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
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-16 bg-[#FDFBF7] flex justify-center mt-24">
      <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <p className="text-[18px] font-extrabold text-[#0A1128] tracking-tight">EducaHUB</p>
          <p className="mt-2 text-[15px] text-[#0A1128]/70 font-medium max-w-sm">
            Hub de Micro-Renda Escolar. Reduzindo evasão através de pertencimento econômico.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right mt-8 md:mt-0">
          <p className="text-[15px] text-[#0A1128]/70 font-bold uppercase tracking-widest">Reconhecimento</p>
          <p className="mt-2 text-[15px] font-extrabold text-[#0A1128]">Top 40 Desafio LED Globo 2026</p>
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
        {/* main clear of fixed header */}
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