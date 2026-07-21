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
  slug: string;
  nome: string;
  prezzo: number;
  immagine: string;
  quantita: number;
};

type CartContextType = {
  articoli: CartItem[];
  aggiungi: (prodotto: Product, quantita?: number) => void;
  rimuovi: (slug: string) => void;
  aggiornaQuantita: (slug: string, quantita: number) => void;
  svuota: () => void;
  totale: number;
  numeroArticoli: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "monari-elisa-carrello";

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

  function aggiungi(prodotto: Product, quantita = 1) {
    setArticoli((prev) => {
      const esistente = prev.find((a) => a.slug === prodotto.slug);
      if (esistente) {
        return prev.map((a) =>
          a.slug === prodotto.slug
            ? { ...a, quantita: a.quantita + quantita }
            : a
        );
      }
      return [
        ...prev,
        {
          slug: prodotto.slug,
          nome: prodotto.nome,
          prezzo: prodotto.prezzo,
          immagine: prodotto.immagine,
          quantita,
        },
      ];
    });
  }

  function rimuovi(slug: string) {
    setArticoli((prev) => prev.filter((a) => a.slug !== slug));
  }

  function aggiornaQuantita(slug: string, quantita: number) {
    if (quantita <= 0) return rimuovi(slug);
    setArticoli((prev) =>
      prev.map((a) => (a.slug === slug ? { ...a, quantita } : a))
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
