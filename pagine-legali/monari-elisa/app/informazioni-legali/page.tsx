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
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Titolare dell&apos;attività
          </h2>
          <p>
            Elisa Monari
            <br />
            Partita IVA 02944010996
            <br />
            Via Raffaele Ricca 22 — 16139 Genova (GE), Italia
            <br />
            PEC: iamelisamonari@pec.it
            <br />
            Email: [EMAIL CLIENTI]
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Documenti
          </h2>
          <ul className="space-y-1">
            <li>
              <a href="/privacy" className="underline hover:text-bosco">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/cookie" className="underline hover:text-bosco">
                Cookie policy
              </a>
            </li>
            <li>
              <a href="/termini-uso" className="underline hover:text-bosco">
                Termini e condizioni d&apos;uso
              </a>
            </li>
            <li>
              <a
                href="/condizioni-vendita"
                className="underline hover:text-bosco"
              >
                Termini e condizioni di vendita
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Assistenza
          </h2>
          <p>
            Per informazioni su ordini, spedizioni o resi puoi scrivere a
            [EMAIL CLIENTI]. Rispondiamo di norma entro due giorni lavorativi.
          </p>
        </div>
      </div>
    </section>
  );
}
