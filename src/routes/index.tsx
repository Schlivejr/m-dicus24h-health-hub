import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/medicus-shell";
import { whatsapp } from "@/lib/medicus-content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ambulance, Award, CalendarDays, Clock3, HeartHandshake, Laptop, MapPin, Phone, ShieldCheck, Stethoscope, Users } from "lucide-react";
import heroSrc from "@/assets/banner1.jpg";
import ambulanceSrc from "@/assets/ambulancia.jpg";
import teamSrc from "@/assets/area-protegida.jpg";
import telemedicineSrc from "@/assets/assistencia-domiciliar.jpg";
import doctorsSrc from "@/assets/exames-domicilio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Médicus24h | Soluções completas em Saúde" },
    { name: "description", content: "Soluções completas em saúde para pessoas e empresas: Área Protegida, remoções médicas, telemedicina e atendimento médico em João Pessoa e região." },
    { property: "og:title", content: "Médicus24h | Soluções em Saúde" },
    { property: "og:description", content: "Atendimento médico, remoções, telemedicina e Área Protegida com agilidade, segurança e equipe qualificada." }
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});

const solutions = [
  { title: "Área Protegida", description: "Assistência médica contínua para empresas, escolas, condomínios e eventos.", image: ambulanceSrc, icon: ShieldCheck, href: "/servicos/area-protegida" },
  { title: "Remoções Médicas", description: "Transporte seguro e humanizado, com equipe e equipamentos adequados.", image: teamSrc, icon: Ambulance, href: "/servicos/remocao-medica" },
  { title: "Telemedicina", description: "Atendimento médico online, com praticidade, conforto e segurança.", image: telemedicineSrc, icon: Laptop, href: "/telemedicina" },
  { title: "Atendimento Médico", description: "Consultas e acompanhamento em diferentes necessidades de saúde.", image: doctorsSrc, icon: Stethoscope, href: "/servicos" },
];

function HomePage() {
 return <div className="min-h-screen overflow-hidden bg-white text-slate-900"><Header/><main>
  <section id="inicio" className="relative isolate min-h-[560px] overflow-hidden bg-[#eaf7f7] lg:min-h-[590px]">
   <img src={heroSrc} alt="Equipe Médicus24h e ambulância em atendimento" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center"/>
   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/10 lg:from-white lg:via-white/90 lg:to-transparent"/>
   <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center px-5 py-14 sm:px-8 lg:min-h-[590px] lg:grid-cols-[.9fr_1.1fr] lg:px-14">
    <div className="max-w-[570px] py-6"><p className="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-[#007b80]">Médicus24h • Soluções em Saúde</p>
     <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#064f58] sm:text-5xl xl:text-[58px]">Soluções completas em saúde para <span className="text-[#e30613]">pessoas e empresas</span></h1>
     <p className="mt-5 max-w-[510px] text-base leading-7 text-slate-700 sm:text-lg">Atendimento médico, remoções, telemedicina e Área Protegida, com agilidade, segurança e equipe qualificada.</p>
     <div className="mt-6 flex flex-wrap gap-3">{[["Segurança e Agilidade",ShieldCheck],["Equipe Especializada",Users],["Suporte Contínuo",Clock3]].map(([label,Icon])=><div key={label as string} className="flex items-center gap-2 rounded-xl border border-[#d7e7e8] bg-white/90 px-3 py-3 text-xs font-bold text-[#07545c] shadow-sm"><Icon className="size-6 shrink-0 text-[#008b91]"/><span className="max-w-[105px] leading-tight">{label as string}</span></div>)}</div>
     <Button asChild size="lg" className="mt-8 h-13 rounded-full bg-[#e30613] px-8 text-base font-extrabold text-white shadow-lg hover:bg-[#c9000b]"><a href={whatsapp} target="_blank" rel="noreferrer"><Phone className="mr-2 size-5"/>Fale com a nossa equipe</a></Button>
    </div><div className="hidden lg:block" aria-hidden="true"/>
   </div>
  </section>
  <section id="servicos" className="px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-[1360px]">
   <div className="mb-9 text-center"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#008b91]">Cuidado completo</p><h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#07545c] sm:text-4xl">Nossas Soluções em Saúde</h2><span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-[#e30613]"/><p className="mt-4 text-base text-slate-600">Estrutura, tecnologia e equipe preparada para um atendimento de excelência.</p></div>
   <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{solutions.map(({title,description,image,icon:Icon,href})=><article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_5px_18px_rgba(3,70,78,.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-[190px] overflow-hidden"><img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/><span className="absolute -bottom-5 left-5 grid size-12 place-items-center rounded-full border-4 border-white bg-[#e30613] text-white shadow-md"><Icon className="size-6"/></span></div>
    <div className="px-5 pb-5 pt-8"><h3 className="text-xl font-extrabold tracking-tight text-[#073f4b]">{title}</h3><p className="mt-2 min-h-[68px] text-sm leading-5 text-slate-700">{description}</p><Link to={href} className="mt-4 inline-flex min-w-[155px] items-center justify-center gap-2 rounded-full border border-[#e30613] px-5 py-2 text-sm font-extrabold text-[#d4000b] transition-colors hover:bg-[#e30613] hover:text-white">Saiba mais <ArrowRight className="size-4"/></Link></div>
   </article>)}</div>
  </div></section>
  <section className="relative overflow-hidden bg-[#07545c] text-white"><div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.72fr_1.28fr]"><div className="relative min-h-[230px] overflow-hidden"><img src={doctorsSrc} alt="Profissional de saúde Médicus24h" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/></div><div className="px-6 py-10 sm:px-10 lg:px-12"><h2 className="text-3xl font-extrabold sm:text-4xl">Por que escolher a Médicus24h?</h2><div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">{[[HeartHandshake,"Atendimento","Humanizado"],[Clock3,"Agilidade","na Resposta"],[Award,"Qualidade","e Segurança"],[MapPin,"Cobertura em","João Pessoa e Região"]].map(([Icon,a,b])=><div key={a as string} className="flex flex-col items-center border-white/30 text-center sm:border-r last:border-0"><Icon className="size-9"/><p className="mt-3 text-sm font-extrabold leading-tight">{a as string}<br/>{b as string}</p></div>)}</div></div></div></section>
  <section className="px-5 py-14 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1320px] items-center gap-9 lg:grid-cols-2"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#008b91]">Quem somos</p><h2 className="mt-2 text-3xl font-extrabold text-[#07545c] sm:text-4xl">A Médicus24h</h2><span className="mt-3 block h-1 w-16 rounded-full bg-[#e30613]"/><p className="mt-5 max-w-xl leading-7 text-slate-700">Somos uma empresa de soluções em saúde, com foco em atendimento médico de qualidade, segurança e agilidade. Atuamos na assistência à saúde de pessoas e empresas, com uma estrutura moderna, equipe qualificada e compromisso com a vida.</p><Button asChild className="mt-6 rounded-full border border-[#e30613] bg-white px-7 font-extrabold text-[#d4000b] hover:bg-[#e30613] hover:text-white"><Link to="/sobre">Conheça nossa história <ArrowRight className="ml-2 size-4"/></Link></Button></div><div className="overflow-hidden rounded-[28px]"><img src={ambulanceSrc} alt="Estrutura de atendimento móvel da Médicus24h" loading="lazy" className="aspect-[16/8] w-full object-cover"/></div></div></section>
  <section className="bg-[#e30613] px-5 py-8 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 sm:flex-row"><div className="flex items-center gap-4"><CalendarDays className="size-11 shrink-0"/><h2 className="max-w-xl text-2xl font-extrabold leading-tight">Precisa de uma solução em saúde para sua empresa ou evento?</h2></div><div className="flex flex-col items-center gap-3 sm:flex-row"><p className="max-w-[250px] text-sm leading-5 text-white/90">Fale com a nossa equipe e receba uma proposta personalizada.</p><Button asChild size="lg" className="rounded-full bg-white px-7 font-extrabold text-[#d4000b] hover:bg-slate-100"><a href={whatsapp} target="_blank" rel="noreferrer"><Phone className="mr-2 size-5"/>Solicitar Orçamento</a></Button></div></div></section>
 </main><Footer/><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale com a Médicus24h pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#e30613] text-white shadow-xl transition-transform hover:scale-105"><Phone className="size-6"/></a></div>;
}