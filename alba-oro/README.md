# Alba & Oro — sito e-commerce

Sito per vendere gioielli, borse e orologi, con carrello e pagamenti veri
tramite Stripe. Costruito con Next.js.

## 1. Prova in locale (facoltativo, ma consigliato)

Serve [Node.js](https://nodejs.org) installato (versione 18 o superiore).

```bash
npm install
npm run dev
```

Apri http://localhost:3000

## 2. Collega Stripe (per far funzionare i pagamenti)

1. Crea un account su [stripe.com](https://stripe.com) (in italiano, gratuito).
2. Nella dashboard Stripe vai su **Sviluppatori → Chiavi API** e copia la
   **chiave segreta** (inizia con `sk_test_...` in modalità test).
3. Copia il file `.env.example` in un nuovo file chiamato `.env.local` e
   incolla la chiave:
   ```
   STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
   ```
4. In modalità test puoi pagare con la carta finta `4242 4242 4242 4242`,
   qualsiasi data futura e qualsiasi CVC.
5. Quando sei pronto a incassare per davvero, attiva l'account Stripe
   (richiede i dati della partita IVA) e sostituisci la chiave con quella
   che inizia con `sk_live_...`.

## 3. Metti i tuoi prodotti veri

Apri `lib/products.ts`. Ogni prodotto è un blocco tipo questo — modifica
nome, prezzo, descrizione e immagine (per ora servono URL di immagini;
se vuoi caricare foto tue, mettile nella cartella `public/immagini/` e
usa un percorso tipo `/immagini/anello.jpg`):

```ts
{
  slug: "anello-nodo-oro",       // usato nell'URL, niente spazi
  nome: "Anello Nodo",
  categoria: "gioielli",          // gioielli | borse | orologi
  prezzo: 189,
  descrizione: "...",
  immagine: "/immagini/anello.jpg",
  materiale: "Placcato oro 18k",
  inEvidenza: true,               // mostralo in home page
}
```

## 4. Pubblica il sito (Vercel — gratuito per iniziare)

1. Crea un account su [vercel.com](https://vercel.com) (puoi accedere con GitHub).
2. Carica questo progetto su GitHub (o trascina la cartella direttamente
   nell'interfaccia di Vercel).
3. Su Vercel scegli "Importa progetto" e seleziona questa cartella/repo.
4. Nelle impostazioni del progetto su Vercel, vai su **Environment
   Variables** e aggiungi `STRIPE_SECRET_KEY` con la tua chiave (usa
   `sk_live_...` per i pagamenti veri).
5. Clicca "Deploy". Dopo qualche minuto il sito è online con un indirizzo
   tipo `monari-elisa.vercel.app`. Puoi collegare un dominio tuo dopo, dalle
   impostazioni del progetto.

## 5. Prima di vendere davvero — cose legali da sistemare

Questo sito include una pagina `/informazioni-legali` con dei
segnaposto — **vanno completati prima di pubblicare**:

- Ragione sociale e numero di partita IVA della tua ragazza
- Informativa privacy completa (obbligatoria per legge)
- Termini di vendita e diritto di recesso (14 giorni per legge in Italia/UE)
- Come e quanto viene applicata l'IVA sulle vendite

Consiglio vivamente di far controllare questi punti da un commercialista
prima di aprire il sito al pubblico — vendere online con partita IVA ha
obblighi fiscali e di fatturazione specifici che non riguardano il sito
in sé, ma vanno rispettati comunque.

## Cosa include già il sito

- Homepage, pagine per categoria (gioielli/borse/orologi), pagina prodotto
- Carrello con quantità, persistito nel browser
- Pagamento vero tramite Stripe Checkout (carta di credito/debito)
- Banner cookie con accetta/rifiuta, conforme GDPR
- Design "boutique" caldo, responsive da mobile a desktop
