// Header
"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { numeroArticoli } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-bronzoChiaro/70 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 sm:py-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-5xl text-bronzo leading-none sm:text-7xl">ME</span>
          <span className="font-display italic text-lg text-inchiostro/70 sm:text-2xl">Jolie boucle</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-sans text-xs uppercase tracking-tag text-inchiostro/80 sm:text-sm sm:gap-6">
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
