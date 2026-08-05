import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { prodotti } from "@/lib/products";

export default function Home() {
  const inEvidenza = prodotti.filter((p) => p.inEvidenza);
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl italic text-inchiostro leading-tight text-left max-w-2xl">
              Piccoli gioielli da indossare tutti i giorni, scelti con cura uno a uno.
            </h1>

            <Link
              href="/prodotti/orecchini"
              className="mt-8 inline-block rounded-full bg-bosco px-7 py-3 text-sm text-avorio hover:bg-boscoScuro transition-colors"
            >
