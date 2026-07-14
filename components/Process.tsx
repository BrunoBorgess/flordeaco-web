const STEPS = [
  {
    n: "01",
    title: "Conversa inicial",
    text: "Entendemos seu sonho e suas necessidades.",
  },
  {
    n: "02",
    title: "Projeto",
    text: "Desenvolvemos um projeto personalizado.",
  },
  {
    n: "03",
    title: "Aprovação",
    text: "Aprovação do projeto e planejamento da obra.",
  },
  {
    n: "04",
    title: "Construção",
    text: "Execução da obra com qualidade e transparência.",
  },
  {
    n: "05",
    title: "Entrega das chaves",
    text: "Seu sonho realizado.",
  },
];

export default function Process() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-16 text-center font-display text-2xl tracking-wide text-white sm:text-3xl">
          NOSSO PROCESSO
        </h2>

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-5 sm:gap-x-6">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              {/* linha conectora — desktop */}
              {i < STEPS.length - 1 && (
                <span className="absolute left-1/2 top-6 hidden h-px w-full bg-gold/30 sm:block" />
              )}
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-sm text-gold">
                {step.n}
              </div>
              <h3 className="font-display text-sm text-white">{step.title}</h3>
              <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-white/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
