
import { useEffect, useRef } from 'react';
import {
  Calculator,
  FileText,
  Briefcase,
  Users,
  Building,
  Scale,
  ChartLine,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Serviços conforme texto enviado
const services = [
  {
    title: "Contabilidade Completa",
    description:
      "Nossos serviços contábeis são adaptados às necessidades específicas da sua empresa, garantindo conformidade legal, precisão e transparência.",
    icon: Calculator,
    features: [
      "Lançamentos e conciliações contábeis",
      "Elaboração de balancetes mensais",
      "Demonstrações contábeis anuais",
      "Balanço patrimonial",
      "Demonstração de resultado do exercício",
      "Análise de demonstrações financeiras",
      "Controle de ativos e depreciações",
      "Gestão de contas a pagar e receber"
    ],
    delay: 0
  },
  {
    title: "Serviços Fiscais",
    description:
      "Nossa equipe fiscal mantém sua empresa em conformidade com as obrigações tributárias, evitando penalidades e identificando oportunidades de economia.",
    icon: FileText,
    features: [
      "Apuração e declaração de impostos",
      "Emissão e gestão de notas fiscais",
      "Obrigações acessórias (DCTF, SPED, etc.)",
      "Planejamento tributário",
      "Parcelamento de débitos fiscais",
      "Consultoria em regimes tributários",
      "Representação junto a órgãos fiscais",
      "Orientação em fiscalizações"
    ],
    delay: 100
  },
  {
    title: "Abertura de Empresas",
    description:
      "Simplificamos o processo de abertura da sua empresa, cuidando de toda a burocracia e orientando sobre a melhor estrutura para seu negócio.",
    icon: Briefcase,
    features: [
      "Elaboração de contrato social",
      "Registro na Junta Comercial",
      "Obtenção de CNPJ",
      "Inscrições municipais e estaduais",
      "Alvarás e licenças de funcionamento",
      "Cadastros em órgãos reguladores",
      "Orientação sobre regime tributário",
      "Planejamento societário e sucessório"
    ],
    delay: 200
  },
  {
    title: "Departamento Societário",
    description:
      "Cuidamos de todos os aspectos legais relacionados à estrutura societária da sua empresa, garantindo segurança jurídica e conformidade.",
    icon: Building,
    features: [
      "Alterações contratuais",
      "Atas de assembleias e reuniões",
      "Registro de filiais",
      "Transformação de tipos societários",
      "Incorporações e fusões",
      "Cisões e reorganizações societárias",
      "Encerramento de empresas",
      "Consultoria em governança corporativa"
    ],
    delay: 300
  },
  {
    title: "Departamento Pessoal",
    description:
      "Nossa equipe de departamento pessoal cuida de todos os processos relacionados aos seus colaboradores, garantindo conformidade trabalhista e previdenciária.",
    icon: Users,
    features: [
      "Folha de pagamento",
      "Admissões e demissões",
      "Férias e 13º salário",
      "Obrigações acessórias (CAGED, RAIS, etc.)",
      "Gestão de benefícios",
      "Cálculo de encargos sociais",
      "Homologações sindicais",
      "Consultoria em legislação trabalhista"
    ],
    delay: 400
  },
  {
    title: "Consultoria Tributária",
    description:
      "Oferecemos orientação estratégica para otimizar a carga tributária da sua empresa de forma legal e segura, identificando oportunidades de economia.",
    icon: Scale,
    features: [
      "Análise de regimes tributários",
      "Identificação de benefícios fiscais",
      "Recuperação de créditos tributários",
      "Planejamento para reorganizações",
      "Revisão fiscal preventiva",
      "Orientação em processos administrativos",
      "Análise de impactos de novas legislações",
      "Simulações de carga tributária"
    ],
    delay: 500
  },
  {
    title: "Gestão Financeira",
    description:
      "Auxiliamos na organização e controle das finanças da sua empresa, oferecendo insights valiosos para decisões estratégicas e crescimento sustentável.",
    icon: ChartLine,
    features: [
      "Controle de fluxo de caixa",
      "Análise de viabilidade de investimentos",
      "Orçamento empresarial",
      "Gestão de custos",
      "Indicadores financeiros",
      "Projeções financeiras",
      "Relatórios gerenciais",
      "Consultoria para captação de recursos"
    ],
    delay: 600
  },
  {
    title: "Contabilidade Consultiva",
    description:
      "Vamos além dos números, oferecendo análises e insights estratégicos que ajudam a impulsionar o crescimento e o sucesso do seu negócio.",
    icon: BookOpen,
    features: [
      "Análise de desempenho financeiro",
      "Identificação de tendências e oportunidades",
      "Apoio na tomada de decisões estratégicas",
      "Avaliação de investimentos",
      "Análise de viabilidade de novos negócios",
      "Estudos de precificação",
      "Gestão de resultados",
      "Consultoria para expansão e crescimento"
    ],
    delay: 700
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          const cards = document.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fadeIn');
              card.classList.remove('opacity-0');
            }, index * 100);
          });
        }
      },
      {
        threshold: 0.1
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50" id="services">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-left max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-100 text-primary-700 mb-3">
            Nossos Serviços
          </span>
          <h2 className="heading-lg mb-4">
            Serviços contábeis <span className="text-gradient">completos</span> para o seu negócio
          </h2>
          <p className="subtitle">
            Oferecemos soluções contábeis personalizadas para empresas de todos os portes,
            com foco em qualidade, eficiência e atendimento humanizado.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "service-card w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] p-6 rounded-xl transition-all duration-300",
                "bg-white border border-primary-100 hover:border-primary-300",
                "hover:shadow-md hover:-translate-y-1 flex flex-col items-start opacity-0"
              )}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-left">{service.description}</p>
              <ul className="mb-2 list-disc pl-5 text-gray-700 text-sm text-left">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/services" className="mt-auto">
                <Button variant="link" className="p-0 h-auto text-primary-600 hover:text-primary-700 text-left">
                  Saiba mais
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-left mt-8">
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full">
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
