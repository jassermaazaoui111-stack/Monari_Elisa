export const metadata = {
  title: "Termini e condizioni di vendita — Monari Elisa",
};

export default function CondizioniVenditaPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl italic text-inchiostro mb-8">
        Termini e condizioni di vendita
      </h1>

      <div className="space-y-8 text-sm text-inchiostro/75 leading-relaxed">
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Venditore
          </h2>
          <p>
            Elisa Monari — P.IVA 02944010996 — Via Raffaele Ricca 22, 16139
            Genova (GE), Italia — PEC: iamelisamonari@pec.it — Email:
            [EMAIL CLIENTI]
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Prodotti e prezzi
          </h2>
          <p>
            Tutti i prezzi sono in euro e comprensivi delle imposte applicabili.
            Le fotografie sono indicative: lievi differenze di colore possono
            dipendere dal tuo schermo. Le misure indicate sono approssimative.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Conclusione del contratto
          </h2>
          <p>
            Il contratto si perfeziona quando ricevi da noi l&apos;email di
            conferma dell&apos;ordine. Ci riserviamo di non dare seguito a
            ordini incompleti o a prodotti non più disponibili: in tal caso
            riceverai il rimborso integrale.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Pagamenti
          </h2>
          <p>
            I pagamenti sono gestiti da Stripe tramite connessione cifrata. Sono
            accettate le principali carte di credito e debito. I dati della
            carta non transitano dai nostri sistemi.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Spedizioni
          </h2>
          <p>
            Spediamo in Italia, San Marino e Città del Vaticano. Il costo di
            spedizione è di 6,90 €. Gli ordini vengono preparati entro [N]
            giorni lavorativi e consegnati tramite [CORRIERE] entro [N] giorni
            lavorativi dalla spedizione.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Diritto di recesso
          </h2>
          <p className="mb-2">
            Ai sensi degli artt. 52 e seguenti del Codice del Consumo (D.Lgs.
            206/2005), se acquisti come consumatore hai diritto di recedere
            entro 14 giorni dalla ricezione del prodotto, senza indicarne il
            motivo. È sufficiente inviare una comunicazione a [EMAIL CLIENTI]
            indicando il numero d&apos;ordine, e restituire il prodotto entro 14
            giorni dalla comunicazione.
          </p>
          <p className="mb-2">
            Il prodotto deve essere restituito integro, non utilizzato, completo
            di cartellini ed etichette e nella confezione originale. Le spese di
            restituzione sono a carico [DEL CLIENTE / NOSTRO].
          </p>
          <p>
            Il rimborso viene effettuato entro 14 giorni dal ricevimento del
            reso, con lo stesso mezzo di pagamento usato per l&apos;acquisto.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Esclusioni al diritto di recesso
          </h2>
          <p>
            Per ragioni igieniche il diritto di recesso non si applica agli
            orecchini qualora la confezione sigillata sia stata aperta, ai sensi
            dell&apos;art. 59 lett. e) del Codice del Consumo. Sono esclusi anche
            i prodotti personalizzati su richiesta.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Garanzia legale di conformità
          </h2>
          <p>
            Su tutti i prodotti si applica la garanzia legale di conformità di
            24 mesi prevista dal Codice del Consumo. In caso di difetto hai
            diritto alla riparazione, alla sostituzione o, se non possibili,
            alla riduzione del prezzo o alla risoluzione del contratto. Segnala
            il difetto a [EMAIL CLIENTI] allegando una fotografia.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Reclami e controversie
          </h2>
          <p>
            Per qualsiasi reclamo scrivi a [EMAIL CLIENTI]. In caso di
            controversia puoi ricorrere alla piattaforma europea di risoluzione
            online delle controversie (ODR) della Commissione Europea.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Legge applicabile
          </h2>
          <p>
            Il contratto è regolato dalla legge italiana. Restano salve le
            disposizioni inderogabili a tutela del consumatore del paese di
            residenza.
          </p>
        </div>
      </div>
    </section>
  );
}
