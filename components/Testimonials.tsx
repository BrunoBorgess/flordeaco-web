"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "A Flor de Aço tornou nosso sonho realidade. Profissionais incríveis!",
    name: "Juliana e Rafael",
    image: "/images/depoimento-1.jpg",
  },
  {
    quote: "Processo transparente e atendimento impecável do início ao fim.",
    name: "Amanda F.",
    image: "/images/depoimento-2.jpg",
  },
  {
    quote: "Cada detalhe foi pensado com muito cuidado. Resultado perfeito!",
    name: "Beatriz N.",
    image: "/images/depoimento-3.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-display text-2xl tracking-wide text-wine sm:text-3xl">
            DEPOIMENTOS
          </h2>
          <p className="mt-2 text-sm text-ink/60">
            A satisfação de quem confiou no nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="overflow-hidden rounded-md bg-white shadow-sm">
              <div
                className="group relative h-64 cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url('${t.image}')` }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-ink/10 transition group-hover:bg-ink/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-wine shadow-md">
                    <Play size={18} fill="currentColor" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm italic leading-relaxed text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-wine">{t.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* dots — mantidos por fidelidade ao layout, funcionais se vc trocar por carousel real no mobile */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Depoimento ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition ${
                active === i ? "bg-wine" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
