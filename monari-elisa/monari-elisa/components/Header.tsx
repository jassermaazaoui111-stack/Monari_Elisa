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

const ORDINE: Product["categoria"][] = ["orecchini"];

export default function Header() {
  const { numeroArticoli } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-bronzoChiaro/70 bg-avorio/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-6xl
