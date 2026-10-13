import { ShieldCheck, Cross, CalendarDays, FlaskConical, Dumbbell, House, Ambulance, MonitorSmartphone } from "lucide-react";

export const whatsapp = "https://wa.me/5583991022983";
export const portal = "https://portal.medicus24h.com.br/";
export const services = [
  [ShieldCheck, "Área Protegida", "Proteção e atendimento médico para empresas, instituições, condomínios e diferentes ambientes.", "/servicos/area-protegida"],
  [Cross, "Cartão de Benefícios", "Uma alternativa prática para ampliar o acesso a consultas, exames e serviços de saúde.", "/servicos/cartao-de-beneficios"],
  [CalendarDays, "Cobertura de Eventos Médicos", "Suporte e atendimento médico para eventos com segurança e estrutura profissional.", "/servicos/cobertura-de-eventos"],
  [FlaskConical, "Exames a Domicílio", "Realização de exames com praticidade, conforto e comodidade no local escolhido.", "/servicos/exames-domicilio"],
  [Dumbbell, "Fisioterapia Domiciliar", "Atendimento fisioterapêutico no conforto da sua casa.", "/servicos/fisioterapia-domiciliar"],
  [House, "Pronto Atendimento a Domicílio", "Cuidados médicos sem a necessidade de deslocamento, proporcionando conforto e agilidade.", "/servicos/pronto-atendimento-domiciliar"],
  [Ambulance, "Remoção Médica", "Transferência segura de pacientes com equipe preparada e estrutura adequada.", "/servicos/remocao-medica"],
  [MonitorSmartphone, "Telemedicina", "Atendimento médico remoto com praticidade e segurança.", "/telemedicina"],
] as const;

// Replace null with verified numbers only. Numeric values animate on entry.
export const statistics: { label: string; value: number | null }[] = [
  { label: "atendimentos", value: null }, { label: "profissionais", value: null },
  { label: "empresas atendidas", value: null }, { label: "anos de experiência", value: null },
];
export const testimonials = [1, 2, 3].map(id => ({ id, quote: "[INSERIR DEPOIMENTO REAL]", name: "[INSERIR NOME]", role: "[INSERIR EMPRESA/CARGO]" }));