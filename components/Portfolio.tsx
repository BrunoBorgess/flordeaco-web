"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    name: "Terras de Alphaville",
    area: "140m²",
    year: "2026",
    image: "/images/obra-1.jpeg",
  },
  {
    id: 2,
    name: "Setlife 2",
    area: "160m²",
    year: "2021",
    image: "/images/obra-2.jpeg",
  },
  {
    id: 3,
    name: "Damha Fit Ipigua",
    area: "140m²",
    year: "2026",
    image: "/images/obra-3.jpeg",
  },
  {
    id: 4,
    name: "Setlife 2",
    area: "150m²",
    year: "2023",
    image: "/images/obra-4.jpg",
  },
];

export default function Portfolio() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projetos" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl tracking-wide text-wine sm:text-3xl">
            OBRAS EM DESTAQUE
          </h2>
          <p className="mt-2 text-sm text-ink/60">
            Excelência em cada detalhe
          </p>
        </div>

        <div className="relative">
          <button
            aria-label="Anterior"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 -translate-x-4 rounded-full bg-white p-2 shadow-md transition hover:bg-cream lg:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="min-w-[78%] snap-start overflow-hidden rounded-md bg-white shadow-sm sm:min-w-[46%] lg:min-w-[24%]"
              >
                <div
                  className="h-56 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-ink">{p.name}</h3>
                  <p className="mt-1 text-xs text-ink/60">
                    Área construída: {p.area}
                  </p>
                  <p className="text-xs text-ink/60">Ano: {p.year}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Próximo"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 rounded-full bg-white p-2 shadow-md transition hover:bg-cream lg:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#projetos"
            className="rounded-sm bg-wine px-7 py-3 text-sm text-white transition hover:bg-wine-light"
          >
            Ver portfólio completo
          </a>
        </div>
      </div>
    </section>
  );
}
