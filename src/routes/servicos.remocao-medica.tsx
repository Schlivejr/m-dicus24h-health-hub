import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/remocao-medica")({
 head: () => pageHead("Remoção Médica", "Transferência segura de pacientes com equipe preparada e estrutura adequada.", "/servicos/remocao-medica"),
 component: () => <MedicusPage title="Remoção Médica" description="Transferência segura de pacientes com equipe preparada e estrutura adequada." />,
});
