import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity, Ambulance, ArrowRight, Award, Building2, CalendarDays, ChevronDown,
  CircleCheck, Clock3, Cross, Dumbbell, FlaskConical, HeartHandshake, House,
  Mail, MapPin, Menu, MonitorSmartphone, Phone, Quote, School, ShieldCheck,
  Sparkles, Stethoscope, Users, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/medicus24h-logo.png.asset.json";
import hero from "@/assets/banner1.jpg.asset.json";
import ambulance from "@/assets/ambulancia.jpg.asset.json";
import care from "@/assets/assistencia-domiciliar.jpg.asset.json";
import protectedArea from "@/assets/area-protegida.jpg.asset.json";
import exams from "@/assets/exames-domicilio.jpg.asset.json";

const whatsapp = "https://wa.me/5583991022983";
const portal = "https://portal.medicus24h.com.br/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Médicus24h | Soluções em Saúde" },
      { name: "description", content: "Cuidamos da sua saúde com soluções completas em atendimento médico, remoção, telemedicina, exames a domicílio, área protegida e muito mais." },
      { property: "og:title", content: "Médicus24h | Soluções em Saúde" },
      { property: "og:description", content: "Soluções completas em saúde, com atendimento humanizado, segurança e agilidade." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalBusiness", name: "Médicus24h – Soluções em Saúde", telephone: "+55 83 3340-0425", email: "contato@medicus24h.com.br", address: { "@type": "PostalAddress", streetAddress: "Rua Quintino Bocaiúva, 739, Torre", addressLocality: "João Pessoa", addressRegion: "PB", addressCountry: "BR" } }) }],
  }),
  component: HomePage,
});

const services = [
  [ShieldCheck, "Área Protegida", "Proteção e atendimento médico para empresas, instituições, condomínios e diferentes ambientes."],
  [Cross, "Cartão de Benefícios", "Uma alternativa prática para ampliar o acesso a consultas, exames e serviços de saúde."],
  [CalendarDays, "Cobertura de Eventos Médicos", "Suporte e atendimento médico para eventos com segurança e estrutura profissional."],
  [FlaskConical, "Exames a Domicílio", "Realização de exames com praticidade, conforto e comodidade no local escolhido."],
  [Dumbbell, "Fisioterapia Domiciliar", "Atendimento fisioterapêutico no conforto da sua casa."],
  [House, "Pronto Atendimento a Domicílio", "Cuidados médicos sem a necessidade de deslocamento, proporcionando conforto e agilidade."],
  [Ambulance, "Remoção Médica", "Transferência segura de pacientes com equipe preparada e estrutura adequada."],
  [MonitorSmartphone, "Telemedicina", "Atendimento médico remoto com praticidade e segurança."],
] as const;

const anchors = [
  ["Início", "#inicio"], ["Sobre nós", "#sobre"], ["Telemedicina", "#telemedicina"], ["Contato", "#contato"],
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur transition-all ${scrolled ? "shadow-sm" : ""}`}>
    <div className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 transition-all sm:px-6 lg:flex lg:px-8 ${scrolled ? "py-2" : "py-3"}`}>
      <a href="#inicio" aria-label="Médicus24h - Início" className="min-w-0 lg:mr-auto"><img src={logo.url} alt="Médicus24h – Soluções em Saúde" className={`w-auto object-contain transition-all ${scrolled ? "h-10" : "h-12 sm:h-14"}`} /></a>
      <nav aria-label="Navegação principal" className="hidden items-center gap-5 lg:flex">
        {anchors.slice(0,2).map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">{label}</a>)}
        <div className="group relative"><button className="flex items-center gap-1 py-4 text-sm font-semibold hover:text-primary" aria-label="Abrir serviços">Serviços <ChevronDown className="size-4 transition-transform group-hover:rotate-180" /></button>
          <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 rounded-md border border-border bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            {services.map(([,title]) => <a href="#servicos" key={title} className="block rounded-sm px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary">{title}</a>)}
          </div>
        </div>
        {anchors.slice(2).map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">{label}</a>)}
        <a href={portal} target="_blank" rel="noreferrer" className="text-sm font-extrabold text-primary hover:text-brand-deep">PortalMédicus24h</a>
      </nav>
      <div className="hidden gap-2 xl:flex"><Button asChild size="lg"><a href={whatsapp} target="_blank" rel="noreferrer"><Phone /> Fale Conosco</a></Button><Button asChild variant="emergency" size="lg"><a href="tel:+5583991022983"><Ambulance /> Urgência Médica</a></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="border-t border-border bg-background px-4 py-4 shadow-lg lg:hidden"><nav className="mx-auto grid max-w-7xl gap-1" aria-label="Navegação móvel">{anchors.map(([l,h]) => <a onClick={() => setOpen(false)} key={h} href={h} className="rounded-sm px-3 py-3 font-semibold hover:bg-secondary">{l}</a>)}<a onClick={() => setOpen(false)} href="#servicos" className="rounded-sm px-3 py-3 font-semibold hover:bg-secondary">Serviços</a><a href={portal} target="_blank" rel="noreferrer" className="rounded-sm px-3 py-3 font-bold text-primary">PortalMédicus24h</a><div className="mt-3 grid grid-cols-2 gap-2"><Button asChild><a href={whatsapp}>WhatsApp</a></Button><Button asChild variant="emergency"><a href="tel:+5583991022983">Urgência</a></Button></div></nav></div>}
  </header>;
}

function SectionHead({ eyebrow, title, text, light=false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <div className="mb-10 max-w-2xl"><p className={`mb-3 text-xs font-extrabold uppercase tracking-widest ${light ? "text-primary-foreground/75" : "text-primary"}`}>{eyebrow}</p><h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>{text && <p className={`mt-4 leading-7 ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{text}</p>}</div>;
}

function HomePage() {
  return <div className="bg-background text-foreground"><Header /><main>
    <section id="inicio" className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-brand-deep lg:min-h-[720px]">
      <img src={hero.url} alt="Equipe e estrutura de remoção médica Médicus24h" className="absolute inset-0 h-full w-full object-cover object-center opacity-55" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep/20" />
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[720px] lg:px-8"><div className="max-w-3xl animate-enter-up"><p className="mb-5 text-xs font-extrabold uppercase tracking-widest text-primary-foreground/75">Médicus24h | Soluções em Saúde</p><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-primary-foreground sm:text-6xl lg:text-7xl">Saúde e cuidado quando você mais precisa.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/80 sm:text-lg">Oferecemos soluções em saúde para pessoas, empresas, instituições e eventos, com atendimento humanizado, segurança e agilidade.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><a href="#servicos">Conheça nossas soluções <ArrowRight /></a></Button><Button asChild variant="inverse" size="lg"><a href={whatsapp} target="_blank" rel="noreferrer">Fale com a Médicus24h</a></Button></div></div></div>
    </section>

    <section aria-label="Compromissos Médicus24h" className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid rounded-md border border-border bg-background shadow-xl sm:grid-cols-2 lg:grid-cols-4">{([[HeartHandshake,"Atendimento humanizado"],[Award,"Profissionais capacitados"],[Activity,"Soluções em saúde"],[Clock3,"Atendimento ágil"]] as const).map(([Icon,t],i)=><div key={t as string} className={`flex items-center gap-3 px-5 py-5 ${i ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}><span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Icon className="size-5" /></span><span className="text-sm font-bold">{t as string}</span></div>)}</div></section>

    <section id="servicos" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Cuidado completo" title="Nossas soluções em saúde" text="Serviços pensados para cuidar de você, da sua família, da sua empresa e de seus eventos." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map(([Icon,title,desc],i)=><article key={title} className="group relative flex min-h-72 flex-col overflow-hidden rounded-md border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><span className="absolute -right-5 -top-5 size-24 rounded-full bg-secondary transition-transform group-hover:scale-125" /><span className="relative grid size-12 place-items-center rounded-md bg-primary text-primary-foreground"><Icon className="size-6 transition-transform group-hover:scale-110" /></span><p className="mt-8 text-xs font-bold text-primary">0{i+1}</p><h3 className="mt-2 text-xl font-extrabold">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{desc}</p><a href="#contato" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Saiba mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></article>)}</div></div></section>

    <section className="bg-secondary px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]"><div className="relative"><img src={care.url} alt="Atendimento humanizado em saúde" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-xl" /><div className="absolute -bottom-5 right-4 max-w-56 rounded-md bg-primary p-5 text-primary-foreground shadow-xl sm:right-8"><HeartHandshake className="mb-3 size-7" /><p className="font-extrabold">Presença, segurança e acolhimento.</p></div></div><div><SectionHead eyebrow="Cuidado que acolhe" title="Seu cuidado. Nossa prioridade." text="Na Médicus24h, acreditamos que cuidar da saúde vai além do atendimento. É estar presente, oferecer segurança e proporcionar uma experiência acolhedora em todos os momentos." /><Button asChild size="lg"><a href="#sobre">Conheça a Médicus24h <ArrowRight /></a></Button></div></div></section>

    <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Escolha segura" title="Por que escolher a Médicus24h?" /><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-5">{([[HeartHandshake,"Atendimento humanizado","Cuidado atento às necessidades de cada pessoa."],[Award,"Profissionais capacitados","Equipe preparada para oferecer suporte qualificado."],[Clock3,"Agilidade","Respostas rápidas para diferentes necessidades."],[ShieldCheck,"Segurança","Processos orientados à proteção do paciente."],[Sparkles,"Soluções personalizadas","Atendimento adequado a cada contexto."]] as const).map(([Icon,t,d])=><article key={t as string} className="bg-background p-6"><Icon className="size-7 text-primary"/><h3 className="mt-8 font-extrabold">{t as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d as string}</p></article>)}</div></div></section>

    <section className="overflow-hidden bg-brand-deep px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><SectionHead light eyebrow="Área Protegida" title="Proteção para onde você estiver" text="Atendimento médico para empresas, instituições, condomínios e ambientes que desejam oferecer mais segurança a colaboradores, clientes, moradores e visitantes." /><div className="flex flex-wrap gap-2">{["Escolas","Igrejas","Indústrias","Condomínios","Clínicas","Empresas","Eventos"].map(x=><span key={x} className="rounded-full border border-primary-foreground/20 px-4 py-2 text-sm font-semibold text-primary-foreground">{x}</span>)}</div><Button asChild variant="hero" size="lg" className="mt-8"><a href={whatsapp}>Quero proteger meu espaço <ArrowRight /></a></Button></div><img src={protectedArea.url} alt="Ambiente protegido pela Médicus24h" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-2xl" /></div></section>

    <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><img src={ambulance.url} alt="Ambulância para atendimento e remoção Médicus24h" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-xl"/><div><SectionHead eyebrow="Remoção médica" title="Atendimento e remoção com segurança" text="Transferência de pacientes com equipe preparada, estrutura adequada e atenção em cada etapa do deslocamento." /><ul className="grid gap-3">{["Profissionais especializados","Suporte básico e avançado","Atendimento ágil","Estrutura adequada","Segurança do paciente"].map(x=><li key={x} className="flex items-center gap-3 font-semibold"><CircleCheck className="size-5 shrink-0 text-primary" />{x}</li>)}</ul><Button asChild variant="emergency" size="lg" className="mt-8"><a href="tel:+5583991022983"><Ambulance /> Solicitar atendimento</a></Button></div></div></section>

    <section id="telemedicina" className="bg-secondary px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><SectionHead eyebrow="Telemedicina" title="Atendimento médico onde você estiver" text="Mais praticidade para cuidar da sua saúde."/><ul className="grid grid-cols-2 gap-3">{["Atendimento remoto","Praticidade","Segurança","Comodidade","Acesso facilitado"].map(x=><li key={x} className="flex items-center gap-2 text-sm font-bold"><CircleCheck className="size-4 text-primary"/>{x}</li>)}</ul><Button asChild size="lg" className="mt-8"><a href="#contato">Conheça a Telemedicina <ArrowRight /></a></Button></div><div className="relative mx-auto aspect-square w-full max-w-lg"><div className="absolute inset-8 rounded-full border border-primary/20"/><div className="absolute inset-16 rounded-full border border-primary/30"/><div className="absolute inset-24 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl"><MonitorSmartphone className="size-20"/></div>{["Consulta","Acesso","Cuidado"].map((x,i)=><span key={x} className={`absolute rounded-full bg-background px-4 py-2 text-sm font-bold shadow-lg ${i===0?"left-0 top-1/3":i===1?"right-0 top-1/4":"bottom-8 left-1/2 -translate-x-1/2"}`}>{x}</span>)}</div></div></section>

    <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Para todos" title="Saúde para diferentes necessidades"/><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{([[Building2,"Empresas"],[School,"Escolas"],[HeartHandshake,"Igrejas"],[Activity,"Indústrias"],[House,"Condomínios"],[Stethoscope,"Clínicas"],[CalendarDays,"Eventos"],[Users,"Famílias"]] as const).map(([Icon,t])=><div key={t as string} className="grid min-h-36 place-items-center rounded-md border border-border p-4 text-center transition-colors hover:bg-secondary"><Icon className="size-7 text-primary"/><p className="text-xs font-extrabold uppercase">{t as string}</p></div>)}</div></div></section>

    <section id="sobre" className="bg-brand-soft px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><img src={exams.url} alt="Atendimento de saúde no conforto do paciente" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-xl"/><div><SectionHead eyebrow="Quem somos" title="Sobre a Médicus24h" text="A Médicus24h oferece soluções em saúde que aproximam cuidado, praticidade e segurança. Nossos serviços atendem pessoas, famílias, empresas, instituições e eventos, presencialmente e por meio da tecnologia."/><Button asChild size="lg"><a href="#principios">Conheça nossa história <ArrowRight/></a></Button></div></div></section>

    <section id="principios" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Nossos princípios" title="Cuidado com propósito"/><div className="grid gap-5 md:grid-cols-3">{[["Missão","Oferecer soluções integradas em saúde com qualidade, acessibilidade e atendimento personalizado."],["Visão","Ser referência em soluções integradas, aproximando o cuidado médico das pessoas por meio de tecnologia e atenção humana."],["Valores","Excelência, acessibilidade, inovação, segurança e cuidado personalizado."]].map(([t,d],i)=><article key={t} className={`rounded-md p-8 ${i===1?"bg-primary text-primary-foreground":"border border-border bg-background"}`}><p className="text-xs font-extrabold uppercase tracking-widest opacity-70">0{i+1}</p><h3 className="mt-10 text-2xl font-extrabold">{t}</h3><p className={`mt-4 leading-7 ${i===1?"text-primary-foreground/80":"text-muted-foreground"}`}>{d}</p></article>)}</div></div></section>

    <section className="bg-brand-deep px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead light eyebrow="Transparência" title="Experiência que gera confiança" text="Os indicadores oficiais serão publicados aqui após validação pela Médicus24h."/><div className="grid gap-px overflow-hidden rounded-md bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">{["atendimentos","profissionais","empresas atendidas","anos de experiência"].map(x=><div key={x} className="bg-brand-deep p-7"><p className="text-2xl font-extrabold text-primary-foreground">[INSERIR NÚMERO REAL]</p><p className="mt-2 text-sm text-primary-foreground/65">{x}</p></div>)}</div></div></section>

    <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Relacionamentos" title="Quem confia na Médicus24h"/><div className="grid gap-5 md:grid-cols-3">{[1,2,3].map(i=><blockquote key={i} className="rounded-md border border-border bg-card p-7 shadow-sm"><Quote className="size-7 text-primary"/><p className="mt-6 text-lg font-semibold leading-8">[INSERIR DEPOIMENTO REAL]</p><footer className="mt-8 border-t border-border pt-5"><p className="font-bold">[INSERIR NOME]</p><p className="text-sm text-muted-foreground">[INSERIR EMPRESA/CARGO]</p></footer></blockquote>)}</div></div></section>

    <section className="bg-secondary px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Informação" title="Conteúdos para cuidar melhor da sua saúde"/><div className="grid gap-5 md:grid-cols-3">{[care,exams,protectedArea].map((img,i)=><article key={i} className="group overflow-hidden rounded-md border border-border bg-background"><img src={img.url} alt="Imagem ilustrativa para futuro conteúdo de saúde" loading="lazy" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="p-6"><p className="text-xs font-extrabold uppercase text-primary">[INSERIR CATEGORIA]</p><h3 className="mt-3 text-xl font-extrabold">[INSERIR TÍTULO DO ARTIGO]</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">[INSERIR RESUMO DO CONTEÚDO]</p><div className="mt-6 flex items-center justify-between text-sm"><span className="text-muted-foreground">[INSERIR DATA]</span><span className="font-bold text-primary">Leia mais</span></div></div></article>)}</div></div></section>

    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-md bg-primary p-8 text-primary-foreground sm:p-12 lg:flex-row lg:items-center"><div><h2 className="text-3xl font-extrabold sm:text-4xl">Conte com a Médicus24h</h2><p className="mt-3 max-w-2xl text-primary-foreground/80">Encontre a solução em saúde ideal para você, sua família, sua empresa ou seu evento.</p></div><div className="flex shrink-0 flex-col gap-3 sm:flex-row"><Button asChild variant="inverse" size="lg"><a href={whatsapp}>Fale conosco</a></Button><Button asChild variant="emergency" size="lg"><a href="tel:+558333400425">Solicitar atendimento</a></Button></div></div></section>

    <section id="contato" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><SectionHead eyebrow="Contato" title="Estamos prontos para atender" text="Entre em contato com a unidade João Pessoa pelos canais oficiais."/><div className="grid gap-4 sm:grid-cols-2">{([[MapPin,"Unidade João Pessoa","Rua Quintino Bocaiúva, 739, Torre, João Pessoa - PB","https://maps.google.com/?q=Rua+Quintino+Bocaiuva+739+Torre+Joao+Pessoa+PB"],[Phone,"Telefone","(83) 3340-0425","tel:+558333400425"],[Phone,"WhatsApp","(83) 99102-2983",whatsapp],[Mail,"E-mail","contato@medicus24h.com.br","mailto:contato@medicus24h.com.br"]] as const).map(([Icon,t,d,h])=><a key={t as string} href={h as string} target={(h as string).startsWith("http")?"_blank":undefined} rel="noreferrer" className="group rounded-md border border-border p-6 hover:border-primary hover:bg-secondary"><Icon className="size-6 text-primary"/><h3 className="mt-5 font-extrabold">{t as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground group-hover:text-foreground">{d as string}</p></a>)}</div></div></section>
  </main><Footer/><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale conosco pelo WhatsApp" title="Fale conosco pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"><Phone className="size-6"/></a></div>;
}

function Footer(){return <footer className="bg-brand-deep px-4 pb-8 pt-16 text-primary-foreground sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><div className="inline-block rounded-md bg-background p-3"><img src={logo.url} alt="Médicus24h" className="h-12 w-auto"/></div><p className="mt-5 text-sm text-primary-foreground/65">Médicus24h – Soluções em Saúde</p></div><div><h3 className="font-extrabold">Navegação</h3><div className="mt-4 grid gap-2 text-sm text-primary-foreground/65">{anchors.map(([l,h])=><a key={h} href={h} className="hover:text-primary-foreground">{l}</a>)}<a href={portal} target="_blank" rel="noreferrer">PortalMédicus24h</a></div></div><div><h3 className="font-extrabold">Serviços</h3><div className="mt-4 grid gap-2 text-sm text-primary-foreground/65">{services.slice(0,5).map(([,t])=><a href="#servicos" key={t} className="hover:text-primary-foreground">{t}</a>)}</div></div><div><h3 className="font-extrabold">Contato</h3><div className="mt-4 grid gap-3 text-sm text-primary-foreground/65"><a href="tel:+558333400425">(83) 3340-0425</a><a href={whatsapp}>(83) 99102-2983</a><a href="mailto:contato@medicus24h.com.br">contato@medicus24h.com.br</a><p>João Pessoa/PB</p></div></div></div><div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between"><p>© 2026 Médicus24h. Todos os direitos reservados.</p><p>Cuidado, segurança e proximidade.</p></div></footer>}
