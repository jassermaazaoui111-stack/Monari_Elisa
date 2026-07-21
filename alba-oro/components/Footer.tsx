import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-bronzoChiaro/70 bg-avorioScuro">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-inchiostro">Monari Elisa</p>
          <p className="mt-3 text-sm text-inchiostro/70 leading-relaxed">
            Gioielli, borse e orologi scelti con cura, a prezzi onesti.
          </p>
        </div>
        <div className="text-sm text-inchiostro/70">
          <p className="font-sans uppercase tracking-tag text-xs text-inchiostro mb-3">
            Negozio
          </p>
          <ul className="space-y-2">
            <li><Link href="/prodotti/gioielli" className="hover:text-bosco">Gioielli</Link></li>
            <li><Link href="/prodotti/borse" className="hover:text-bosco">Borse</Link></li>
            <li><Link href="/prodotti/orologi" className="hover:text-bosco">Orologi</Link></li>
          </ul>
        </div>
        <div className="text-sm text-inchiostro/70">
          <p className="font-sans uppercase tracking-tag text-xs text-inchiostro mb-3">
            Informazioni
          </p>
          <ul className="space-y-2">
            <li><Link href="/informazioni-legali" className="hover:text-bosco">Termini, privacy e P.IVA</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bronzoChiaro/70 py-5 text-center font-mono text-xs text-inchiostro/50">
        © {new Date().getFullYear()} Monari Elisa
      </div>
    </footer>
  );
}
