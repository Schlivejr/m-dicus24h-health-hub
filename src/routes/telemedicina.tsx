import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/telemedicina")({
 head: () => pageHead("Telemedicina", "Atendimento médico remoto com praticidade e segurança.", "/telemedicina"),
 component: () => <MedicusPage title="Telemedicina" description="Atendimento médico remoto com praticidade e segurança." kind="service" />,
});
