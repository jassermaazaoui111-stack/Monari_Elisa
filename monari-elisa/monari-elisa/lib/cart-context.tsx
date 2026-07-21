"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Product } from "./products";

export type CartItem = {
  chiave: string; // identificatore univoco per riga (slug + eventuale variante)
  slug: string; // slug del prodotto reale, usato per ricalcolare il prezzo lato server
  nome: string;
  prezzo: number;
  immagine: string;
  quantita: number;
};

type CartContextType = {
  articoli: CartItem[];
  aggiungi: (prodotto: Product, quantita?: number, chiaveVariante?: string) => void;
  rimuovi: (chiave: string) => void;
  aggiornaQuantita: (chiave: string, quantita: number) => void;
  svuota: () => void;
  totale: number;
  numeroArticoli: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "alba-oro-carrello";

export function CartProvider({ children }: { children: ReactNode }) {
  const [articoli, setArticoli] = useState<CartItem[]>([]);
  const [caricato, setCaricato] = useState(false);

  useEffect(() => {
    try {
      const salvato = window.localStorage.getItem(STORAGE_KEY);
      if (salvato) setArticoli(JSON.parse(salvato));
    } catch (e) {
      console.error("Impossibile leggere il carrello salvato", e);
    }
    setCaricato(true);
  }, []);

  useEffect(() => {
    if (!caricato) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(articoli));
    } catch (e) {
      console.error("Impossibile salvare il carrello", e);
    }
  }, [articoli, caricato]);

  function aggiungi(prodotto: Product, quantita = 1, chiaveVariante?: string) {
    const chiave = chiaveVariante ? `${prodotto.slug}::${chiaveVariante}` : prodotto.slug;
    setArticoli((prev) => {
      const esistente = prev.find((a) => a.chiave === chiave);
      if (esistente) {
        return prev.map((a) =>
          a.chiave === chiave ? { ...a, quantita: a.quantita + quantita } : a
        );
      }
      return [
        ...prev,
        {
          chiave,
          slug: prodotto.slug,
          nome: prodotto.nome,
          prezzo: prodotto.prezzo,
          immagine: prodotto.immagine,
          quantita,
        },
      ];
    });
  }

  function rimuovi(chiave: string) {
    setArticoli((prev) => prev.filter((a) => a.chiave !== chiave));
  }

  function aggiornaQuantita(chiave: string, quantita: number) {
    if (quantita <= 0) return rimuovi(chiave);
    setArticoli((prev) =>
      prev.map((a) => (a.chiave === chiave ? { ...a, quantita } : a))
    );
  }

  function svuota() {
    setArticoli([]);
  }

  const totale = articoli.reduce((sum, a) => sum + a.prezzo * a.quantita, 0);
  const numeroArticoli = articoli.reduce((sum, a) => sum + a.quantita, 0);

  return (
    <CartContext.Provider
      value={{
        articoli,
        aggiungi,
        rimuovi,
        aggiornaQuantita,
        svuota,
        totale,
        numeroArticoli,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve essere usato dentro CartProvider");
  return ctx;
}
