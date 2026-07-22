export const metadata = {
  title: "Privacy policy — Monari Elisa",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl italic text-inchiostro mb-8">
        Privacy policy
      </h1>

      <div className="space-y-8 text-sm text-inchiostro/75 leading-relaxed">
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Titolare del trattamento
          </h2>
          <p>
            Elisa Monari — P.IVA 02944010996 — Via Raffaele Ricca 22, 16139
            Genova (GE), Italia — PEC: iamelisamonari@pec.it — Email:
            [EMAIL CLIENTI]
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Quali dati raccogliamo
          </h2>
          <p className="mb-2">
            Trattiamo esclusivamente i dati necessari a gestire il tuo ordine e
            a far funzionare il sito:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Dati identificativi e di contatto: nome, cognome, indirizzo email,
              indirizzo di spedizione e fatturazione, numero di telefono se
              fornito.
            </li>
            <li>
              Dati relativi all&apos;ordine: prodotti acquistati, importo, data
              e stato della spedizione.
            </li>
            <li>
              Dati di pagamento: gestiti direttamente da Stripe. Non riceviamo
              né conserviamo i numeri delle carte di credito.
            </li>
            <li>
              Dati tecnici di navigazione: indirizzo IP, tipo di browser e
              dispositivo, raccolti tramite cookie tecnici.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Perché li trattiamo e su quale base giuridica
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Esecuzione del contratto</strong> (art. 6.1.b GDPR):
              gestione dell&apos;ordine, spedizione, resi, assistenza clienti.
            </li>
            <li>
              <strong>Obbligo di legge</strong> (art. 6.1.c GDPR): conservazione
              dei documenti fiscali e contabili.
            </li>
            <li>
              <strong>Legittimo interesse</strong> (art. 6.1.f GDPR): sicurezza
              del sito e prevenzione delle frodi.
            </li>
            <li>
              <strong>Consenso</strong> (art. 6.1.a GDPR): cookie non tecnici ed
              eventuali comunicazioni promozionali. Puoi revocarlo in qualsiasi
              momento.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            A chi comunichiamo i dati
          </h2>
          <p>
            I dati non vengono venduti né ceduti a terzi per finalità
            commerciali. Possono essere comunicati esclusivamente a soggetti che
            collaborano al servizio, nominati responsabili del trattamento:
            Stripe Payments Europe Ltd. (pagamenti), Vercel Inc. (hosting del
            sito), [CORRIERE] (spedizioni) e il consulente fiscale che cura la
            contabilità. Alcuni fornitori possono trattare dati fuori
            dall&apos;Unione Europea; in tal caso il trasferimento avviene sulla
            base delle Clausole Contrattuali Standard approvate dalla
            Commissione Europea.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Per quanto tempo li conserviamo
          </h2>
          <p>
            I dati relativi agli ordini e ai documenti fiscali sono conservati
            per 10 anni, come previsto dalla normativa civilistica e fiscale. I
            dati raccolti con il consenso sono conservati fino alla revoca dello
            stesso. I dati di navigazione sono conservati per il periodo
            indicato nella cookie policy.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            I tuoi diritti
          </h2>
          <p>
            Puoi in ogni momento chiedere l&apos;accesso ai tuoi dati, la loro
            rettifica o cancellazione, la limitazione del trattamento, la
            portabilità, e puoi opporti al trattamento. Per esercitare questi
            diritti scrivi a [EMAIL CLIENTI] oppure a iamelisamonari@pec.it.
            Risponderemo entro 30 giorni. Se ritieni che il trattamento violi la
            normativa, puoi presentare reclamo al Garante per la protezione dei
            dati personali (www.garanteprivacy.it).
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Modifiche
          </h2>
          <p>
            Questa informativa può essere aggiornata. La versione pubblicata su
            questa pagina è sempre quella vigente.
          </p>
        </div>
      </div>
    </section>
  );
}
