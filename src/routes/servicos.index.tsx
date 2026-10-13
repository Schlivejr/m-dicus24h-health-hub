import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/")({
 head: () => pageHead("Nossas soluções em saúde", "Serviços pensados para cuidar de você, da sua família, da sua empresa e de seus eventos.", "/servicos"),
 component: () => <MedicusPage title="Nossas soluções em saúde" description="Serviços pensados para cuidar de você, da sua família, da sua empresa e de seus eventos." kind="services" />,
});
