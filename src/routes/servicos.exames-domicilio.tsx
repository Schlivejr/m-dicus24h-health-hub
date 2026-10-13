import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/exames-domicilio")({
 head: () => pageHead("Exames a Domicílio", "Realização de exames com praticidade, conforto e comodidade no local escolhido.", "/servicos/exames-domicilio"),
 component: () => <MedicusPage title="Exames a Domicílio" description="Realização de exames com praticidade, conforto e comodidade no local escolhido." />,
});
