"use client";

import { useEffect, useState } from "react";

type Consenso = "accettato" | "rifiutato" | null;

const STORAGE_KEY = "monari-elisa-consenso-cookie";

export function leggiConsenso(): Consenso {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === "accettato" || v === "rifiutato") return v;
  return null;
}

export default function CookieConsent() {
  const [consenso, setConsenso] = useState<Consenso>(null);
  const [dettagliAperti, setDettagliAperti] = useState(false);
  const [mostraBanner, setMostraBanner] = useState(false);

  useEffect(() => {
    const salvato = leggiConsenso();
    setConsenso(salvato);
    setMostraBanner(salvato === null);
  }, []);

  function scegli(valore: Exclude<Consenso, null>) {
    window.localStorage.setItem(STORAGE_KEY, valore);
    setConsenso(valore);
    setMostraBanner(false);
    // Notifica il resto del sito (es. per caricare/rimuovere script di analytics)
    window.dispatchEvent(
      new CustomEvent("consenso-cookie-cambiato", { detail: valore })
    );
  }

  if (!mostraBanner) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-bronzoChiaro bg-avorio/98 backdrop-blur px-5 py-5 sm:px-8"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-inchiostro/85 leading-relaxed">
          <p>
            Usiamo cookie tecnici necessari al funzionamento del sito (es.
            carrello) e, solo con il tuo consenso, cookie di analisi per
            capire come viene usato il sito. Puoi accettare, rifiutare o
            scegliere nel dettaglio.
          </p>
          {dettagliAperti && (
            <ul className="mt-3 space-y-2 text-xs text-inchiostro/70">
              <li>
                <strong className="text-inchiostro">Necessari</strong> —
                sempre attivi: carrello, sicurezza, preferenze di lingua.
                Senza questi il sito non funziona correttamente.
              </li>
              <li>
                <strong className="text-inchiostro">Analitici</strong> —
                opzionali: ci aiutano a capire quali pagine e prodotti
                vengono visti di più. Attivati solo se accetti.
              </li>
            </ul>
          )}
          <button
            onClick={() => setDettagliAperti((v) => !v)}
            className="mt-2 underline underline-offset-2 text-xs text-bosco hover:text-boscoScuro"
          >
            {dettagliAperti ? "Nascondi dettagli" : "Mostra dettagli"}
          </button>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => scegli("rifiutato")}
            className="rounded-full border border-inchiostro/25 px-5 py-2.5 text-sm text-inchiostro hover:bg-inchiostro/5 transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={() => scegli("accettato")}
            className="rounded-full bg-bosco px-5 py-2.5 text-sm text-avorio hover:bg-boscoScuro transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
