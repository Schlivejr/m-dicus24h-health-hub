import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Footer } from "@/components/medicus-shell";
import { ArrowRight, Ambulance, CalendarDays, ChevronDown, Clock3, Facebook, HeartHandshake, Instagram, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Stethoscope, Users, X, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@/assets/medicus24h-logo.png";
import heroSrc from "@/assets/banner1.jpg";
import ambulanceSrc from "@/assets/ambulancia.jpg";
import careSrc from "@/assets/assistencia-domiciliar.jpg";
import protectedAreaSrc from "@/assets/area-protegida.jpg";
import examsSrc from "@/assets/exames-domicilio.jpg";

const logo = logoSrc;
const hero = heroSrc;
const ambulance = ambulanceSrc;
const care = careSrc;
const protectedArea = protectedAreaSrc;
const exams = examsSrc;
const whatsapp = "https://wa.me/5583994064312";
const phone = "tel:+558332400425";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Médicus24h | Soluções completas em Saúde" },
      { name: "description", content: "Soluções em saúde para pessoas e empresas: Área Protegida, remoções médicas, telemedicina e atendimento médico em João Pessoa e região." },
      { property: "og:title", content: "Médicus24h | Soluções em Saúde" },
      { property: "og:description", content: "Atendimento médico, remoções, telemedicina e Área Protegida com agilidade, segurança e equipe qualificada." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const navItems = [
  ["Home", "/"],
  ["Serviços", "/servicos"],
  ["Área Protegida", "/servicos/area-protegida"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="hidden bg-brand-deep text-white sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs font-semibold lg:px-8">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <a href={phone} className="inline-flex items-center gap-2"><Phone className="size-3.5" />(83) 3240-0425</a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><MessageCircle className="size-3.5" />(83) 99406-4312</a>
          <span className="inline-flex items-center gap-2"><MapPin className="size-3.5" />João Pessoa – PB e Região</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/medicus24h_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Instagram className="size-4" />medicus24h_</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Facebook className="size-4" />Médicus 24 horas</a>
        </div>
      </div>
    </div>
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 lg:px-8">
        <Link to="/" aria-label="Médicus24h - Início" className="shrink-0"><img src={logo} alt="Médicus24h – Soluções em Saúde" className="h-14 w-auto object-contain sm:h-[68px]" /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, href], index) => <Link key={href} to={href} className={`text-sm font-bold transition-colors hover:text-brand-coral ${index === 0 ? "border-b-2 border-brand-coral pb-2 text-brand-coral" : "text-foreground"}`}>{label}{index === 1 && <ChevronDown className="ml-1 inline size-3.5" />}</Link>)}
        </nav>
        <div className="hidden lg:block"><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-brand-coral px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"><MessageCircle className="size-5" />Solicitar Orçamento</a></div>
        <div className="flex items-center gap-2 lg:hidden">
          <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp" className="grid size-10 place-items-center rounded-full bg-brand-coral text-white"><MessageCircle className="size-5" /></a>
          <Button variant="ghost" size="icon" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav className="grid gap-1 border-t border-border bg-white px-5 py-3 lg:hidden" aria-label="Menu móvel">{navItems.map(([label, href]) => <Link key={href} to={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold hover:bg-brand-soft">{label}</Link>)}<a href={whatsapp} target="_blank" rel="noreferrer" className="mt-2 rounded-lg bg-brand-coral px-4 py-3 text-center font-bold text-white">Solicitar Orçamento</a></nav>}
    </header>
  </>;
}

function HomePage() {
  const cards = [
    { title: "Área Protegida", text: "Assistência médica contínua para empresas, escolas, condomínios e eventos.", image: protectedArea, icon: ShieldCheck, href: "/servicos/area-protegida" },
    { title: "Remoções Médicas", text: "Transporte seguro e humanizado, com equipe e equipamentos adequados.", image: ambulance, icon: Ambulance, href: "/servicos/remocao-medica" },
    { title: "Telemedicina", text: "Atendimento médico online, com praticidade, conforto e segurança.", image: care, icon: MonitorSmartphone, href: "/telemedicina" },
    { title: "Atendimento Médico", text: "Consultas e acompanhamento em diferentes necessidades de saúde.", image: exams, icon: Stethoscope, href: "/servicos/pronto-atendimento-domiciliar" },
  ];
  return <div className="min-h-screen bg-white text-foreground">
    <SiteHeader />
    <main>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-brand-soft to-white">
        <div className="pointer-events-none absolute -left-28 top-10 size-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto grid min-h-[540px] max-w-7xl items-center gap-8 px-5 py-10 lg:grid-cols-[.94fr_1.06fr] lg:gap-5 lg:px-8 lg:py-0">
          <div className="relative z-20 py-4 lg:py-12">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-primary shadow-sm"><span className="size-2 rounded-full bg-brand-coral" />Médicus24h <span className="text-muted-foreground">|</span> Soluções em Saúde</p>
            <h1 className="max-w-[570px] text-[2.45rem] font-extrabold leading-[1.06] tracking-tight text-brand-deep sm:text-5xl xl:text-[3.55rem]">Cuidado e saúde para <span className="text-brand-coral">pessoas, empresas e eventos.</span></h1>
            <p className="mt-5 max-w-[490px] text-base leading-7 text-foreground/90 sm:text-lg">Atendimento médico, remoções, telemedicina e Área Protegida com agilidade, segurança e uma equipe preparada para cuidar de você.</p>
            <div className="mt-7 grid max-w-[490px] grid-cols-3 gap-2.5">
              {([[ShieldCheck,"Segurança","e agilidade"],[Users,"Equipe","especializada"],[Clock3,"Suporte","contínuo"]] as const).map(([Icon,line1,line2]) => <div key={line1 as string} className="flex min-h-[76px] flex-col items-center justify-center gap-1.5 rounded-2xl border border-primary/15 bg-white/90 px-2 py-3 text-center shadow-[0_5px_18px_rgba(0,75,83,.07)] sm:flex-row sm:gap-2 sm:text-left"><Icon className="size-6 shrink-0 text-primary" /><span className="text-[11px] font-extrabold leading-tight text-brand-deep sm:text-xs">{line1 as string}<br />{line2 as string}</span></div>)}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-brand-coral px-7 py-4 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(210,25,35,.22)] transition hover:-translate-y-1 hover:shadow-xl sm:text-lg"><MessageCircle className="size-6" />Fale com a nossa equipe <ArrowRight className="size-4" /></a>
              <span className="hidden text-xs font-semibold leading-5 text-muted-foreground sm:block">Atendimento em João Pessoa<br />e região</span>
            </div>
          </div>
          <div className="relative -mx-5 min-h-[330px] overflow-hidden sm:mx-0 lg:my-8 lg:min-h-[500px] lg:overflow-visible">
            <div className="absolute bottom-3 right-2 top-3 w-[88%] rounded-[42%_2rem_2rem_42%] bg-brand-coral sm:right-0 lg:bottom-0 lg:right-2 lg:top-0" />
            <div className="absolute bottom-0 right-0 top-0 w-[94%] overflow-hidden rounded-[38%_1.5rem_1.5rem_38%] border-[6px] border-white shadow-[0_22px_55px_rgba(0,65,72,.18)] sm:w-[92%] lg:w-[96%]">
              <img src={hero} alt="Profissional de saúde e equipe de atendimento móvel em cenário de assistência médica" fetchPriority="high" className="h-full min-h-[330px] w-full object-cover object-[54%_center] lg:min-h-[500px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/10 via-transparent to-brand-deep/5" />
            </div>
            <div className="absolute bottom-5 left-7 z-10 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl sm:flex lg:-left-3 lg:bottom-8"><span className="grid size-10 place-items-center rounded-full bg-brand-soft text-primary"><HeartHandshake className="size-5" /></span><span className="text-xs font-extrabold leading-4 text-brand-deep">Cuidado humanizado<br />em cada atendimento</span></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-8 max-w-2xl text-center"><h2 className="text-3xl font-extrabold text-brand-deep sm:text-4xl">Nossas Soluções em Saúde</h2><div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand-coral" /><p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">Estrutura, tecnologia e equipe preparada para um atendimento de excelência.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map(({title,text,image,icon:Icon,href}) => <article key={title} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-36 overflow-hidden"><img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute -bottom-5 left-5 grid size-12 place-items-center rounded-full border-2 border-white bg-brand-coral text-white shadow-md"><Icon className="size-6" /></span></div>
              <div className="p-5 pt-7"><h3 className="text-xl font-extrabold text-brand-deep">{title}</h3><p className="mt-2 min-h-[60px] text-sm leading-5 text-foreground">{text}</p><Link to={href} className="mt-4 inline-flex min-w-36 items-center justify-center gap-2 rounded-full border border-brand-coral px-5 py-2 text-sm font-extrabold text-brand-coral transition hover:bg-brand-coral hover:text-white">Saiba mais <ArrowRight className="size-4" /></Link></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[.65fr_1.35fr]">
          <div className="relative hidden min-h-[210px] lg:block"><img src={care} alt="Profissional de saúde da equipe Médicus24h" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" /><div className="absolute inset-0 bg-brand-deep/10" /><div className="absolute -right-5 top-0 h-full w-10 skew-x-[-18deg] bg-brand-coral" /></div>
          <div className="px-5 py-10 sm:px-8 lg:px-12">
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Por que escolher a Médicus24h?</h2>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {([[HeartHandshake,"Atendimento","Humanizado"],[Clock3,"Agilidade","na Resposta"],[ShieldCheck,"Qualidade","e Segurança"],[MapPin,"Cobertura em","João Pessoa e Região"]] as const).map(([Icon,line1,line2]) => <div key={line1 as string} className="flex flex-col items-center text-center"><Icon className="size-9" /><p className="mt-3 text-sm font-extrabold leading-5">{line1 as string}<br/>{line2 as string}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div><h2 className="text-3xl font-extrabold text-brand-deep sm:text-4xl">A Médicus24h</h2><div className="mt-3 h-1 w-16 rounded-full bg-brand-coral" /><p className="mt-4 max-w-xl text-sm leading-6 sm:text-base">Somos uma empresa de soluções em saúde, com foco em atendimento médico de qualidade, segurança e agilidade. Atuamos na assistência à saúde de pessoas e empresas, com uma estrutura moderna, equipe qualificada e compromisso com a vida.</p><Link to="/sobre" className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-coral px-6 py-3 text-sm font-extrabold text-brand-coral transition hover:bg-brand-coral hover:text-white">Conheça nossa história <ArrowRight className="size-4" /></Link></div>
          <div className="overflow-hidden rounded-[28px]"><img src={ambulance} alt="Estrutura de atendimento móvel da Médicus24h" loading="lazy" className="aspect-[16/8] w-full object-cover" /></div>
        </div>
      </section>

      <section className="bg-brand-coral px-5 py-7 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-4"><CalendarDays className="size-10 shrink-0" /><h2 className="max-w-lg text-xl font-extrabold leading-tight sm:text-2xl">Precisa de uma solução em saúde para sua empresa ou evento?</h2></div>
          <div className="flex flex-col items-center gap-4 border-white/50 sm:flex-row sm:border-l sm:pl-6"><p className="max-w-xs text-sm leading-5">Fale com a nossa equipe e receba uma proposta personalizada.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-extrabold text-brand-coral shadow-md transition hover:-translate-y-0.5"><MessageCircle className="size-5" />Solicitar Orçamento</a></div>
        </div>
      </section>
    </main>
    <Footer />
    <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale com a Médicus24h pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-brand-coral text-white shadow-xl transition hover:scale-105"><MessageCircle className="size-7" /></a>
  </div>;
}
