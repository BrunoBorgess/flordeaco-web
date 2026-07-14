import { Phone } from "lucide-react";

export default function CTAFooter() {
  return (
    <section id="contato" className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta-obra.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
        <h2 className="max-w-md font-display text-3xl leading-tight text-white sm:text-4xl">
          Seu novo lar começa aqui.
        </h2>
        <p className="mt-4 max-w-sm text-sm text-white/80">
          Solicite um orçamento e descubra como podemos transformar seu
          projeto em realidade.
        </p>
        <a
          href="https://wa.me/5517000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-fit items-center gap-2 rounded-sm bg-wine px-7 py-3.5 text-sm text-white transition hover:bg-wine-light"
        >
          <Phone size={15} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
