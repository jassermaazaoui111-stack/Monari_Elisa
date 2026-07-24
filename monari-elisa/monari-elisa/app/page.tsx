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
              Scopri la collezione
            </Link>
          </div>

          <div className="flex justify-center sm:justify-end">
            <img
              src="/immagini/hero-orecchini.jpg"
              alt="Orecchini a cerchio con pendente tulipano"
              className="w-full max-w-sm rounded-md"
            />
          </div>
        </div>
      </section>

      {inEvidenza.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-2xl italic text-inchiostro mb-8">
            In evidenza
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
            {inEvidenza.map((p) => (
              <ProductCard key={p.slug} prodotto={p} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-6 sm:grid-cols-3">
        {[
          { nome: "Anelli", href: "/prodotti/anelli" },
          { nome: "Orecchini", href: "/prodotti/orecchini" },
          { nome: "Bracciali", href: "/prodotti/bracciali" },
          { nome: "Collane", href: "/prodotti/collane" },
          { nome: "Set", href: "/prodotti/set" },
        ].map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex items-center justify-between rounded-md border border-bronzoChiaro bg-avorioScuro px-6 py-8 hover:border-bronzo transition-colors"
          >
            <span className="font-display text-xl italic text-inchiostro">
              {c.nome}
            </span>
            <span className="font-mono text-sm text-bronzo group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
