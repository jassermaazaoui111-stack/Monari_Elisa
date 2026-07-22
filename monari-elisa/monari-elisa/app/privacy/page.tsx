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
            a far funzionare il sito: dati identificativi e di contatto (nome,
            cognome, email, indirizzo di spedizione e fatturazione, telefono se
            fornito), dati relativi all&apos;ordine, dati di pagamento gestiti
            direttamente da Stripe (non conserviamo i numeri delle carte) e dati
            tecnici di navigazione raccolti tramite cookie.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Perché li trattiamo
          </h2>
          <p>
            Trattiamo i dati per eseguire il contratto di vendita (gestione
            ordine, spedizione, resi, assistenza), per adempiere agli obblighi
            fiscali di legge, per il nostro legittimo interesse alla sicurezza
            del sito, e — solo con il tuo consenso — per i cookie non tecnici ed
            eventuali comunicazioni promozionali. Il consenso è revocabile in
            qualsiasi momento.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            A chi li comunichiamo
          </h2>
          <p>
            I dati non vengono venduti a terzi. Possono essere comunicati solo a
            soggetti che collaborano al servizio, nominati responsabili del
            trattamento: Stripe (pagamenti), Vercel (hosting), il corriere per
            le spedizioni e il consulente fiscale. Eventuali trasferimenti fuori
            dall&apos;Unione Europea avvengono sulla base delle Clausole
            Contrattuali Standard approvate dalla Commissione Europea.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Per quanto tempo
          </h2>
          <p>
            I dati relativi agli ordini e ai documenti fiscali sono conservati
            per 10 anni, come previsto dalla normativa. I dati raccolti con il
            consenso sono conservati fino alla revoca dello stesso.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            I tuoi diritti
          </h2>
          <p>
            Puoi chiedere in ogni momento accesso, rettifica, cancellazione,
            limitazione, portabilità dei dati e opporti al trattamento
            scrivendo a [EMAIL CLIENTI] oppure a iamelisamonari@pec.it. Puoi
            inoltre presentare reclamo al Garante per la protezione dei dati
            personali (www.garanteprivacy.it).
          </p>
        </div>
      </div>
    </section>
  );
}
