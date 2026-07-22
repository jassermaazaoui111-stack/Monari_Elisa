import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { prodotti } from "@/lib/products";

export default function Home() {
  const inEvidenza = prodotti.filter((p) => p.inEvidenza);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="font-mono text-xs uppercase tracking-tag text-bronzo">
          Nuova selezione
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl italic leading-[1.1] text-inchiostro sm:text-6xl">
          Piccoli oggetti, scelti con cura.
        </h1>
        <p className="mt-6 max-w-md text-inchiostro/70 leading-relaxed">
          Gioielli e accessori selezionati uno a uno, a prezzi onesti.
          Ogni pezzo arriva con la sua etichetta — nessuna sorpresa,
          nessun fronzolo.
        </p>
        <Link
          href="/prodotti/orecchini"
          className="mt-8 inline-block rounded-full bg-bosco px-7 py-3 text-sm text-avorio hover:bg-boscoScuro transition-colors"
        >
          Scopri la collezione
        </Link>
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
