"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col items-start leading-none">
          <span className="font-display text-xl tracking-wide text-white">
            FLOR DE AÇO
          </span>
          <span className="mt-1 text-[10px] tracking-[0.25em] text-gold">
            ENGENHARIA E CONSTRUÇÃO
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/90 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5517992446765"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-sm border border-gold/40 bg-wine px-5 py-2.5 text-sm text-white transition hover:bg-wine-light lg:flex"
        >
          <Phone size={15} />
          Solicitar orçamento
        </a>

        {/* Mobile trigger */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 rounded-md bg-ink/95 p-6 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-white/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5517992446765"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-sm bg-wine px-5 py-3 text-sm text-white"
          >
            <Phone size={15} />
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
