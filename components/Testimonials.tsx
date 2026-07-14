"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Luciano",
      video: "/videos/depoimento-1.mp4",
    },
    {
      name: "Alessandro",
      video: "/videos/depoimento-2.mp4",
    },
  ];

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-display text-2xl tracking-wide text-wine sm:text-3xl">
            DEPOIMENTOS
          </h2>

          <p className="mt-2 text-sm text-ink/60">
            Veja a experiência de clientes que confiaram na Flor de Aço Engenharia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <video
                controls
                preload="metadata"
                className="aspect-video w-full bg-black"
                poster="/images/thumb-video.jpg"
              >
                <source src={item.video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-wine">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-ink/70">
                  Depoimento de um cliente sobre sua experiência com a Flor de
                  Aço Engenharia.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}