import Link from "next/link";

export default function AnnullatoPage() {
  return (
    <section className="mx-auto max-w-xl px-6 py-28 text-center">
      <h1 className="font-display text-4xl italic text-inchiostro">
        Pagamento annullato
      </h1>
      <p className="mt-4 text-inchiostro/70">
        Nessun addebito è stato effettuato. Il carrello è ancora lì che ti
        aspetta.
      </p>
      <Link
        href="/carrello"
        className="mt-8 inline-block rounded-full bg-bosco px-7 py-3 text-sm text-avorio hover:bg-boscoScuro transition-colors"
      >
        Torna al carrello
      </Link>
    </section>
  );
}
