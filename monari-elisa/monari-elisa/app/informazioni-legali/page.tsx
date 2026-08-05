export const metadata = {
  title: "Informazioni legali — Monari Elisa",
};

export default function InformazioniLegaliPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl italic text-inchiostro mb-8">
        Informazioni legali
      </h1>
      <div className="space-y-8 text-sm text-inchiostro/75 leading-relaxed">
        <p>
          Elisa Monari — Partita IVA 02944010996 — Via Raffaele Ricca 22, 16139
          Genova (GE), Italia — PEC: iamelisamonari@pec.it — Email:
          elisamonari@icloud.com
        </p>
        <p>
          Per informazioni su ordini, spedizioni o resi scrivi a
          elisamonari@icloud.com. Rispondiamo di norma entro due giorni
          lavorativi.
        </p>
        <p>
          <a href="/privacy" className="underline hover:text-bosco">Privacy policy</a>{" · "}
          <a href="/cookie" className="underline hover:text-bosco">Cookie policy</a>{" · "}
          <a href="/termini-uso" className="underline hover:text-bosco">Termini d&apos;uso</a>{" · "}
          <a href="/condizioni-vendita" className="underline hover:text-bosco">Condizioni di vendita</a>
        </p>
      </div>
    </section>
  );
}
