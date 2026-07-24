"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { prodotti, Product } from "@/lib/products";

const NOMI: Record<Product["categoria"], string> = {
  anelli: "Anelli",
  orecchini: "Orecchini",
  bracciali: "Bracciali",
  collane: "Collane",
  set: "Set",
  borse: "Borse",
};

// Ordine di visualizzazione preferito nel menu
const ORDINE: Product["categoria"][] = [
  "anelli",
  "orecchini",
  "bracciali",
  "collane",
  "set",
  "borse",
];

export default function Header() {
  const { numeroArticoli } = useCart();

  // Mostra in navigazione solo le categorie che hanno almeno un prodotto
  const categorieConProdotti = ORDINE.filter((cat) => cat !== "borse");

  return (
    <header className="sticky top-0 z-40 border-b border-bronzoChiaro/70 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <Link href="/" className="flex items-baseline gap-3">
  <span className="font-display text-8xl text-bronzo">ME</span>
</Link>
        <nav className="hidden gap-6 font-sans text-sm uppercase tracking-tag text-inchiostro/80 lg:flex">
          {categorieConProdotti.map((cat) => (
            <Link
              key={cat}
              href={`/prodotti/${cat}`}
              className="hover:text-bosco transition-colors"
            >
              {NOMI[cat]}
            </Link>
          ))}
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
