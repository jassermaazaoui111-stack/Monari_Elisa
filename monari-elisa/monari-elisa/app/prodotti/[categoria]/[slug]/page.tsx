import { notFound } from "next/navigation";
import { getProdotto, prodotti } from "@/lib/products";
import DettaglioProdotto from "./DettaglioProdotto";

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
      <DettaglioProdotto prodotto={prodotto} />
    </section>
  );
}
