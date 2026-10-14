import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';
import logo from '@/assets/logo-comando.png';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isMobile = useMobile();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      const sections = ['hero', 'services', 'about', 'team', 'plans', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= 300 && rect.bottom >= 300;
          if (isInViewport) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.key]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const sectionToNavMap = {
    'hero': '/',
    'services': '/services',
    'about': '/about',
    'contact': '/contact'
  };
  const getLinkColor = path => {
    return 'text-white hover:text-primary-300';
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0f1a25] ${isScrolled ? 'py-2 shadow-md' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Comando Contabilidade" className="h-14 md:h-16" />
          </Link>
          
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8 mr-6">
              <li>
                <Link to="/" className={`text-sm font-medium ${getLinkColor('/')} transition-colors duration-300`}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-sm font-medium ${getLinkColor('/about')} transition-colors duration-300`}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className={`text-sm font-medium ${getLinkColor('/services')} transition-colors duration-300`}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-sm font-medium ${getLinkColor('/contact')} transition-colors duration-300`}>
                  Contato
                </Link>
              </li>
            </ul>
            
            <div className="flex items-center space-x-3">
            </div>
          </nav>
          
          <button className="block md:hidden text-white" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && isMobile && <div className="fixed inset-0 bg-[#0f1a25] z-50 pt-16">
          <div className="container mx-auto px-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/" className="text-lg font-medium text-white block py-2">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-lg font-medium text-white block py-2">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-lg font-medium text-white block py-2">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-lg font-medium text-white block py-2">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="mt-6 flex flex-col space-y-3">
              
              
            </div>
            
            <div className="mt-6 border-t border-gray-700 pt-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Contato</h3>
              <div className="flex flex-col space-y-3">
                <a href="mailto:contato.comandoempreendimentos@gmail.com" className="flex items-center text-white">
                  <Mail className="w-4 h-4 mr-2 text-primary-500" />
                  contato.comandoempreendimentos@gmail.com
                </a>
                <a href="tel:+5581988544215" className="flex items-center text-white">
                  <Phone className="w-4 h-4 mr-2 text-primary-500" />
                  (81) 98854-4215
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Siga-nos</h3>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/comandoempreendimentos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500/20 text-primary-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://maps.app.goo.gl/suCGduezkypWQc8a8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500/20 text-primary-300">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <button onClick={toggleMenu} className="absolute top-4 right-4 p-2 rounded-full bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 transition-colors" aria-label="Fechar menu">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>}
    </header>;
};
export default Header;