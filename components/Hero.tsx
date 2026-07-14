import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      {/* Imagem de fundo — trocar pela foto real da obra */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-obra.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
        <h1 className="max-w-xl font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          CONSTRUÍMOS
          <br />
          MAIS DO QUE
          <br />
          CASAS.
          <br />
          <span className="text-gold">CRIAMOS</span>
          <br />
          <span className="text-gold">PATRIMÔNIOS.</span>
        </h1>

        <p className="mt-6 max-w-md text-sm text-white/80 sm:text-base">
          Projetos e obras residenciais de alto padrão em São José do Rio
          Preto e região.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/5517000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-sm bg-wine px-7 py-3.5 text-sm text-white transition hover:bg-wine-light"
          >
            <Phone size={15} />
            Solicitar orçamento
          </a>
          <a
            href="#projetos"
            className="flex items-center justify-center rounded-sm border border-white/50 px-7 py-3.5 text-sm text-white transition hover:border-white hover:bg-white/10"
          >
            Ver obras
          </a>
        </div>
      </div>
    </section>
  );
}
