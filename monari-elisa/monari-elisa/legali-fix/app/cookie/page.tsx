export const metadata = {
  title: "Cookie policy — Monari Elisa",
};

export default function CookiePage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl italic text-inchiostro mb-8">
        Cookie policy
      </h1>

      <div className="space-y-8 text-sm text-inchiostro/75 leading-relaxed">
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Cosa sono i cookie
          </h2>
          <p>
            I cookie sono piccoli file di testo che il sito salva sul tuo
            dispositivo. Servono a far funzionare alcune funzioni (come il
            carrello) e, in certi casi, a raccogliere informazioni su come il
            sito viene utilizzato.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Cookie tecnici necessari
          </h2>
          <p className="mb-2">
            Vengono installati automaticamente perché senza di essi il sito non
            può funzionare. Non richiedono il tuo consenso.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>monari-elisa-carrello</strong> — conserva i prodotti che
              hai aggiunto al carrello. Salvato nel browser, durata: fino alla
              cancellazione manuale.
            </li>
            <li>
              <strong>monari-elisa-consenso-cookie</strong> — ricorda la scelta
              che hai fatto sul banner dei cookie. Durata: 12 mesi.
            </li>
            <li>
              <strong>Cookie di Stripe</strong> — installati durante il
              pagamento per prevenire le frodi e completare la transazione in
              sicurezza.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Cookie di analisi
          </h2>
          <p>
            Se acconsenti tramite il banner, utilizziamo cookie che ci aiutano a
            capire quali pagine vengono visitate e come migliorare il sito. I
            dati sono trattati in forma aggregata. Puoi rifiutarli senza alcuna
            conseguenza sulla navigazione o sugli acquisti.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Come gestire o revocare il consenso
          </h2>
          <p>
            Puoi modificare la tua scelta in qualsiasi momento cancellando i
            cookie dal tuo browser: al ritorno sul sito il banner comparirà di
            nuovo. Puoi anche bloccare o eliminare i cookie dalle impostazioni
            del browser (Chrome, Firefox, Safari, Edge). Disattivare i cookie
            tecnici potrebbe però impedire il corretto funzionamento del
            carrello e del pagamento.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Contatti
          </h2>
          <p>
            Per qualsiasi domanda sui cookie puoi scrivere a [EMAIL CLIENTI].
            Per il trattamento dei dati personali consulta la{" "}
            <a href="/privacy" className="underline hover:text-bosco">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
