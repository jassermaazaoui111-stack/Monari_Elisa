export default function InformazioniLegaliPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 prose-none">
      <h1 className="font-display text-3xl italic text-inchiostro mb-8">
        Informazioni legali
      </h1>

      <div className="space-y-8 text-sm text-inchiostro/75 leading-relaxed">
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Titolare
          </h2>
          <p>
            [Ragione sociale] — P.IVA [xxxxxxxxxxx] — Sede legale: [indirizzo] —
            Email: [email] — PEC: [pec, se presente]
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Diritto di recesso
          </h2>
          <p>
            Ai sensi del Codice del Consumo, hai 14 giorni dalla ricezione del
            prodotto per recedere dall'acquisto senza fornire motivazioni.
            [Dettaglia qui la procedura di reso.]
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Spedizioni e resi
          </h2>
          <p>[Tempi di spedizione, corrieri usati, costi e modalità di reso.]</p>
        </div>
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Privacy e cookie
          </h2>
          <p>
            [Testo informativa privacy completa — consigliato farla
            revisionare da un consulente/commercialista prima della
            pubblicazione, insieme al trattamento fiscale delle vendite.]
          </p>
        </div>
      </div>
    </section>
  );
}
