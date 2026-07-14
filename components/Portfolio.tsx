"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    name: "Terras de Alphaville",
    area: "140m²",
    year: "2026",
    images: [
      "/images/obra-1.jpeg",
      "/images/obra-1-2.jpg",
      "/images/obra-1-3.jpg",
      "/images/obra-1-4.jpg",
      "/images/obra-1-5.jpg",
    ],
  },
  {
    id: 2,
    name: "Setlife 2",
    area: "160m²",
    year: "2021",
    images: [
      "/images/obra-2.jpeg",
      "/images/obra-2-2.jpg",
      "/images/obra-2-3.jpg",
      "/images/obra-2-4.jpg",
      "/images/obra-2-5.jpg",
    ],
  },
  {
    id: 3,
    name: "Damha Fit Ipigua",
    area: "140m²",
    year: "2026",
    images: [
      "/images/obra-3.jpeg",
      "/images/obra-3-2.jpg",
      "/images/obra-3-3.jpg",
      "/images/obra-3-4.jpg",
      "/images/obra-3-5.jpg",
    ],
  },
  {
    id: 4,
    name: "Setlife 2",
    area: "150m²",
    year: "2023",
    images: [
      "/images/obra-4.jpg",
      "/images/obra-4-2.jpg",
      "/images/obra-4-3.jpg",
      "/images/obra-4-4.jpg",
      "/images/obra-4-5.jpg",
    ],
  },
];

export default function Portfolio() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const active = PROJECTS.find((p) => p.id === openProject) ?? null;

  const openLightbox = (id: number) => {
    setOpenProject(id);
    setImgIndex(0);
  };

  const closeLightbox = () => setOpenProject(null);

  const nextImg = () => {
    if (!active) return;
    setImgIndex((i) => (i + 1) % active.images.length);
  };

  const prevImg = () => {
    if (!active) return;
    setImgIndex((i) => (i - 1 + active.images.length) % active.images.length);
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
                onClick={() => openLightbox(p.id)}
                className="min-w-[78%] cursor-pointer snap-start overflow-hidden rounded-md bg-white shadow-sm transition hover:shadow-md sm:min-w-[46%] lg:min-w-[24%]"
              >
                <div
                  className="h-56 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.images[0]}')` }}
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

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            aria-label="Fechar"
            onClick={closeLightbox}
            className="absolute right-5 top-5 text-white/80 transition hover:text-white"
          >
            <X size={28} />
          </button>

          <div
            className="relative flex w-full max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Imagem anterior"
              onClick={prevImg}
              className="absolute left-0 z-10 -translate-x-2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white sm:-translate-x-14"
            >
              <ChevronLeft size={22} />
            </button>

            <img
              src={active.images[imgIndex]}
              alt={`${active.name} - foto ${imgIndex + 1}`}
              className="max-h-[80vh] w-full rounded-md object-contain"
            />

            <button
              aria-label="Próxima imagem"
              onClick={nextImg}
              className="absolute right-0 z-10 translate-x-2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white sm:translate-x-14"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-sm font-medium">{active.name}</p>
            <p className="mt-1 text-xs text-white/60">
              {imgIndex + 1} / {active.images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
