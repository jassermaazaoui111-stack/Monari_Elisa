import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { prodotti, NOMI_CATEGORIE, ORDINE_CATEGORIE } from "@/lib/products";

export default function OrecchiniPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl italic text-inchiostro mb-6">
        Orecchini
      </h1>

      <div className="flex flex-wrap gap-3 mb-10 font-sans text-sm uppercase tracking-tag">
        <Link
          href="/prodotti/orecchini"
          className="rounded-full border border-bosco bg-bosco px-4 py-1.5 text-avorio"
        >
          Tutti
        </Link>
        {ORDINE_CATEGORIE.map((cat) => (
          <Link
            key={cat}
            href={`/prodotti/${cat}`}
            className="rounded-full border border-bronzoChiaro px-4 py-1.5 text-inchiostro/80 hover:border-bosco hover:text-bosco transition-colors"
          >
            {NOMI_CATEGORIE[cat]}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
        {prodotti.map((p) => (
          <ProductCard key={p.slug} prodotto={p} />
        ))}
      </div>
    </section>
  );
}
