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
          <p>
            Vengono installati automaticamente perché senza di essi il sito non
            può funzionare, e non richiedono il tuo consenso. Comprendono il
            cookie del carrello (conserva i prodotti aggiunti), quello che
            ricorda la tua scelta sul banner dei cookie, e i cookie di Stripe
            installati durante il pagamento per prevenire le frodi.
          </p>
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
            Come gestire il consenso
          </h2>
          <p>
            Puoi modificare la tua scelta in qualsiasi momento cancellando i
            cookie dal browser: al ritorno sul sito il banner comparirà di
            nuovo. Puoi anche bloccarli dalle impostazioni del browser, ma
            disattivare i cookie tecnici potrebbe impedire il funzionamento del
            carrello e del pagamento.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Contatti
          </h2>
          <p>
            Per domande sui cookie scrivi a [EMAIL CLIENTI]. Per il trattamento
            dei dati consulta la privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
