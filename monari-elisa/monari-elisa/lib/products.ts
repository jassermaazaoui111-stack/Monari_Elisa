export type Variante = {
  nome: string;
  immagine: string;
};

export type Categoria = "cerchi" | "lobo" | "pendenti" | "ear-cuff";

export type Product = {
  slug: string;
  nome: string;
  categoria: Categoria;
  prezzo: number;
  descrizione: string;
  immagine: string;
  materiale?: string;
  misure?: string;
  varianti?: Variante[];
  inEvidenza?: boolean;
};

export const NOMI_CATEGORIE: Record<Categoria, string> = {
  cerchi: "Cerchi",
  lobo: "A lobo",
  pendenti: "Pendenti",
  "ear-cuff": "Ear cuff",
};

export const ORDINE_CATEGORIE: Categoria[] = ["cerchi", "lobo", "pendenti", "ear-cuff"];

export const prodotti: Product[] = [
  {
    slug: "ear-cuff-rotondo-semplice",
    nome: "Ear Cuff Rotondo Spesso Semplice",
    categoria: "ear-cuff",
    prezzo: 5,
    descrizione:
      "Ear cuff rotondo a fascia spessa, effetto scanalato. Si indossa senza foro, basta agganciarlo al bordo dell'orecchio. Disponibile in argento e oro.",
    immagine: "/immagini/ear-cuff-rotondo-argento.jpg",
    materiale: "Acciaio inox 316L",
    misure: "Spessore 4,5 mm, diametro esterno 20 mm, diametro interno 10 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/ear-cuff-rotondo-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/ear-cuff-rotondo-oro.jpg" },
    ],
  },
    slug: "orecchini-triplo-cuore",
    nome: "Orecchini Triplo Cuore con Zirconi",
    categoria: "lobo",
    prezzo: 12.8,
    descrizione:
      "Orecchini pendenti con tre cuori scintillanti in gradazione, ogni cuore incorniciato da un'aureola di brillanti zirconi bianchi. Superficie lucida e piacevole al tatto, resistente alla ruggine e allo scolorimento. Perfetti come regalo simbolico d'amore. Disponibili in argento e oro, in più colori.",
    immagine: "/immagini/triplo-cuore-argento-bianco.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Lunghezza 2,8 cm, larghezza 0,7 cm",
    inEvidenza: true,
    varianti: [
      { nome: "Argento bianco", immagine: "/immagini/triplo-cuore-argento-bianco.jpg" },
      { nome: "Argento verde", immagine: "/immagini/triplo-cuore-argento-verde.jpg" },
      { nome: "Oro verde", immagine: "/immagini/triplo-cuore-oro-verde.jpg" },
      { nome: "Oro rosa", immagine: "/immagini/triplo-cuore-oro-rosa.jpg" },
      { nome: "Oro rosso", immagine: "/immagini/triplo-cuore-oro-rosso.jpg" },
    ],
  },
  {
    slug: "orecchini-cerchio-zirconi",
    nome: "Orecchini a Cerchio con Zirconi",
    categoria: "cerchi",
    prezzo: 9,
    descrizione:
      "Orecchini a cerchio con fila di zirconi taglio smeraldo, chiusura a scatto. Disponibili in due finiture, argento e oro.",
    immagine: "/immagini/orecchini-cerchio-diamanti.jpeg",
    materiale: "Acciaio inox, zirconi",
    misure: "Diametro 15 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-cerchio-diamanti.jpeg" },
      { nome: "Oro", immagine: "/immagini/orecchini-cerchio-zirconi-oro.jpeg" },
    ],
  },
  {
    slug: "orecchini-punto-luce-azzurro",
    nome: "Orecchini Punto Luce Azzurro",
    categoria: "lobo",
    prezzo: 12,
    descrizione:
      "Orecchini a lobo con cristallo sfaccettato color azzurro, montatura in metallo satinato. Un tocco di colore delicato.",
    immagine: "/immagini/orecchini-punto-luce-azzurro.jpeg",
    materiale: "Metallo, cristallo",
  },
  {
    slug: "orecchino-clip-strass",
    nome: "Orecchino Clip con Strass",
    categoria: "pendenti",
    prezzo: 3.6,
    descrizione:
      "Orecchino a clip, non richiede il foro nel lobo. Chiusura regolabile e strass sfaccettato. Venduto singolarmente.",
    immagine: "/immagini/orecchino-clip-strass-singolo.jpeg",
    misure: "Lunghezza 20 mm",
  },
  {
    slug: "orecchino-cuore",
    nome: "Orecchino a Cuore",
    categoria: "lobo",
    prezzo: 5.4,
    descrizione:
      "Piccolo orecchino a forma di cuore con zircone centrale, chiusura a farfalla. Venduto singolarmente. Disponibile in oro e argento.",
    immagine: "/immagini/orecchino-cuore-oro.jpeg",
    misure: "Dimensione 5 mm",
    varianti: [
      { nome: "Oro", immagine: "/immagini/orecchino-cuore-oro.jpeg" },
      { nome: "Argento", immagine: "/immagini/orecchino-cuore-argento.jpeg" },
    ],
  },
  {
    slug: "orecchini-tulipano",
    nome: "Orecchini a Cerchio Tulipano",
    categoria: "pendenti",
    prezzo: 5.4,
    descrizione:
      "Orecchini a cerchio in argento con ciondolo a forma di tulipano smaltato. Disponibili in giallo e rosa.",
    immagine: "/immagini/orecchini-tulipano-rosa.jpeg",
    misure: "Diametro interno 10 mm, spessore cerchio 2 mm, ciondolo 0,7×1,8 cm",
    varianti: [
      { nome: "Giallo", immagine: "/immagini/orecchini-tulipano-giallo.jpeg" },
      { nome: "Rosa", immagine: "/immagini/orecchini-tulipano-rosa.jpeg" },
    ],
  },
  {
    slug: "orecchini-croce",
    nome: "Orecchini a Cerchio con Croce",
    categoria: "cerchi",
    prezzo: 7.2,
    descrizione:
      "Orecchini a cerchio con piccola croce incastonata di zirconi. Disponibili in oro e argento.",
    immagine: "/immagini/orecchini-croce-oro.jpeg",
    materiale: "Acciaio inox",
    misure: "Diametro interno 8 mm, spessore cerchio 2 mm, croce 5,4×7,4 mm",
    varianti: [
      { nome: "Oro", immagine: "/immagini/orecchini-croce-oro.jpeg" },
      { nome: "Argento", immagine: "/immagini/orecchini-croce-argento.jpeg" },
    ],
  },
  {
    slug: "orecchini-cuore-piccolo",
    nome: "Orecchini a Cerchio con Cuore",
    categoria: "cerchi",
    prezzo: 7.2,
    descrizione:
      "Orecchini a cerchio con piccolo cuore incastonato di strass. Disponibili in argento e oro.",
    immagine: "/immagini/orecchini-cuore-piccolo-argento.jpg",
    materiale: "Acciaio inox 316L, strass",
    misure: "Diametro interno 8 mm, spessore cerchio 2 mm, cuore 5,4×6,1 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-cuore-piccolo-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/orecchini-cuore-piccolo-oro.jpg" },
    ],
  },
  {
    slug: "orecchini-cuore-pendente",
    nome: "Orecchini a Cerchio con Cuore Pendente",
    categoria: "pendenti",
    prezzo: 7.2,
    descrizione:
      "Orecchini a cerchio con piccolo cuore pendente incastonato di strass. Disponibili in argento e oro.",
    immagine: "/immagini/orecchini-cuore-pendente-argento.jpg",
    materiale: "Acciaio inox 316L, strass",
    misure: "Diametro interno 8 mm, spessore cerchio 2 mm, lunghezza totale 1,7 cm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-cuore-pendente-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/orecchini-cuore-pendente-oro.jpg" },
    ],
  },
  {
    slug: "orecchini-disco-scolpito",
    nome: "Orecchini Disco Scolpito",
    categoria: "lobo",
    prezzo: 7.9,
    descrizione:
      "Orecchini a bottone dalla forma organica e scolpita, superficie liscia e lucida.",
    immagine: "/immagini/orecchini-disco-oro.jpg",
    materiale: "Acciaio inox 316L",
    misure: "Dimensione 2,8×2,1 cm",
  },
  {
    slug: "orecchini-rosa-nera-perla",
    nome: "Orecchini Rosa con Perla",
    categoria: "lobo",
    prezzo: 7.2,
    descrizione:
      "Orecchini a bottone a forma di rosa smaltata nera, con perla artificiale al centro.",
    immagine: "/immagini/orecchini-rosa-nera-perla.jpg",
    materiale: "Acciaio inox 316L, perla artificiale",
    misure: "1,2×1,2 cm",
  },
  {
    slug: "orecchini-halo-cuore",
    nome: "Orecchini a Cuore Halo",
    categoria: "lobo",
    prezzo: 8,
    descrizione:
      "Orecchini a bottone a forma di cuore, con zircone centrale circondato da un'aureola di pietre più piccole. Disponibili in argento e oro.",
    immagine: "/immagini/orecchini-halo-cuore-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "9,3×9,4 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-halo-cuore-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/orecchini-halo-cuore-oro.jpg" },
    ],
  },
  {
    slug: "orecchini-catena-cristalli",
    nome: "Orecchini a Catena di Cristalli",
    categoria: "pendenti",
    prezzo: 8,
    descrizione:
      "Orecchini pendenti lunghi, con una fila continua di cristalli incastonati. Un tocco luminoso e slanciato.",
    immagine: "/immagini/orecchini-catena-cristalli.png",
    materiale: "Acciaio inox, zirconia",
    misure: "Lunghezza 5 cm",
  },
  {
    slug: "orecchini-swirl",
    nome: "Orecchini a Conchiglia Swirl",
    categoria: "lobo",
    prezzo: 8.4,
    descrizione:
      "Orecchini a bottone con motivo a righe scolpite che avvolgono la forma a conchiglia. Disponibili in argento e oro.",
    immagine: "/immagini/orecchini-swirl-argento.jpg",
    materiale: "Acciaio inox",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-swirl-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/orecchini-swirl-oro.jpg" },
    ],
  },
  {
    slug: "orecchini-lacrima",
    nome: "Orecchini a Lacrima",
    categoria: "lobo",
    prezzo: 8.4,
    descrizione:
      "Orecchini a bottone dalla forma a goccia, lucidi e scultorei. Disponibili in oro e argento.",
    immagine: "/immagini/orecchini-lacrima-oro.jpg",
    materiale: "Acciaio inox",
    misure: "20 mm",
    varianti: [
      { nome: "Oro", immagine: "/immagini/orecchini-lacrima-oro.jpg" },
      { nome: "Argento", immagine: "/immagini/orecchini-lacrima-argento.jpg" },
    ],
  },
  {
    slug: "orecchini-pave",
    nome: "Orecchini a Cerchio Pavé",
    categoria: "cerchi",
    prezzo: 9,
    descrizione:
      "Orecchini a cerchio interamente ricoperti di zirconi a incastro pavé, per un effetto luminoso a tutto tondo. Disponibili in argento e oro.",
    immagine: "/immagini/orecchini-pave-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Diametro esterno 14 mm, spessore 2 mm, larghezza 4 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-pave-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/orecchini-pave-oro.jpg" },
    ],
  },
  {
    slug: "orecchini-catena-pendenti",
    nome: "Orecchini a Catena con Pietre Pendenti",
    categoria: "pendenti",
    prezzo: 10,
    descrizione:
      "Orecchini pendenti con tre pietre a goccia in gradazione di colore, collegate a una sottile catena che si aggancia dietro il lobo. Disponibili in rosa e verde.",
    immagine: "/immagini/orecchini-catena-pendenti-rosa.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Larghezza 3,3 mm, altezza pendente 45 mm, lunghezza totale 85 mm",
    varianti: [
      { nome: "Rosa", immagine: "/immagini/orecchini-catena-pendenti-rosa.jpg" },
      { nome: "Verde", immagine: "/immagini/orecchini-catena-pendenti-verde.jpg" },
    ],
  },
  {
    slug: "orecchini-cerchio-lettera-m",
    nome: "Orecchini a Cerchio con Iniziale M",
    categoria: "pendenti",
    prezzo: 10,
    descrizione:
      "Orecchini a cerchio con ciondolo a forma di lettera M, tempestato di strass. Altre iniziali disponibili su richiesta.",
    immagine: "/immagini/orecchini-cerchio-lettera-m.jpg",
    materiale: "Acciaio inox, strass",
    misure: "Diametro 8 mm, lunghezza 1,6 cm",
  },
  {
    slug: "orecchini-bamboo-colorati",
    nome: "Orecchini a Cerchio Bamboo Colorati",
    categoria: "cerchi",
    prezzo: 10,
    descrizione:
      "Orecchini a cerchio dorati con inserto smaltato colorato, ispirati allo stile bamboo. Disponibili in arancione, verde e viola.",
    immagine: "/immagini/orecchini-bamboo-arancione.jpg",
    materiale: "Acciaio inox, strass",
    misure: "Diametro 8 mm, lunghezza 1,6 cm",
    varianti: [
      { nome: "Arancione", immagine: "/immagini/orecchini-bamboo-arancione.jpg" },
      { nome: "Verde", immagine: "/immagini/orecchini-bamboo-verde.jpg" },
      { nome: "Viola", immagine: "/immagini/orecchini-bamboo-viola.jpg" },
    ],
  },
  {
    slug: "orecchini-goccia-pave",
    nome: "Orecchini a Cerchio Goccia Pavé",
    categoria: "cerchi",
    prezzo: 12,
    descrizione:
      "Orecchini a cerchio con inserto a goccia interamente ricoperto di zirconi pavé. Disponibili in tre misure. Disponibili in argento e oro.",
    immagine: "/immagini/orecchini-goccia-pave-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Diametro esterno 12/15/17 mm, larghezza 5,8/7,8/7,8 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-goccia-pave-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/orecchini-goccia-pave-oro.jpg" },
    ],
  },
  {
    slug: "orecchini-doppio-cuore",
    nome: "Orecchini Doppio Cuore Halo",
    categoria: "lobo",
    prezzo: 12,
    descrizione:
      "Orecchini pendenti con due cuori halo incastonati di zirconi, uno più piccolo e uno più grande. Disponibili in quattro colori.",
    immagine: "/immagini/orecchini-doppio-cuore-bianco.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Lunghezza 1,9 cm, larghezza 1 cm",
    varianti: [
      { nome: "Bianco", immagine: "/immagini/orecchini-doppio-cuore-bianco.jpg" },
      { nome: "Rosso", immagine: "/immagini/orecchini-doppio-cuore-rosso.jpg" },
      { nome: "Verde", immagine: "/immagini/orecchini-doppio-cuore-verde.jpg" },
      { nome: "Rosa/Oro", immagine: "/immagini/orecchini-doppio-cuore-rosa.jpg" },
    ],
  },
  {
    slug: "orecchini-farfalla-asimmetrici",
    nome: "Orecchini Asimmetrici Farfalla",
    categoria: "pendenti",
    prezzo: 12,
    descrizione:
      "Set di orecchini asimmetrici: uno a filo con farfalla di zirconi e catenina a scendere, l'altro pensato per doppio foro con ciondolo a goccia e marquise. Disponibili in argento e oro.",
    immagine: "/immagini/orecchini-farfalla-asimmetrici-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure:
      "Filo farfalla: lunghezza totale 83 mm, farfalla 5,9×6 mm — Doppio buco: catena 52 mm, ciondolo goccia 6,6×15,7 mm, marquise 3×5 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/orecchini-farfalla-asimmetrici-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/orecchini-farfalla-asimmetrici-oro.jpg" },
    ],
  },
];

export function getProdotto(slug: string) {
  return prodotti.find((p) => p.slug === slug);
}

export function getProdottiPerCategoria(categoria: Categoria) {
  return prodotti.filter((p) => p.categoria === categoria);
}
