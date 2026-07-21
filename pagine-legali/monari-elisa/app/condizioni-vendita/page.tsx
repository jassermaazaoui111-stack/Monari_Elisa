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
            Tutti i prezzi sono espressi in euro e si intendono comprensivi
            delle imposte applicabili. Le fotografie dei prodotti sono
            indicative: lievi differenze di colore possono dipendere dalle
            impostazioni del tuo schermo. Le misure indicate sono approssimative.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Conclusione del contratto
          </h2>
          <p>
            Il contratto si perfeziona nel momento in cui ricevi da noi
            l&apos;email di conferma dell&apos;ordine. Ci riserviamo di non dare
            seguito a ordini incompleti, o nel caso in cui il prodotto non sia
            più disponibile: in tal caso riceverai il rimborso integrale.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Pagamenti
          </h2>
          <p>
            I pagamenti sono gestiti da Stripe Payments Europe Ltd. tramite
            connessione cifrata. Sono accettate le principali carte di credito e
            debito. I dati della carta non transitano dai nostri sistemi e non
            vengono da noi conservati.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Spedizioni
          </h2>
          <p>
            Spediamo in Italia, San Marino e Città del Vaticano. Il costo di
            spedizione è di 6,90 €. Gli ordini vengono preparati entro
            [N] giorni lavorativi e consegnati tramite [CORRIERE] entro
            [N] giorni lavorativi dalla spedizione. I tempi possono variare nei
            periodi di maggiore traffico.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Diritto di recesso
          </h2>
          <p className="mb-2">
            Ai sensi degli artt. 52 e seguenti del Codice del Consumo (D.Lgs.
            206/2005), se acquisti come consumatore hai diritto di recedere
            dall&apos;acquisto entro <strong>14 giorni</strong> dalla ricezione
            del prodotto, senza doverne indicare il motivo.
          </p>
          <p className="mb-2">
            Per esercitare il recesso è sufficiente inviare una comunicazione a
            [EMAIL CLIENTI] indicando il numero d&apos;ordine. Dovrai poi
            restituire il prodotto entro 14 giorni dalla comunicazione.
          </p>
          <p className="mb-2">
            Il prodotto deve essere restituito integro, non utilizzato, completo
            di eventuali cartellini ed etichette e nella confezione originale.
            Le spese di restituzione sono a carico [DEL CLIENTE / NOSTRO].
          </p>
          <p>
            Il rimborso viene effettuato entro 14 giorni dal ricevimento del
            reso, con lo stesso mezzo di pagamento utilizzato per
            l&apos;acquisto.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Esclusioni al diritto di recesso
          </h2>
          <p>
            Per ragioni igieniche, il diritto di recesso non si applica agli
            orecchini qualora la confezione sigillata sia stata aperta, ai sensi
            dell&apos;art. 59 lett. e) del Codice del Consumo. Sono inoltre
            esclusi i prodotti personalizzati su richiesta del cliente.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Garanzia legale di conformità
          </h2>
          <p>
            Su tutti i prodotti si applica la garanzia legale di conformità di{" "}
            <strong>24 mesi</strong> prevista dal Codice del Consumo. In caso di
            difetto hai diritto alla riparazione, alla sostituzione o, quando
            queste non siano possibili, alla riduzione del prezzo o alla
            risoluzione del contratto. Segnala il difetto a [EMAIL CLIENTI]
            allegando una fotografia.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Reclami e risoluzione delle controversie
          </h2>
          <p>
            Per qualsiasi reclamo puoi scrivere a [EMAIL CLIENTI]. In caso di
            controversia puoi inoltre ricorrere alla piattaforma europea di
            risoluzione online delle controversie (ODR) messa a disposizione
            dalla Commissione Europea.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Legge applicabile
          </h2>
          <p>
            Il contratto è regolato dalla legge italiana. Restano salve le
            disposizioni inderogabili a tutela del consumatore previste dalla
            legge del paese di residenza.
          </p>
        </div>
      </div>
    </section>
  );
}
