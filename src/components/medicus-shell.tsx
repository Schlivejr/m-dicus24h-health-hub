import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Ambulance, ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/medicus24h-logo.png.asset.json";
import { services, whatsapp, portal } from "@/lib/medicus-content";
const anchors = [["Início", "/"], ["Sobre nós", "/sobre"], ["Telemedicina", "/telemedicina"], ["Contato", "/contato"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur transition-all ${scrolled ? "shadow-sm" : ""}`}>
    <div className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 transition-all sm:px-6 lg:flex lg:px-8 ${scrolled ? "py-2" : "py-3"}`}>
      <Link to="/" aria-label="Médicus24h - Início" className="min-w-0 lg:mr-auto"><img src={logo.url} alt="Médicus24h – Soluções em Saúde" className={`w-auto object-contain transition-all ${scrolled ? "h-10" : "h-12 sm:h-14"}`} /></Link>
      <nav aria-label="Navegação principal" className="hidden items-center gap-4 lg:flex">
        {anchors.slice(0,2).map(([label, href]) => <Link key={href} to={href} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">{label}</Link>)}
        <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onKeyDown={e => { if (e.key === "Escape") setServicesOpen(false); }}>
          <Button variant="ghost" aria-expanded={servicesOpen} aria-controls="service-menu" onClick={() => setServicesOpen(!servicesOpen)}>Serviços <ChevronDown /></Button>
          {servicesOpen && <div id="service-menu" className="absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-md border border-border bg-background p-2 shadow-xl animate-enter-up">
            {services.map(([,title,,path]) => <Link to={path} key={title} onClick={() => setServicesOpen(false)} className="block rounded-sm px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary">{title}</Link>)}
            <Link to="/servicos" className="block border-t border-border px-3 py-3 text-sm font-bold text-primary">Todas as soluções <ArrowRight className="inline size-4" /></Link>
          </div>}
        </div>
        {anchors.slice(2).map(([label, href]) => <Link key={href} to={href} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">{label}</Link>)}
        <a href={portal} target="_blank" rel="noreferrer" className="text-sm font-extrabold text-primary hover:text-brand-deep">PortalMédicus24h</a>
      </nav>
      <div className="hidden gap-2 2xl:flex"><Button asChild size="lg"><a href={whatsapp} target="_blank" rel="noreferrer"><Phone /> Fale Conosco</a></Button><Button asChild variant="emergency" size="lg"><a href="tel:+558333400425"><Ambulance /> Urgência Médica</a></Button></div>
      <div className="flex shrink-0 items-center gap-2"><Button asChild variant="emergency" size="icon" className="2xl:hidden" aria-label="Urgência Médica"><a href="tel:+558333400425"><Ambulance /></a></Button><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button></div>
    </div>
    {open && <div className="border-t border-border bg-background px-4 py-4 shadow-lg lg:hidden"><nav className="mx-auto grid max-w-7xl gap-1" aria-label="Navegação móvel">{anchors.map(([l,h]) => <Link onClick={() => setOpen(false)} key={h} to={h} className="rounded-sm px-3 py-3 font-semibold hover:bg-secondary">{l}</Link>)}<Link onClick={() => setOpen(false)} to="/servicos" className="rounded-sm px-3 py-3 font-semibold hover:bg-secondary">Serviços</Link><a href={portal} target="_blank" rel="noreferrer" className="rounded-sm px-3 py-3 font-bold text-primary">PortalMédicus24h</a><div className="mt-3 grid grid-cols-2 gap-2"><Button asChild><a href={whatsapp}>WhatsApp</a></Button><Button asChild variant="emergency"><a href="tel:+558333400425">Urgência</a></Button></div></nav></div>}
  </header>;
}

export function Footer(){return <footer className="bg-brand-deep px-4 pb-8 pt-16 text-primary-foreground sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><div className="inline-block rounded-md bg-background p-3"><img src={logo.url} alt="Médicus24h" className="h-12 w-auto"/></div><p className="mt-5 text-sm text-primary-foreground/65">Médicus24h – Soluções em Saúde</p></div><div><h3 className="font-extrabold">Navegação</h3><div className="mt-4 grid gap-2 text-sm text-primary-foreground/65">{anchors.map(([l,h])=><Link key={h} to={h} className="hover:text-primary-foreground">{l}</Link>)}<a href={portal} target="_blank" rel="noreferrer">PortalMédicus24h</a></div></div><div><h3 className="font-extrabold">Serviços</h3><div className="mt-4 grid gap-2 text-sm text-primary-foreground/65">{services.filter((_,i)=>[0,1,3,6,7].includes(i)).map(([,t,,path])=><Link to={path} key={t} className="hover:text-primary-foreground">{t}</Link>)}</div></div><div><h3 className="font-extrabold">Contato</h3><div className="mt-4 grid gap-3 text-sm text-primary-foreground/65"><a href="tel:+558333400425">(83) 3340-0425</a><a href={whatsapp}>(83) 99102-2983</a><a href="mailto:contato@medicus24h.com.br">contato@medicus24h.com.br</a><p>João Pessoa/PB</p></div></div></div><div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between"><p>© 2026 Médicus24h. Todos os direitos reservados.</p><p>Cuidado, segurança e proximidade.</p></div></footer>}
