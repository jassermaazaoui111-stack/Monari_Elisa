"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/products";

export default function AggiungiAlCarrello({ prodotto }: { prodotto: Product }) {
  const { aggiungi } = useCart();
  const [aggiunto, setAggiunto] = useState(false);

  function handleClick() {
    aggiungi(prodotto);
    setAggiunto(true);
    setTimeout(() => setAggiunto(false), 1800);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-bosco px-8 py-3 text-sm text-avorio hover:bg-boscoScuro transition-colors"
    >
      {aggiunto ? "Aggiunto al carrello ✓" : "Aggiungi al carrello"}
    </button>
  );
}
