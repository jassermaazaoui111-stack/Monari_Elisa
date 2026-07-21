"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { numeroArticoli } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-bronzoChiaro/70 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-2xl tracking-wide text-inchiostro">
          Monari Elisa
        </Link>
        <nav className="hidden gap-8 font-sans text-sm uppercase tracking-tag text-inchiostro/80 sm:flex">
          <Link href="/prodotti/gioielli" className="hover:text-bosco transition-colors">
            Gioielli
          </Link>
          <Link href="/prodotti/borse" className="hover:text-bosco transition-colors">
            Borse
          </Link>
          <Link href="/prodotti/orologi" className="hover:text-bosco transition-colors">
            Orologi
          </Link>
        </nav>
        <Link
          href="/carrello"
          className="relative font-sans text-sm uppercase tracking-tag text-inchiostro/80 hover:text-bosco transition-colors"
        >
          Carrello
          {numeroArticoli > 0 && (
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-bosco px-1 font-mono text-xs text-avorio">
              {numeroArticoli}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
