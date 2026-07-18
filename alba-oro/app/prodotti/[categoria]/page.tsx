import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProdottiPerCategoria, Product } from "@/lib/products";

const NOMI: Record<Product["categoria"], string> = {
  gioielli: "Gioielli",
  borse: "Borse",
  orologi: "Orologi",
};

export function generateStaticParams() {
  return Object.keys(NOMI).map((categoria) => ({ categoria }));
}

export default function CategoriaPage({
  params,
}: {
  params: { categoria: string };
}) {
  const categoria = params.categoria as Product["categoria"];
  if (!NOMI[categoria]) notFound();

  const lista = getProdottiPerCategoria(categoria);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl italic text-inchiostro mb-10">
        {NOMI[categoria]}
      </h1>
      {lista.length === 0 ? (
        <p className="text-inchiostro/60">
          Nessun prodotto qui per ora — torna presto.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
          {lista.map((p) => (
            <ProductCard key={p.slug} prodotto={p} />
          ))}
        </div>
      )}
    </section>
  );
}
