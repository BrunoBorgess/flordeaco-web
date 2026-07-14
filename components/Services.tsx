import { Home, HardHat, ClipboardList, CircleDollarSign, KeyRound } from "lucide-react";

const SERVICES = [
  {
    icon: Home,
    title: "Projeto Arquitetônico",
    text: "Projetos exclusivos e personalizados para o seu estilo de vida.",
  },
  {
    icon: HardHat,
    title: "Construção",
    text: "Execução com alto padrão de qualidade e atenção a cada detalhe.",
  },
  {
    icon: ClipboardList,
    title: "Gerenciamento de Obras",
    text: "Acompanhamento completo e relatórios em todas as etapas da obra.",
  },
  {
    icon: CircleDollarSign,
    title: "Financiamento",
    text: "Auxiliamos na busca das melhores condições de financiamento.",
  },
  {
    icon: KeyRound,
    title: "Entrega Completa",
    text: "Do projeto à entrega das chaves, cuidamos de tudo para você.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <h2 className="font-display text-2xl tracking-wide text-wine sm:text-3xl">
            NOSSOS SERVIÇOS
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50">
                <Icon className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-sm text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
