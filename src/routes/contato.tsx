import { createFileRoute } from "@tanstack/react-router";
import { MedicusPage, pageHead } from "@/components/medicus-page";
export const Route = createFileRoute("/contato")({
 head: () => pageHead("Fale com a Médicus24h", "Entre em contato com a unidade João Pessoa pelos canais oficiais.", "/contato"),
 component: () => <MedicusPage title="Fale com a Médicus24h" description="Entre em contato com a unidade João Pessoa pelos canais oficiais." kind="contact" />,
});
