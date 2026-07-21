import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ prodotto }: { prodotto: Product }) {
  return (
    <Link
      href={`/prodotti/${prodotto.categoria}/${prodotto.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-md bg-avorioScuro">
        <div className="aspect-[4/5] overflow-hidden">
          <Image
            src={prodotto.immagine}
            alt={prodotto.nome}
            width={600}
            height={750}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        {/* Cartellino prezzo — l'elemento distintivo del design */}
        <div className="absolute -bottom-1 left-4 flex items-center gap-2 rounded-t-md bg-bosco px-3 py-2 shadow-sm">
          <span className="h-2 w-2 rounded-full border border-avorio/70" aria-hidden />
          <span className="font-mono text-xs tracking-wide text-avorio">
            € {prodotto.prezzo}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-display text-lg text-inchiostro">{prodotto.nome}</p>
        {prodotto.materiale && (
          <p className="mt-0.5 text-xs uppercase tracking-tag text-inchiostro/50">
            {prodotto.materiale}
          </p>
        )}
      </div>
    </Link>
  );
}
