import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logo from '@/assets/logo-comando.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-800 pt-12 md:pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="Comando Contabilidade" 
                className="h-16"
              />
            </Link>
            <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base">
              Soluções contábeis inteligentes para empresas de todos os portes. Oferecemos serviços de contabilidade digital eficiente e moderna.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/comandoempreendimentos" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-500 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://taggo.one/comandoempreendimentos" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-500 transition-colors" 
                aria-label="Cartão Digital"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 15H11" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 15H17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-primary-700">Links Rápidos</h3>
            <ul className="space-y-2 grid grid-cols-2 md:grid-cols-1">
              {[
                { label: "Início", to: "/" },
                { label: "Sobre Nós", to: "/about" },
                { label: "Serviços", to: "/services" },
                { label: "Contato", to: "/contact" }
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link 
                    to={to} 
                    className="text-gray-700 hover:text-primary-600 transition-colors flex items-center text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 inline-block"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-primary-700">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700 text-sm md:text-base">(81) 98854-4215</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700 text-sm md:text-base break-all">contato.comandoempreendimentos@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700 text-sm md:text-base">Rua Doutor Telesphoro Fragoso, 791</p>
                  <p className="text-gray-700 text-sm md:text-base">San Martin, Recife-PE, CEP: 50.761-030</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Comando Contabilidade. Todos os direitos reservados. CNPJ: 60.794.087/0001-48
          </p>
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="bg-primary-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-white"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
