"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/products";

const NOMI: Record<Product["categoria"], string> = {
  anelli: "Anelli",
  orecchini: "Orecchini",
  bracciali: "Bracciali",
  collane: "Collane",
  set: "Set",
  borse: "Borse",
};

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

  const categorieConProdotti = ORDINE.filter((cat) => cat !== "borse");

  return (
    <header className="sticky top-0 z-40 border-b border-bronzoChiaro/70 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-6xl text-bronzo leading-none">
          ME
        </Link>

        <nav className="hidden gap-6 font-sans text-sm uppercase tracking-tag text-inchiostro/80 lg:flex">
          <Link href="/" className="hover:text-bosco transition-colors">
            Home
          </Link>
          {categorieConProdotti.map((cat) => (
            <Link
              key={cat}
              href={`/prodotti/${cat}`}
              className="hover:text-bosco transition-colors"
            >
