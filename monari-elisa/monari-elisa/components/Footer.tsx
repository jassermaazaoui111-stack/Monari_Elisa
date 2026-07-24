import Link from "next/link";
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

export default function Footer() {
  const categorieConProdotti = ORDINE.filter((cat) => cat !== "borse");

  return (
    <footer className="mt-24 border-t border-bronzoChiaro/70 bg-avorioScuro">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-2">
        <div className="text-sm text-inchiostro/70">
          <p className="font-sans uppercase tracking-tag text-xs text-inchiostro mb-3">
            Negozio
          </p>
          <ul className="space-y-2">
            {categorieConProdotti.map((cat) => (
              <li key={cat}>
                <Link href={`/prodotti/${cat}`} className="hover:text-bosco">
                  {NOMI[cat]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-inchiostro/70">
          <p className="font-sans uppercase tracking-tag text-xs text-inchiostro mb-3">
            Termini legali
          </p>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-bosco">Privacy policy</Link></li>
            <li><Link href="/cookie" className="hover:text-bosco">Cookie policy</Link></li>
            <li><Link href="/termini-uso" className="hover:text-bosco">Termini e condizioni d&apos;uso</Link></li>
            <li><Link href="/condizioni-vendita" className="hover:text-bosco">Termini e condizioni di vendita</Link></li>
            <li><Link href="/informazioni-legali" className="hover:text-bosco">Informazioni legali</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bronzoChiaro/70 py-5 text-center font-mono text-xs text-inchiostro/50">
        © {new Date().getFullYear()} Monari Elisa
      </div>
    </footer>
  );
}
