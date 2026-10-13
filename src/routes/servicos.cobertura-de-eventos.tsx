import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/cobertura-de-eventos")({
 head: () => pageHead("Cobertura de Eventos Médicos", "Suporte e atendimento médico para eventos com segurança e estrutura profissional.", "/servicos/cobertura-de-eventos"),
 component: () => <MedicusPage title="Cobertura de Eventos Médicos" description="Suporte e atendimento médico para eventos com segurança e estrutura profissional." />,
});
