import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/area-protegida")({
 head: () => pageHead("Área Protegida", "Proteção e atendimento médico para empresas, instituições, condomínios e diferentes ambientes.", "/servicos/area-protegida"),
 component: () => <MedicusPage title="Área Protegida" description="Proteção e atendimento médico para empresas, instituições, condomínios e diferentes ambientes." />,
});
