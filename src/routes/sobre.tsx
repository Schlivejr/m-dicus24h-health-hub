import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/sobre")({
 head: () => pageHead("Sobre a Médicus24h", "Cuidado humanizado e soluções em saúde para pessoas, famílias, empresas e instituições.", "/sobre"),
 component: () => <MedicusPage title="Sobre a Médicus24h" description="Cuidado humanizado e soluções em saúde para pessoas, famílias, empresas e instituições." kind="about" />,
});
