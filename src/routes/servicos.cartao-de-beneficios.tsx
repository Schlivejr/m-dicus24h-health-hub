import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/servicos/cartao-de-beneficios")({
 head: () => pageHead("Cartão de Benefícios", "Uma alternativa prática para ampliar o acesso a consultas, exames e serviços de saúde.", "/servicos/cartao-de-beneficios"),
 component: () => <MedicusPage title="Cartão de Benefícios" description="Uma alternativa prática para ampliar o acesso a consultas, exames e serviços de saúde." />,
});
