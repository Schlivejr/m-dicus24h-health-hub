import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Ambulance, CalendarDays, CheckCircle2, ChevronDown, Clock3, HeartHandshake, MapPin, Menu, Monitor, Phone, ShieldCheck, Stethoscope, Users, X, Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portal } from "@/lib/medicus-content";
import logoSrc from "@/assets/medicus24h-logo.png";
const heroSrc = "/images/hero-medicus24h.png";
import ambulanceSrc from "@/assets/ambulancia.jpg";
import protectedSrc from "@/assets/area-protegida.jpg";
import careSrc from "@/assets/assistencia-domiciliar.jpg";
import examsSrc from "@/assets/exames-domicilio.jpg";

const whatsapp = "https://wa.me/5583994064312";
const phone = "tel:+558332400425";
const serviceCards = [
  { title: "Área Protegida", text: "Assistência médica contínua para empresas, escolas, condomínios e eventos.", image: protectedSrc, icon: ShieldCheck, href: "/servicos/area-protegida" },
  { title: "Remoções Médicas", text: "Transporte seguro e humanizado, com equipe e equipamentos adequados.", image: ambulanceSrc, icon: Ambulance, href: "/servicos/remocao-medica" },
  { title: "Telemedicina", text: "Atendimento médico online, com praticidade, conforto e segurança.", image: careSrc, icon: Monitor, href: "/telemedicina" },
  { title: "Atendimento Médico", text: "Consultas e acompanhamento médico em diversas especialidades.", image: examsSrc, icon: Stethoscope, href: "/servicos" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Médicus24h | Soluções completas em saúde" },
      { name: "description", content: "Atendimento médico, remoções, telemedicina e Área Protegida em João Pessoa e região. Fale com a equipe Médicus24h." },
      { property: "og:title", content: "Médicus24h | Soluções completas em saúde" },
      { property: "og:description", content: "Soluções em saúde para pessoas e empresas, com agilidade, segurança e equipe qualificada." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomeHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="hidden bg-brand-deep text-white md:block">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-2 text-xs font-semibold">
        <div className="flex flex-wrap items-center gap-5"><a href={phone} className="inline-flex items-center gap-2"><Phone className="size-4"/> (83) 3240-0425</a><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Phone className="size-4"/> (83) 99406-4312</a><span className="inline-flex items-center gap-2"><MapPin className="size-4"/> João Pessoa – PB e Região</span></div>
        <div className="flex items-center gap-5"><a href="https://www.instagram.com/medicus24h_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Instagram className="size-4"/> medicus24h_</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Facebook className="size-4"/> Médicus 24 horas</a></div>
      </div>
    </div>
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <Link to="/" aria-label="Médicus24h - início"><img src={logoSrc} alt="Médicus24h — Soluções em Saúde" className="h-14 w-auto object-contain sm:h-[4.5rem]"/></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
        <Link to="/" className="border-b-2 border-brand-coral px-1 py-2 font-bold text-brand-deep">Home</Link>
        <div className="relative" onMouseEnter={()=>setServicesOpen(true)} onMouseLeave={()=>setServicesOpen(false)}>
          <button type="button" aria-expanded={servicesOpen} onClick={()=>setServicesOpen(!servicesOpen)} className="inline-flex items-center gap-1 font-semibold hover:text-primary">Serviços <ChevronDown className="size-4"/></button>
          {servicesOpen && <div className="absolute left-0 top-full z-20 mt-3 w-60 rounded-lg border bg-white p-2 shadow-xl"><Link to="/servicos" className="block rounded px-3 py-2 text-sm hover:bg-secondary">Todas as soluções</Link>{serviceCards.map(s=><Link key={s.title} to={s.href} className="block rounded px-3 py-2 text-sm hover:bg-secondary">{s.title}</Link>)}</div>}
        </div>
        <Link to="/servicos/area-protegida" className="font-semibold hover:text-primary">Área Protegida</Link>
        <Link to="/sobre" className="font-semibold hover:text-primary">Sobre</Link>
        <Link to="/contato" className="font-semibold hover:text-primary">Contato</Link>
      </nav>
      <div className="hidden xl:block"><Button asChild className="bg-brand-coral text-white hover:bg-brand-coral/90"><a href={whatsapp} target="_blank" rel="noreferrer"><Phone/> Solicitar Orçamento</a></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open?"Fechar menu":"Abrir menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
    </div>
    {open && <nav className="grid gap-1 border-t bg-white px-5 py-4 shadow-lg lg:hidden" aria-label="Menu móvel"><Link onClick={()=>setOpen(false)} to="/" className="rounded px-3 py-3 font-semibold">Home</Link><Link onClick={()=>setOpen(false)} to="/servicos" className="rounded px-3 py-3 font-semibold">Serviços</Link><Link onClick={()=>setOpen(false)} to="/servicos/area-protegida" className="rounded px-3 py-3 font-semibold">Área Protegida</Link><Link onClick={()=>setOpen(false)} to="/sobre" className="rounded px-3 py-3 font-semibold">Sobre</Link><Link onClick={()=>setOpen(false)} to="/contato" className="rounded px-3 py-3 font-semibold">Contato</Link><a href={portal} target="_blank" rel="noreferrer" className="rounded px-3 py-3 font-semibold text-primary">Portal Médicus24h</a><Button asChild className="mt-2 bg-brand-coral text-white"><a href={whatsapp} target="_blank" rel="noreferrer">Solicitar Orçamento</a></Button></nav>}
  </header>;
}

function HomePage() {
  return <div className="min-h-screen bg-white text-slate-900"><HomeHeader/><main>
    <section id="inicio" className="relative isolate overflow-hidden bg-brand-soft">
      <div className="absolute inset-0"><img src={heroSrc} alt="" fetchPriority="high" className="h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10"/></div>
      <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:grid-cols-[.95fr_1.05fr]">
        <div className="max-w-xl py-5"><p className="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-primary">Médicus24h — Soluções em Saúde</p><h1 className="text-4xl font-extrabold leading-[1.08] text-brand-deep sm:text-5xl lg:text-[3.5rem]">Soluções completas em saúde para <span className="text-brand-coral">pessoas e empresas</span></h1><p className="mt-5 max-w-lg text-lg leading-7 text-slate-700">Atendimento médico, remoções, telemedicina e Área Protegida, com agilidade, segurança e equipe qualificada.</p>
          <div className="mt-6 flex flex-wrap gap-3"><span className="flex items-center gap-2 rounded-xl border bg-white/90 px-4 py-3 text-sm font-bold shadow-sm"><ShieldCheck className="size-6 text-primary"/> Segurança<br/>e Agilidade</span><span className="flex items-center gap-2 rounded-xl border bg-white/90 px-4 py-3 text-sm font-bold shadow-sm"><Users className="size-6 text-primary"/> Equipe<br/>Especializada</span><span className="flex items-center gap-2 rounded-xl border bg-white/90 px-4 py-3 text-sm font-bold shadow-sm"><Clock3 className="size-6 text-primary"/> Suporte<br/>Contínuo</span></div>
          <Button asChild size="lg" className="mt-7 rounded-full bg-brand-coral px-8 py-6 text-lg font-extrabold text-white shadow-md hover:bg-brand-coral/90"><a href={whatsapp} target="_blank" rel="noreferrer"><Phone/> Fale com a nossa equipe</a></Button>
        </div>
        <div className="hidden min-h-[420px] lg:block" aria-hidden="true"/>
      </div>
    </section>

    <section id="servicos" className="px-4 py-16 sm:px-6 lg:py-20"><div className="mx-auto max-w-7xl"><div className="mb-9 text-center"><h2 className="text-3xl font-extrabold text-brand-deep sm:text-4xl">Nossas Soluções em Saúde</h2><div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand-coral"/><p className="mt-4 text-base text-slate-600 sm:text-lg">Estrutura, tecnologia e equipe preparada para um atendimento de excelência.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{serviceCards.map(({title,text,image,icon:Icon,href})=><article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="relative h-40 overflow-hidden"><img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/><span className="absolute -bottom-5 left-5 grid size-12 place-items-center rounded-full border-4 border-white bg-brand-coral text-white"><Icon className="size-6"/></span></div><div className="p-5 pt-7"><h3 className="text-xl font-extrabold text-brand-deep">{title}</h3><p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-700">{text}</p><Link to={href} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-coral px-4 py-2 text-sm font-extrabold text-brand-coral transition-colors hover:bg-brand-coral hover:text-white">Saiba mais <ArrowRight className="size-4"/></Link></div></article>)}</div>
    </div></section>

    <section className="overflow-hidden bg-brand-deep text-white"><div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[.65fr_1.35fr]"><div className="relative min-h-52 overflow-hidden"><img src={careSrc} alt="Profissional de saúde Médicus24h" loading="lazy" className="h-full w-full object-cover"/><div className="absolute inset-y-0 right-0 w-10 skew-x-[-15deg] bg-brand-coral translate-x-5"/></div><div className="px-6 py-12 sm:px-10 lg:py-14"><h2 className="text-3xl font-extrabold sm:text-4xl">Por que escolher a Médicus24h?</h2><div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">{([[HeartHandshake,"Atendimento","Humanizado"],[Clock3,"Agilidade","na Resposta"],[CheckCircle2,"Qualidade","e Segurança"],[MapPin,"Cobertura em","João Pessoa e Região"]] as const).map(([Icon,a,b])=><div key={a as string} className="flex flex-col items-center border-white/30 px-2 text-center md:border-r last:border-0"><Icon className="size-9"/><p className="mt-3 font-extrabold">{a as string}<br/>{b as string}</p></div>)}</div></div></div></section>

    <section id="sobre" className="px-4 py-16 sm:px-6 lg:py-20"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2"><div><h2 className="text-3xl font-extrabold text-brand-deep sm:text-4xl">A Médicus24h</h2><div className="mt-3 h-1 w-16 rounded-full bg-brand-coral"/><p className="mt-5 text-base leading-7 text-slate-700">Somos uma empresa de soluções em saúde, com foco em atendimento médico de qualidade, segurança e agilidade. Atuamos na assistência à saúde de pessoas e empresas, com uma estrutura moderna, equipe qualificada e compromisso com a vida.</p><Button asChild variant="outline" className="mt-6 rounded-full border-brand-coral px-7 font-bold text-brand-coral hover:bg-brand-coral hover:text-white"><Link to="/sobre">Conheça nossa história <ArrowRight/></Link></Button></div><img src={ambulanceSrc} alt="Ambulância Médicus24h" loading="lazy" className="aspect-[16/8] w-full rounded-3xl object-cover shadow-lg"/></div></section>

    <section className="px-4 pb-12 sm:px-6"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl bg-brand-coral px-6 py-8 text-white sm:px-10 lg:flex-row"><div className="flex items-center gap-4"><CalendarDays className="size-12 shrink-0"/><h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">Precisa de uma solução em saúde<br className="hidden sm:block"/> para sua empresa ou evento?</h2></div><div className="flex items-center gap-5"><p className="hidden max-w-xs border-l border-white/60 pl-5 text-sm leading-6 lg:block">Fale com a nossa equipe e receba uma proposta personalizada.</p><Button asChild size="lg" className="shrink-0 rounded-full bg-white px-7 font-extrabold text-brand-coral hover:bg-white/90"><a href={whatsapp} target="_blank" rel="noreferrer"><Phone/> Solicitar Orçamento</a></Button></div></div></section>

    <section id="contato" className="border-t border-slate-200 px-4 py-10 sm:px-6"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 text-sm text-slate-700"><div><strong className="text-brand-deep">Médicus24h — Soluções em Saúde</strong><p className="mt-1">João Pessoa – PB e Região</p></div><div className="flex flex-wrap gap-5"><a href={phone} className="inline-flex items-center gap-2"><Phone className="size-4 text-primary"/> (83) 3240-0425</a><a href={whatsapp} className="inline-flex items-center gap-2"><Phone className="size-4 text-primary"/> (83) 99406-4312</a><a href="mailto:contato@medicus24h.com.br" className="inline-flex items-center gap-2"><Mail className="size-4 text-primary"/> E-mail</a></div></div></section>
  </main>
  <footer className="bg-brand-deep px-5 py-8 text-center text-sm text-white/80"><img src={logoSrc} alt="Médicus24h" className="mx-auto mb-4 h-12 rounded bg-white p-1"/><p>© 2026 Médicus24h. Todos os direitos reservados.</p><p className="mt-1">Cuidado, segurança e proximidade.</p></footer>
  <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale com a Médicus24h pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-brand-coral text-white shadow-xl hover:scale-105"><Phone className="size-6"/></a></div>;
}
