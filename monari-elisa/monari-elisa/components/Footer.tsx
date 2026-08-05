import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-bronzoChiaro/70 bg-avorioScuro py-10 text-center text-sm text-inchiostro/70">
      <div className="flex flex-wrap justify-center gap-4 px-6">
        <Link href="/prodotti/orecchini" className="hover:text-bosco">Orecchini</Link>
        <Link href="/condizioni-vendita" className="hover:text-bosco">Spedizioni e resi</Link>
        <Link href="/privacy" className="hover:text-bosco">Privacy</Link>
        <Link href="/cookie" className="hover:text-bosco">Cookie</Link>
        <Link href="/informazioni-legali" className="hover:text-bosco">Informazioni legali</Link>
      </div>
      <p className="mt-6 font-mono text-xs text-inchiostro/50">
        © {new Date().getFullYear()} Monari Elisa
      </p>
    </footer>
  );
}
