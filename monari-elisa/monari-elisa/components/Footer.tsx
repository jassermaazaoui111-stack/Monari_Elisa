import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-bronzoChiaro/70 bg-avorioScuro">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div className="text-sm text-inchiostro/70">
          <p className="font-sans uppercase tracking-tag text-xs text-inchiostro mb-3">
            Negozio
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/prodotti/orecchini" className="hover:text-bosco">
                Orecchini
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm text-inchiostro/70">
          <p className="font-sans uppercase tracking-tag text-xs text-inchiostro mb-3">
            Servizio clienti
          </p>
          <ul className="space-y-2">
            <li><Link href="/condizioni-vendita" className="hover:text-bosco">Resi</Link></li>
            <li><Link href="/condizioni-vendita" className="hover:text-bosco">Spedizioni</Link></li>
            <li><Link href="/condizioni-vendita" className="hover:text-bosco">Garanzia</Link></li>
            <li><Link href="/informazioni-legali" className="hover:text-bosco">Contatti</Link></li>
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

      <div className="border-t border-bronzoChiaro/70 py-6 flex flex-col items-center gap-4">
        
          href="https://instagram.com/meorecchini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inchiostro/70 hover:text-bosco transition-colors"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <p className="font-mono text-xs text-inchiostro/50">
          © {new Date().getFullYear()} Monari Elisa
        </p>
      </div>
    </footer>
  );
}
