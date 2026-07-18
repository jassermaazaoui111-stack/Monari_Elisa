export type Product = {
  slug: string;
  nome: string;
  categoria: "gioielli" | "borse" | "orologi";
  prezzo: number; // in euro
  descrizione: string;
  immagine: string;
  materiale?: string;
  inEvidenza?: boolean;
};

// Dati segnaposto — sostituisci con i prodotti reali e le foto quando pronti.
// Modifica direttamente questo file: ogni prodotto è un oggetto nell'array.
export const prodotti: Product[] = [
  {
    slug: "anello-nodo-oro",
    nome: "Anello Nodo",
    categoria: "gioielli",
    prezzo: 189,
    descrizione:
      "Un anello sottile con motivo a nodo, placcato oro 18k. Pensato per essere indossato ogni giorno o sovrapposto ad altri anelli.",
    immagine:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    materiale: "Placcato oro 18k",
    inEvidenza: true,
  },
  {
    slug: "collana-goccia-ambra",
    nome: "Collana Goccia d'Ambra",
    categoria: "gioielli",
    prezzo: 245,
    descrizione:
      "Ciondolo a goccia con ambra naturale su catena sottile in argento dorato. Ogni pietra ha venature uniche.",
    immagine:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    materiale: "Argento dorato, ambra naturale",
  },
  {
    slug: "orecchini-mezzaluna",
    nome: "Orecchini Mezzaluna",
    categoria: "gioielli",
    prezzo: 129,
    descrizione:
      "Orecchini a mezzaluna, leggeri e scultorei, rifiniti a mano. Chiusura a farfalla in acciaio ipoallergenico.",
    immagine:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    materiale: "Ottone dorato",
  },
  {
    slug: "borsa-tote-cuoio",
    nome: "Tote in Cuoio Naturale",
    categoria: "borse",
    prezzo: 315,
    descrizione:
      "Una tote capiente in vero cuoio, con manici rinforzati e interno in tela grezza. Invecchia bene, si consuma con carattere.",
    immagine:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    materiale: "Cuoio pieno fiore",
    inEvidenza: true,
  },
  {
    slug: "borsa-a-tracolla-mini",
    nome: "Tracolla Mini",
    categoria: "borse",
    prezzo: 189,
    descrizione:
      "Piccola tracolla strutturata, perfetta per l'essenziale. Tracolla regolabile e chiusura a magnete.",
    immagine:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
    materiale: "Pelle saffiano",
  },
  {
    slug: "zaino-morbido-tela",
    nome: "Zaino in Tela Morbida",
    categoria: "borse",
    prezzo: 225,
    descrizione:
      "Zaino dal taglio morbido, con dettagli in cuoio e chiusura a coulisse. Comodo per l'uso quotidiano.",
    immagine:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
    materiale: "Tela e cuoio",
  },
  {
    slug: "orologio-quadrante-crema",
    nome: "Orologio Quadrante Crema",
    categoria: "orologi",
    prezzo: 389,
    descrizione:
      "Cassa sottile in acciaio con quadrante color crema e cinturino in pelle intercambiabile. Movimento al quarzo giapponese.",
    immagine:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop",
    materiale: "Acciaio, pelle",
    inEvidenza: true,
  },
  {
    slug: "orologio-cinturino-maglia",
    nome: "Orologio Cinturino a Maglia",
    categoria: "orologi",
    prezzo: 349,
    descrizione:
      "Un orologio versatile con cinturino a maglia milanese, adatto a ogni occasione dal lavoro alla sera.",
    immagine:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1200&auto=format&fit=crop",
    materiale: "Acciaio dorato",
  },
];

export function getProdotto(slug: string) {
  return prodotti.find((p) => p.slug === slug);
}

export function getProdottiPerCategoria(categoria: Product["categoria"]) {
  return prodotti.filter((p) => p.categoria === categoria);
}
