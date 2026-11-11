import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/medicus-shell";
import { services, whatsapp } from "@/lib/medicus-content";
import {
  Activity, Ambulance, ArrowRight, Award, Building2, CalendarDays, ChevronDown,
  CircleCheck, Clock3, Cross, Dumbbell, FlaskConical, HeartHandshake, House,
  Mail, MapPin, Menu, MonitorSmartphone, Phone, Quote, School, ShieldCheck,
  Sparkles, Stethoscope, Users, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@/assets/medicus24h-logo.png";
const logo = { url: logoSrc };
import heroSrc from "@/assets/banner1.jpg";
const hero = { url: heroSrc };
import ambulanceSrc from "@/assets/ambulancia.jpg";
const ambulance = { url: ambulanceSrc };
import careSrc from "@/assets/assistencia-domiciliar.jpg";
const care = { url: careSrc };
import protectedAreaSrc from "@/assets/area-protegida.jpg";
const protectedArea = { url: protectedAreaSrc };
import examsSrc from "@/assets/exames-domicilio.jpg";
const exams = { url: examsSrc };



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

function SectionHead({ eyebrow, title, text, light=false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <div className="mb-10 max-w-2xl"><p className={`mb-3 text-xs font-extrabold uppercase tracking-widest ${light ? "text-primary-foreground/75" : "text-primary"}`}>{eyebrow}</p><h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>{text && <p className={`mt-4 leading-7 ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{text}</p>}</div>;
}

function HomePage() {
  return <div className="bg-background text-foreground"><Header /><main>
    <section id="inicio" className="relative min-h-[640px] sm:min-h-[660px] overflow-hidden bg-brand-deep lg:min-h-[660px]">
      <img src={ambulance.url} alt="Ambulância Médicus24h para remoção médica" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/80 to-brand-deep/10" />
      <div className="relative mx-auto flex min-h-[640px] sm:min-h-[660px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[660px] lg:px-8"><div className="max-w-2xl animate-enter-up"><p className="mb-5 text-xs font-extrabold uppercase tracking-widest text-primary-foreground/75">Médicus24h | Soluções em Saúde</p><h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">Saúde e cuidado quando você mais precisa.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/80 sm:text-lg">Oferecemos soluções em saúde para pessoas, empresas, instituições e eventos, com atendimento humanizado, segurança e agilidade.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><Link to="/servicos">Conheça nossas soluções <ArrowRight /></Link></Button><Button asChild variant="inverse" size="lg"><a href={whatsapp} target="_blank" rel="noreferrer">Fale com a Médicus24h</a></Button></div></div></div>
    </section>

    <section aria-label="Compromissos Médicus24h" className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid rounded-md border border-border bg-background shadow-xl sm:grid-cols-2 lg:grid-cols-4">{([[HeartHandshake,"Atendimento humanizado"],[Award,"Profissionais capacitados"],[Activity,"Soluções em saúde"],[Clock3,"Atendimento ágil"]] as const).map(([Icon,t],i)=><div key={t as string} className={`flex items-center gap-3 px-5 py-5 ${i ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}><span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Icon className="size-5" /></span><span className="text-sm font-bold">{t as string}</span></div>)}</div></section>

    <section id="servicos" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Cuidado completo" title="Nossas soluções em saúde" text="Serviços pensados para cuidar de você, da sua família, da sua empresa e de seus eventos." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map(([Icon,title,desc,path],i)=><article key={title} className="group relative flex min-h-72 flex-col overflow-hidden rounded-md border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><span className="absolute -right-5 -top-5 size-24 rounded-full bg-secondary transition-transform group-hover:scale-125" /><span className="relative grid size-12 place-items-center rounded-md bg-primary text-primary-foreground"><Icon className="size-6 transition-transform group-hover:scale-110" /></span><p className="mt-8 text-xs font-bold text-primary">0{i+1}</p><h3 className="mt-2 text-xl font-extrabold">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{desc}</p><Link to={path} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Saiba mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></article>)}</div></div></section>

    <section className="bg-secondary px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]"><div className="relative"><img src={care.url} alt="Atendimento humanizado em saúde" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-xl" /><div className="absolute -bottom-5 right-4 max-w-56 rounded-md bg-primary p-5 text-primary-foreground shadow-xl sm:right-8"><HeartHandshake className="mb-3 size-7" /><p className="font-extrabold">Presença, segurança e acolhimento.</p></div></div><div><SectionHead eyebrow="Cuidado que acolhe" title="Seu cuidado. Nossa prioridade." text="Na Médicus24h, acreditamos que cuidar da saúde vai além do atendimento. É estar presente, oferecer segurança e proporcionar uma experiência acolhedora em todos os momentos." /><Button asChild size="lg"><Link to="/sobre">Conheça a Médicus24h <ArrowRight /></Link></Button></div></div></section>

    <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Escolha segura" title="Por que escolher a Médicus24h?" /><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 xl:grid-cols-5">{([[HeartHandshake,"Atendimento humanizado","Cuidado atento às necessidades de cada pessoa."],[Award,"Profissionais capacitados","Equipe preparada para oferecer suporte qualificado."],[Clock3,"Agilidade","Respostas rápidas para diferentes necessidades."],[ShieldCheck,"Segurança","Processos orientados à proteção do paciente."],[Sparkles,"Soluções personalizadas","Atendimento adequado a cada contexto."]] as const).map(([Icon,t,d])=><article key={t as string} className="bg-background p-6"><Icon className="size-7 text-primary"/><h3 className="mt-8 font-extrabold">{t as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d as string}</p></article>)}</div></div></section>

    <section className="overflow-hidden bg-brand-deep px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><SectionHead light eyebrow="Área Protegida" title="Proteção para onde você estiver" text="Atendimento médico para empresas, instituições, condomínios e ambientes que desejam oferecer mais segurança a colaboradores, clientes, moradores e visitantes." /><div className="flex flex-wrap gap-2">{["Escolas","Igrejas","Indústrias","Condomínios","Clínicas","Empresas","Eventos"].map(x=><span key={x} className="rounded-full border border-primary-foreground/20 px-4 py-2 text-sm font-semibold text-primary-foreground">{x}</span>)}</div><Button asChild variant="hero" size="lg" className="mt-8"><a href={whatsapp}>Quero proteger meu espaço <ArrowRight /></a></Button></div><img src={protectedArea.url} alt="Ambiente protegido pela Médicus24h" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-2xl" /></div></section>

    <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><img src={ambulance.url} alt="Ambulância para atendimento e remoção Médicus24h" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-xl"/><div><SectionHead eyebrow="Remoção médica" title="Atendimento e remoção com segurança" text="Transferência de pacientes com equipe preparada, estrutura adequada e atenção em cada etapa do deslocamento." /><ul className="grid gap-3">{["Profissionais especializados","Suporte básico e avançado","Atendimento ágil","Estrutura adequada","Segurança do paciente"].map(x=><li key={x} className="flex items-center gap-3 font-semibold"><CircleCheck className="size-5 shrink-0 text-primary" />{x}</li>)}</ul><Button asChild variant="emergency" size="lg" className="mt-8"><a href="tel:+558333400425"><Ambulance /> Solicitar atendimento</a></Button></div></div></section>

    <section id="telemedicina" className="bg-secondary px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><SectionHead eyebrow="Telemedicina" title="Atendimento médico onde você estiver" text="Mais praticidade para cuidar da sua saúde."/><ul className="grid grid-cols-2 gap-3">{["Atendimento remoto","Praticidade","Segurança","Comodidade","Acesso facilitado"].map(x=><li key={x} className="flex items-center gap-2 text-sm font-bold"><CircleCheck className="size-4 text-primary"/>{x}</li>)}</ul><Button asChild size="lg" className="mt-8"><Link to="/telemedicina">Conheça a Telemedicina <ArrowRight /></Link></Button></div><div className="relative mx-auto aspect-square w-full max-w-lg"><div className="absolute inset-8 rounded-full border border-primary/20"/><div className="absolute inset-16 rounded-full border border-primary/30"/><div className="absolute inset-24 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl"><MonitorSmartphone className="size-20"/></div>{["Consulta","Acesso","Cuidado"].map((x,i)=><span key={x} className={`absolute rounded-full bg-background px-4 py-2 text-sm font-bold shadow-lg ${i===0?"left-0 top-1/3":i===1?"right-0 top-1/4":"bottom-8 left-1/2 -translate-x-1/2"}`}>{x}</span>)}</div></div></section>

    <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHead eyebrow="Para todos" title="Saúde para diferentes necessidades"/><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{([[Building2,"Empresas"],[School,"Escolas"],[HeartHandshake,"Igrejas"],[Activity,"Indústrias"],[House,"Condomínios"],[Stethoscope,"Clínicas"],[CalendarDays,"Eventos"],[Users,"Famílias"]] as const).map(([Icon,t])=><div key={t as string} className="grid min-h-36 place-items-center rounded-md border border-border p-4 text-center transition-colors hover:bg-secondary"><Icon className="size-7 text-primary"/><p className="text-xs font-extrabold uppercase">{t as string}</p></div>)}</div></div></section>

    <section id="sobre" className="bg-brand-soft px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><img src={exams.url} alt="Atendimento de saúde no conforto do paciente" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover shadow-xl"/><div><SectionHead eyebrow="Quem somos" title="Sobre a Médicus24h" text="A Médicus24h oferece soluções em saúde que aproximam cuidado, praticidade e segurança. Nossos serviços atendem pessoas, famílias, empresas, instituições e eventos, presencialmente e por meio da tecnologia."/><Button asChild size="lg"><Link to="/sobre">Conheça nossa história <ArrowRight/></Link></Button></div></div></section>

    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-md bg-primary p-8 text-primary-foreground sm:p-12 lg:flex-row lg:items-center"><div><h2 className="text-3xl font-extrabold sm:text-4xl">Conte com a Médicus24h</h2><p className="mt-3 max-w-2xl text-primary-foreground/80">Encontre a solução em saúde ideal para você, sua família, sua empresa ou seu evento.</p></div><div className="flex shrink-0 flex-col gap-3 sm:flex-row"><Button asChild variant="inverse" size="lg"><a href={whatsapp}>Fale conosco</a></Button><Button asChild variant="emergency" size="lg"><a href="tel:+558333400425">Solicitar atendimento</a></Button></div></div></section>

    <section id="contato" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><SectionHead eyebrow="Contato" title="Estamos prontos para atender" text="Entre em contato com a unidade João Pessoa pelos canais oficiais."/><div className="grid gap-4 sm:grid-cols-2">{([[MapPin,"Unidade João Pessoa","Rua Quintino Bocaiúva, 739, Torre, João Pessoa - PB","https://maps.google.com/?q=Rua+Quintino+Bocaiuva+739+Torre+Joao+Pessoa+PB"],[Phone,"Telefone","(83) 3340-0425","tel:+558333400425"],[Phone,"WhatsApp","(83) 99102-2983",whatsapp],[Mail,"E-mail","contato@medicus24h.com.br","mailto:contato@medicus24h.com.br"]] as const).map(([Icon,t,d,h])=><a key={t as string} href={h as string} target={(h as string).startsWith("http")?"_blank":undefined} rel="noreferrer" className="group rounded-md border border-border p-6 hover:border-primary hover:bg-secondary"><Icon className="size-6 text-primary"/><h3 className="mt-5 font-extrabold">{t as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground group-hover:text-foreground">{d as string}</p></a>)}</div></div></section>
  </main><Footer/><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale conosco pelo WhatsApp" title="Fale conosco pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"><Phone className="size-6"/></a></div>;
}

