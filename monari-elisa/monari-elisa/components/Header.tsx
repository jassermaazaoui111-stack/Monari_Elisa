// Header
"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { numeroArticoli } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-bronzoChiaro/70 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex flex-col items-center gap-3 px-4 py-4 md:flex-row md:justify-between md:gap-6 md:px-6 md:py-5 max-w-6xl">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-5xl text-bronzo leading-none md:text-6xl">ME</span>
          <span className="font-display italic text-lg text-inchiostro/70 md:text-2xl">Jolie boucle</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-sans text-xs uppercase tracking-tag text-inchiostro/80 md:text-sm md:gap-6">
          <Link href="/" className="hover:text-bosco transition-colors">
            Home
          </Link>
          <Link href="/prodotti/orecchini" className="hover:text-bosco transition-colors">
            Orecchini
          </Link>
          <Link href="/info" className="hover:text-bosco transition-colors">
            Info
          </Link>
          <a
            href="https://wa.me/393518519078?text=Ciao!%20Vorrei%20informazioni%20sui%20vostri%20orecchini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bosco transition-colors"
          >
            WhatsApp
          </a>
          <Link href="/carrello" className="relative hover:text-bosco transition-colors">
            Carrello
            {numeroArticoli > 0 && (
              <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-bosco px-1 font-mono text-xs text-avorio">
                {numeroArticoli}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
