"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CarrelloPage() {
  const { articoli, aggiornaQuantita, rimuovi, totale } = useCart();
  const [caricando, setCaricando] = useState(false);
  const [errore, setErrore] = useState<string | null>(null);

  async function vaiAlPagamento() {
    setErrore(null);
    setCaricando(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articoli }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setErrore(data.errore || "Qualcosa è andato storto. Riprova.");
      }
    } catch (e) {
      setErrore("Impossibile contattare il server di pagamento.");
    } finally {
      setCaricando(false);
    }
  }

  if (articoli.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl italic text-inchiostro">
          Il carrello è vuoto
        </h1>
        <Link
          href="/prodotti/gioielli"
          className="mt-6 inline-block rounded-full bg-bosco px-7 py-3 text-sm text-avorio hover:bg-boscoScuro transition-colors"
        >
          Sfoglia la collezione
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl italic text-inchiostro mb-10">
        Il tuo carrello
      </h1>
      <ul className="divide-y divide-bronzoChiaro">
        {articoli.map((a) => (
          <li key={a.chiave} className="flex items-center gap-5 py-6">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-avorioScuro">
              <Image
                src={a.immagine}
                alt={a.nome}
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg text-inchiostro">{a.nome}</p>
              <p className="font-mono text-sm text-bronzo mt-1">
                € {a.prezzo}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Diminuisci quantità"
                onClick={() => aggiornaQuantita(a.chiave, a.quantita - 1)}
                className="h-8 w-8 rounded-full border border-inchiostro/25 text-inchiostro hover:bg-inchiostro/5"
              >
                −
              </button>
              <span className="w-6 text-center font-mono text-sm">
                {a.quantita}
              </span>
              <button
                aria-label="Aumenta quantità"
                onClick={() => aggiornaQuantita(a.chiave, a.quantita + 1)}
                className="h-8 w-8 rounded-full border border-inchiostro/25 text-inchiostro hover:bg-inchiostro/5"
              >
                +
              </button>
            </div>
            <button
              onClick={() => rimuovi(a.chiave)}
              className="ml-2 text-xs text-inchiostro/50 underline underline-offset-2 hover:text-terra"
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-between border-t border-bronzoChiaro pt-6">
        <span className="font-display text-xl italic">Totale</span>
        <span className="font-mono text-xl text-bosco">
          € {totale.toFixed(2)}
        </span>
      </div>

      {errore && (
        <p className="mt-4 text-sm text-terra" role="alert">
          {errore}
        </p>
      )}

      <button
        onClick={vaiAlPagamento}
        disabled={caricando}
        className="mt-8 w-full rounded-full bg-bosco px-7 py-3.5 text-sm text-avorio hover:bg-boscoScuro transition-colors disabled:opacity-60"
      >
        {caricando ? "Ti sto reindirizzando…" : "Vai al pagamento"}
      </button>
      <p className="mt-3 text-center text-xs text-inchiostro/45">
        Pagamento sicuro gestito da Stripe. Le spese di spedizione si
        calcolano al passo successivo.
      </p>
    </section>
  );
}
