import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/pronto-atendimento-domiciliar")({
 head: () => pageHead("Pronto Atendimento a Domicílio", "Cuidados médicos sem a necessidade de deslocamento, proporcionando conforto e agilidade.", "/servicos/pronto-atendimento-domiciliar"),
 component: () => <MedicusPage title="Pronto Atendimento a Domicílio" description="Cuidados médicos sem a necessidade de deslocamento, proporcionando conforto e agilidade." />,
});
