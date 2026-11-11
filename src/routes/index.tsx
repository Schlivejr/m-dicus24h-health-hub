import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, Ambulance, ArrowRight, CalendarDays, ChevronDown, Clock3,
  HeartHandshake, MapPin, Menu, MonitorSmartphone, Phone, ShieldCheck,
  Stethoscope, Users, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, whatsapp as defaultWhatsapp } from "@/lib/medicus-content";
import logoSrc from "@/assets/medicus24h-logo.png";
import heroSrc from "@/assets/banner1.jpg";
import protectedAreaSrc from "@/assets/area-protegida.jpg";
import ambulanceSrc from "@/assets/ambulancia.jpg";
import careSrc from "@/assets/assistencia-domiciliar.jpg";
import examsSrc from "@/assets/exames-domicilio.jpg";

const whatsapp = "https://wa.me/5583994064312";
const phone = "+558332400425";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Médicus24h | Soluções completas em Saúde" },
      { name: "description", content: "Atendimento médico, remoções, telemedicina e Área Protegida para pessoas e empresas em João Pessoa e região." },
      { property: "og:title", content: "Médicus24h | Soluções em Saúde" },
      { property: "og:description", content: "Soluções completas em saúde para pessoas e empresas." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="bg-[#00545a] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-7 gap-y-1 px-4 py-2 text-[11px] font-semibold sm:justify-between sm:px-6 lg:px-12 lg:text-xs">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2"><Phone className="size-3.5" />(83) 3240-0425</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Phone className="size-3.5" />(83) 99406-4312</a>
            <span className="inline-flex items-center gap-2"><MapPin className="size-3.5" />João Pessoa – PB e Região</span>
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <a href="https://www.instagram.com/medicus24h_/" target="_blank" rel="noreferrer">◎ medicus24h_</a>
            <span>f&nbsp; Médicus 24 horas</span>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 shadow-sm">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12">
          <Link to="/" aria-label="Médicus24h - Início" className="shrink-0">
            <img src={logoSrc} alt="Médicus24h – Soluções em Saúde" className="h-14 w-auto object-contain sm:h-[68px]" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            <Link to="/" className="border-b-2 border-[#e50916] px-1 py-2 text-sm font-bold text-[#d90816]">Home</Link>
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button type="button" onClick={() => setServicesOpen(v => !v)} aria-expanded={servicesOpen} className="inline-flex items-center gap-1 py-2 text-sm font-semibold text-slate-800 hover:text-[#007b80]">Serviços <ChevronDown className="size-4" /></button>
              {servicesOpen && <div className="absolute left-0 top-full z-50 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
                {services.map(([, title, , href]) => <Link key={title} to={href} onClick={() => setServicesOpen(false)} className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#007b80]">{title}</Link>)}
              </div>}
            </div>
            <Link to="/servicos/area-protegida" className="py-2 text-sm font-semibold text-slate-800 hover:text-[#007b80]">Área Protegida</Link>
            <Link to="/sobre" className="py-2 text-sm font-semibold text-slate-800 hover:text-[#007b80]">Sobre</Link>
            <Link to="/contato" className="py-2 text-sm font-semibold text-slate-800 hover:text-[#007b80]">Contato</Link>
          </nav>
          <div className="hidden xl:block">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#e50916] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#c9000c]"><Phone className="size-4" />Solicitar Orçamento</a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <a href={whatsapp} aria-label="Solicitar orçamento pelo WhatsApp" className="rounded-lg bg-[#e50916] p-2.5 text-white"><Phone className="size-5" /></a>
            <button type="button" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="rounded-lg border border-slate-200 p-2.5 text-slate-800">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
          </div>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-slate-100 bg-white px-5 py-4 lg:hidden" aria-label="Menu móvel">
          <Link to="/" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-bold text-[#d90816]">Home</Link>
          <Link to="/servicos" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-semibold">Serviços</Link>
          <Link to="/servicos/area-protegida" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-semibold">Área Protegida</Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-semibold">Sobre</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-semibold">Contato</Link>
          <a href={whatsapp} className="mt-2 rounded-lg bg-[#e50916] px-4 py-3 text-center font-bold text-white">Solicitar Orçamento</a>
        </nav>}
      </div>
    </header>
  );
}

const serviceCards = [
  { title: "Área Protegida", text: "Assistência médica contínua para empresas, escolas, condomínios e eventos.", image: protectedAreaSrc, href: "/servicos/area-protegida", Icon: ShieldCheck },
  { title: "Remoções Médicas", text: "Transporte seguro e humanizado, com equipe e equipamentos adequados.", image: ambulanceSrc, href: "/servicos/remocao-medica", Icon: Ambulance },
  { title: "Telemedicina", text: "Atendimento médico online, com praticidade, conforto e segurança.", image: careSrc, href: "/telemedicina", Icon: MonitorSmartphone },
  { title: "Atendimento Médico", text: "Consultas e acompanhamento em diversas especialidades médicas.", image: examsSrc, href: "/servicos", Icon: Stethoscope },
];

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#102b3b]">
      <HomeHeader />
      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-[#eaf7f8]">
          <div className="mx-auto grid min-h-[420px] max-w-[1440px] grid-cols-1 lg:min-h-[420px] lg:grid-cols-[44%_56%]">
            <div className="relative z-20 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
              <h1 className="max-w-[570px] text-[2.35rem] font-extrabold leading-[1.04] tracking-tight text-[#00545a] sm:text-5xl xl:text-[3.5rem]">Soluções completas em saúde para <span className="text-[#e50916]">pessoas e empresas</span></h1>
              <p className="mt-5 max-w-[510px] text-base leading-6 text-[#172d3c] sm:text-lg">Atendimento médico, remoções, telemedicina e Área Protegida, com agilidade, segurança e equipe qualificada.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[[ShieldCheck,"Segurança e Agilidade"],[Users,"Equipe Especializada"],[Clock3,"Suporte Contínuo"]].map(([Icon,label]) => <div key={label as string} className="flex items-center gap-2 rounded-xl border border-[#d9e7e9] bg-white/90 px-3 py-2.5 text-xs font-bold text-[#00545a] shadow-sm"><Icon className="size-7 shrink-0 text-[#00858a]" /><span className="max-w-[92px] leading-tight">{label as string}</span></div>)}
              </div>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#e50916] px-7 py-3.5 text-lg font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#c9000c]"><Phone className="size-6" />Fale com a nossa equipe</a>
            </div>
            <div className="relative min-h-[300px] overflow-hidden lg:min-h-[420px]">
              <div className="absolute -left-16 top-0 z-10 h-full w-36 -skew-x-[28deg] bg-[#e50916] sm:-left-20 sm:w-44" />
              <img src={heroSrc} alt="Profissional da Médicus24h com equipe e ambulância em atendimento" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
            </div>
          </div>
        </section>

        <section id="servicos" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#00545a] sm:text-4xl">Nossas Soluções em Saúde</h2>
              <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-[#e50916]" />
              <p className="mt-3 text-sm text-slate-700 sm:text-base">Estrutura, tecnologia e equipe preparada para um atendimento de excelência.</p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map(({title,text,image,href,Icon}) => <article key={title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(0,65,75,.09)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Link to={href} className="relative block aspect-[16/9] overflow-hidden">
                  <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-[-18px] left-5 grid size-12 place-items-center rounded-full border-2 border-white bg-[#e50916] text-white shadow-md"><Icon className="size-6" /></span>
                </Link>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-6">
                  <h3 className="text-xl font-extrabold text-[#102b3b]">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-5 text-slate-700">{text}</p>
                  <Link to={href} className="mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#e50916] px-6 py-2 text-sm font-extrabold text-[#c9000c] transition hover:bg-[#e50916] hover:text-white">Saiba mais <ArrowRight className="size-4" /></Link>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#00545a] text-white">
          <div className="grid min-h-[190px] lg:grid-cols-[32%_68%]">
            <div className="relative min-h-[170px] overflow-hidden lg:min-h-[190px]">
              <img src={careSrc} alt="Profissional de saúde da equipe Médicus24h" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-y-0 right-[-25px] w-12 skew-x-[-25deg] bg-[#e50916]" />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-12">
              <h2 className="text-center text-2xl font-extrabold sm:text-3xl lg:text-left lg:text-4xl">Por que escolher a Médicus24h?</h2>
              <div className="mt-6 grid grid-cols-2 gap-y-5 sm:grid-cols-4">
                {[[HeartHandshake,"Atendimento Humanizado"],[Clock3,"Agilidade na Resposta"],[Activity,"Qualidade e Segurança"],[MapPin,"Cobertura em João Pessoa e Região"]].map(([Icon,label],i) => <div key={label as string} className={`flex flex-col items-center justify-center px-3 text-center ${i%2===1?"sm:border-l sm:border-white/50":""} ${i>1?"sm:border-l sm:border-white/50":""}`}><Icon className="size-8 sm:size-9" /><p className="mt-2 max-w-[150px] text-sm font-bold leading-tight sm:text-base">{label as string}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-9 sm:px-6 sm:py-12 lg:px-10">
          <div className="mx-auto grid max-w-[1320px] items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="px-1 sm:px-3">
              <h2 className="text-3xl font-extrabold text-[#00545a] sm:text-4xl">A Médicus24h</h2>
              <span className="mt-3 block h-1 w-16 rounded-full bg-[#e50916]" />
              <p className="mt-4 max-w-xl text-[15px] leading-6 text-slate-800">Somos uma empresa de soluções em saúde, com foco em atendimento médico de qualidade, segurança e agilidade. Atuamos na assistência à saúde de pessoas e empresas, com uma estrutura moderna, equipe qualificada e compromisso com a vida.</p>
              <Link to="/sobre" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e50916] px-7 py-2.5 text-sm font-extrabold text-[#c9000c] transition hover:bg-[#e50916] hover:text-white">Conheça nossa história <ArrowRight className="size-4" /></Link>
            </div>
            <div className="overflow-hidden rounded-[28px]">
              <img src={ambulanceSrc} alt="Veículo de atendimento da Médicus24h" loading="lazy" className="aspect-[16/7] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#e50916] px-4 py-6 text-white sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-4"><CalendarDays className="size-10 shrink-0 sm:size-12" /><h2 className="max-w-xl text-xl font-extrabold leading-tight sm:text-2xl">Precisa de uma solução em saúde para sua empresa ou evento?</h2></div>
            <div className="flex flex-col items-center gap-4 sm:flex-row"><p className="max-w-[230px] text-sm leading-5">Fale com a nossa equipe e receba uma proposta personalizada.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-extrabold text-[#c9000c] shadow-sm transition hover:bg-slate-100"><Phone className="size-5" />Solicitar Orçamento</a></div>
          </div>
        </section>
      </main>
      <footer className="bg-[#00464c] px-4 py-6 text-center text-sm text-white/80">
        <p>© {new Date().getFullYear()} Médicus24h – Soluções em Saúde. Todos os direitos reservados.</p>
      </footer>
      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale com a Médicus24h pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#e50916] text-white shadow-xl transition hover:scale-105"><Phone className="size-6" /></a>
    </div>
  );
}
