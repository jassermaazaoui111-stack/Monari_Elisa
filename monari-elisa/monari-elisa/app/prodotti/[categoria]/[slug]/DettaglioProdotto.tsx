"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/products";

export default function DettaglioProdotto({ prodotto }: { prodotto: Product }) {
  const { aggiungi } = useCart();
  const [varianteIndex, setVarianteIndex] = useState(0);
  const [aggiunto, setAggiunto] = useState(false);

  const variante = prodotto.varianti?.[varianteIndex];
  const immagineAttuale = variante?.immagine ?? prodotto.immagine;

  function handleClick() {
    // Se ci sono varianti, il nome nel carrello include il colore scelto
    // e ogni colore diventa una riga separata nel carrello
    const prodottoDaAggiungere = variante
      ? { ...prodotto, nome: `${prodotto.nome} — ${variante.nome}`, immagine: immagineAttuale }
      : prodotto;
    aggiungi(prodottoDaAggiungere, 1, variante?.nome);
    setAggiunto(true);
    setTimeout(() => setAggiunto(false), 1800);
  }

  return (
    <>
      <div className="aspect-[4/5] overflow-hidden rounded-md bg-avorioScuro">
        <Image
          src={immagineAttuale}
          alt={prodotto.nome}
          width={800}
          height={1000}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-display text-4xl italic text-inchiostro">
          {prodotto.nome}
        </h1>
        {prodotto.materiale && (
          <p className="mt-2 text-xs uppercase tracking-tag text-inchiostro/50">
            {prodotto.materiale}
          </p>
        )}
        {prodotto.misure && (
          <p className="mt-1 text-xs uppercase tracking-tag text-inchiostro/50">
            {prodotto.misure}
          </p>
        )}
        <p className="mt-6 font-mono text-2xl text-bosco">
          € {prodotto.prezzo}
        </p>
        <p className="mt-6 text-inchiostro/75 leading-relaxed max-w-md">
          {prodotto.descrizione}
        </p>

        {prodotto.varianti && prodotto.varianti.length > 0 && (
          <div className="mt-8">
            <p className="text-xs uppercase tracking-tag text-inchiostro/50 mb-3">
              Colore: {variante?.nome}
            </p>
            <div className="flex gap-3">
              {prodotto.varianti.map((v, i) => (
                <button
                  key={v.nome}
                  onClick={() => setVarianteIndex(i)}
                  className={`h-14 w-14 overflow-hidden rounded-full border-2 transition-colors ${
                    i === varianteIndex
                      ? "border-bosco"
                      : "border-transparent hover:border-bronzoChiaro"
                  }`}
                  aria-label={v.nome}
                  aria-pressed={i === varianteIndex}
                >
                  <Image
                    src={v.immagine}
                    alt={v.nome}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <button
            onClick={handleClick}
            className="rounded-full bg-bosco px-8 py-3 text-sm text-avorio hover:bg-boscoScuro transition-colors"
          >
            {aggiunto ? "Aggiunto al carrello ✓" : "Aggiungi al carrello"}
          </button>
        </div>
      </div>
    </>
  );
}
