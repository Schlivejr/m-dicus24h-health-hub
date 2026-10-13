import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/fisioterapia-domiciliar")({
 head: () => pageHead("Fisioterapia Domiciliar", "Atendimento fisioterapêutico no conforto da sua casa.", "/servicos/fisioterapia-domiciliar"),
 component: () => <MedicusPage title="Fisioterapia Domiciliar" description="Atendimento fisioterapêutico no conforto da sua casa." />,
});
