import { notFound } from "next/navigation";
import Image from "next/image";
import { getProdotto, prodotti } from "@/lib/products";
import AggiungiAlCarrello from "./AggiungiAlCarrello";

export function generateStaticParams() {
  return prodotti.map((p) => ({ categoria: p.categoria, slug: p.slug }));
}

export default function ProdottoPage({
  params,
}: {
  params: { categoria: string; slug: string };
}) {
  const prodotto = getProdotto(params.slug);
  if (!prodotto || prodotto.categoria !== params.categoria) notFound();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 grid gap-12 sm:grid-cols-2">
      <div className="aspect-[4/5] overflow-hidden rounded-md bg-avorioScuro">
        <Image
          src={prodotto.immagine}
          alt={prodotto.nome}
          width={800}
          height={1000}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-display text-4xl italic text-inchiostro">
          {prodotto.nome}
        </h1>
        {prodotto.materiale && (
          <p className="mt-2 text-xs uppercase tracking-tag text-inchiostro/50">
            {prodotto.materiale}
          </p>
        )}
        <p className="mt-6 font-mono text-2xl text-bosco">
          € {prodotto.prezzo}
        </p>
        <p className="mt-6 text-inchiostro/75 leading-relaxed max-w-md">
          {prodotto.descrizione}
        </p>
        <div className="mt-10">
          <AggiungiAlCarrello prodotto={prodotto} />
        </div>
      </div>
    </section>
  );
}
