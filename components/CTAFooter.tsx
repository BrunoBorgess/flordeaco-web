import { Phone, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function CTAFooter() {
  return (
    <section
      id="contato"
      className="relative h-[70vh] lg:h-[100vh] min-h-[420px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta-obra.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
        <h2 className="max-w-md font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Seu novo lar começa aqui.
        </h2>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
          Solicite um orçamento e descubra como podemos transformar seu
          projeto em realidade.
        </p>

        <p className="mt-6 text-sm text-white/70">
          Entre em contato, conheça nosso escritório ou acompanhe nossas obras.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5517992446765"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-wine px-7 py-3.5 text-sm font-medium text-white transition hover:bg-wine-light"
          >
            <Phone size={18} />
            Falar no WhatsApp
          </a>

          {/* Localização */}
          <a
            href="https://maps.app.goo.gl/LKwpBSAGbHdwFm2h9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <MapPin size={18} />
            Como chegar
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/flordeaco_engenharia?igsh=MTRpcDRoZDM4dDBrZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <FaInstagram size={18} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}