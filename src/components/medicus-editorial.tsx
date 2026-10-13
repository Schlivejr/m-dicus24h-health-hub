import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { statistics, testimonials } from "@/lib/medicus-content";

function Counter({ value }: { value: number | null }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element || value === null) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCount(value); return; }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1400, 1);
        setCount(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <p ref={ref} className="text-xl font-extrabold text-primary-foreground">{value === null ? "[INSERIR NÚMERO REAL]" : count.toLocaleString("pt-BR")}</p>;
}

export function Statistics() {
  return <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{statistics.map(item => <div key={item.label} className="border-l border-primary-foreground/25 pl-6"><Counter value={item.value} /><p className="mt-3 text-sm text-primary-foreground/75">{item.label}</p></div>)}</div>;
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  if (!item) return null;
  return <div aria-roledescription="carrossel" aria-label="Depoimentos" className="border-y border-border py-10">
    <div className="grid items-start gap-8 md:grid-cols-[auto_1fr_auto]"><Quote className="size-12 text-primary" /><blockquote key={index} className="animate-enter-up"><p className="text-2xl font-semibold leading-relaxed sm:text-3xl">{item.quote}</p><footer className="mt-8"><p className="font-bold">{item.name}</p><p className="mt-1 text-sm text-muted-foreground">{item.role}</p></footer></blockquote><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Depoimento anterior" onClick={() => setIndex((index + testimonials.length - 1) % testimonials.length)}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Próximo depoimento" onClick={() => setIndex((index + 1) % testimonials.length)}><ArrowRight /></Button></div></div>
    <p aria-live="polite" className="mt-6 text-right text-xs text-muted-foreground">{index + 1} / {testimonials.length}</p>
  </div>;
}