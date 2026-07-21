export type Variante = {
  nome: string;
  immagine: string;
};

export type Product = {
  slug: string;
  nome: string;
  categoria: "anelli" | "orecchini" | "bracciali" | "collane" | "set" | "borse";
  prezzo: number; // in euro
  descrizione: string;
  immagine: string;
  materiale?: string;
  misure?: string;
  varianti?: Variante[]; // opzioni di colore/finitura tra cui il cliente sceglie
  inEvidenza?: boolean;
};

// Dati segnaposto — sostituisci con i prodotti reali e le foto quando pronti.
// Modifica direttamente questo file: ogni prodotto è un oggetto nell'array.
export const prodotti: Product[] = [
  {
    slug: "orecchini-cerchio-zirconi",
    nome: "Orecchini a Cerchio con Zirconi",
    categoria: "orecchini",
    prezzo: 12,
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
    categoria: "orecchini",
    prezzo: 12,
    descrizione:
      "Orecchini a lobo con cristallo sfaccettato color azzurro, montatura in metallo satinato. Un tocco di colore delicato.",
    immagine: "/immagini/orecchini-punto-luce-azzurro.jpeg",
    materiale: "Metallo, cristallo",
  },
  {
    slug: "orecchino-clip-strass",
    nome: "Orecchino Clip con Strass",
    categoria: "orecchini",
    prezzo: 4,
    descrizione:
      "Orecchino a clip, non richiede il foro nel lobo. Chiusura regolabile e strass sfaccettato. Venduto singolarmente.",
    immagine: "/immagini/orecchino-clip-strass-singolo.jpeg",
    misure: "Lunghezza 20 mm",
  },
  {
    slug: "orecchino-cuore",
    nome: "Orecchino a Cuore",
    categoria: "orecchini",
    prezzo: 4,
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
    categoria: "orecchini",
    prezzo: 12,
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
    categoria: "orecchini",
    prezzo: 10,
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
    categoria: "orecchini",
    prezzo: 10,
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
    categoria: "orecchini",
    prezzo: 10,
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
    categoria: "orecchini",
    prezzo: 12,
    descrizione:
      "Orecchini a bottone dalla forma organica e scolpita, superficie liscia e lucida.",
    immagine: "/immagini/orecchini-disco-oro.jpg",
    materiale: "Acciaio inox 316L",
    misure: "Dimensione 2,8×2,1 cm",
  },
  {
    slug: "orecchini-rosa-nera-perla",
    nome: "Orecchini Rosa con Perla",
    categoria: "orecchini",
    prezzo: 8,
    descrizione:
      "Orecchini a bottone a forma di rosa smaltata nera, con perla artificiale al centro.",
    immagine: "/immagini/orecchini-rosa-nera-perla.jpg",
    materiale: "Acciaio inox 316L, perla artificiale",
    misure: "1,2×1,2 cm",
  },
  {
    slug: "orecchini-halo-cuore",
    nome: "Orecchini a Cuore Halo",
    categoria: "orecchini",
    prezzo: 12,
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
    categoria: "orecchini",
    prezzo: 12,
    descrizione:
      "Orecchini pendenti lunghi, con una fila continua di cristalli incastonati. Un tocco luminoso e slanciato.",
    immagine: "/immagini/orecchini-catena-cristalli.png",
    materiale: "Acciaio inox, zirconia",
    misure: "Lunghezza 5 cm",
  },
  {
    slug: "orecchini-swirl",
    nome: "Orecchini a Conchiglia Swirl",
    categoria: "orecchini",
    prezzo: 12,
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
    categoria: "orecchini",
    prezzo: 10,
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
    categoria: "orecchini",
    prezzo: 12,
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
    categoria: "orecchini",
    prezzo: 15,
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
    categoria: "orecchini",
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
    categoria: "orecchini",
    prezzo: 13,
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
    slug: "cerchietto-zirconi-singolo",
    nome: "Cerchietto con Zirconi",
    categoria: "orecchini",
    prezzo: 3,
    descrizione:
      "Piccolo cerchietto in argento con fila di zirconi. Venduto singolarmente.",
    immagine: "/immagini/cerchietti-zirconi-set.jpg",
    materiale: "Acciaio inox 316L, strass",
    misure: "Diametro 9 mm",
  },
  {
    slug: "cerchietti-zirconi-set-6",
    nome: "Set 6 Cerchietti con Zirconi",
    categoria: "orecchini",
    prezzo: 15,
    descrizione:
      "Set da 6 cerchietti in argento con fila di zirconi, per riempire più piercing o per condividere con le amiche.",
    immagine: "/immagini/cerchietti-zirconi-set.jpg",
    materiale: "Acciaio inox 316L, strass",
    misure: "Diametro 9 mm",
  },
  {
    slug: "orecchini-goccia-pave",
    nome: "Orecchini a Cerchio Goccia Pavé",
    categoria: "orecchini",
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
    categoria: "orecchini",
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
    categoria: "orecchini",
    prezzo: 14,
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
  {
    slug: "anello-pave",
    nome: "Anello Pavé",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Anello con superficie bombata interamente ricoperta di zirconi pavé, misura regolabile. Disponibile in argento e oro.",
    immagine: "/immagini/anello-pave-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Misura regolabile, altezza superficie 1,8 cm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/anello-pave-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/anello-pave-oro.jpg" },
    ],
  },
  {
    slug: "anello-avvolgente",
    nome: "Anello Avvolgente Pavé",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Anello dal design avvolgente, con due punte ricoperte di zirconi pavé che si sfiorano. Misura regolabile. Disponibile in argento e oro.",
    immagine: "/immagini/anello-avvolgente-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Misura regolabile, altezza superficie 1,5 cm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/anello-avvolgente-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/anello-avvolgente-oro.jpg" },
    ],
  },
  {
    slug: "anello-scultoreo",
    nome: "Anello Scultoreo Liscio",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Anello dalla forma scultorea e organica, superficie liscia e lucida. Misura regolabile. Disponibile in oro e argento.",
    immagine: "/immagini/anello-scultoreo-oro.jpg",
    materiale: "Acciaio inox 316L",
    misure: "Misura regolabile, altezza fascia 1,5 cm",
    varianti: [
      { nome: "Oro", immagine: "/immagini/anello-scultoreo-oro.jpg" },
      { nome: "Argento", immagine: "/immagini/anello-scultoreo-argento.jpg" },
    ],
  },
  {
    slug: "anello-grappolo-pietre",
    nome: "Anello a Grappolo di Pietre",
    categoria: "anelli",
    prezzo: 13,
    descrizione:
      "Anello dorato con un grappolo di tre pietre di cristallo dalle sfumature diverse, misura regolabile. Disponibile in azzurro/blu e fucsia/rosa.",
    immagine: "/immagini/anello-grappolo-azzurro.jpg",
    materiale: "Acciaio inox 316L, cristallo",
    misure: "Misura regolabile, larghezza fascia circa 4,5-9,6 mm, altezza totale pietre circa 17 mm",
    varianti: [
      { nome: "Azzurro/Blu", immagine: "/immagini/anello-grappolo-azzurro.jpg" },
      { nome: "Fucsia/Rosa", immagine: "/immagini/anello-grappolo-fucsia.jpg" },
    ],
  },
  {
    slug: "anello-intrecciato",
    nome: "Anello Intrecciato Pavé",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Anello statement con cerchi intrecciati interamente ricoperti di zirconi pavé. Disponibile in argento e oro.",
    immagine: "/immagini/anello-intrecciato-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Altezza 2,1 cm, diametro interno circa 17 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/anello-intrecciato-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/anello-intrecciato-oro.jpg" },
    ],
  },
  {
    slug: "anello-cuore-pave",
    nome: "Anello a Cuore Pavé",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Anello con superficie a cuore interamente ricoperta di zirconi pavé, misura regolabile. Disponibile in argento e oro.",
    immagine: "/immagini/anello-cuore-pave-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Misura regolabile, altezza 1,5 cm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/anello-cuore-pave-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/anello-cuore-pave-oro.jpg" },
    ],
  },
  {
    slug: "anello-solitario-rettangolare",
    nome: "Anello Solitario Rettangolare",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Anello con zircone centrale taglio rettangolare e doppia fascia laterale di zirconi, misura regolabile. Disponibile in argento e oro.",
    immagine: "/immagini/anello-solitario-argento.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Misura regolabile, zircone centrale 4×6 mm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/anello-solitario-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/anello-solitario-oro.jpg" },
    ],
  },
  {
    slug: "anello-treccia",
    nome: "Anello a Treccia",
    categoria: "anelli",
    prezzo: 10,
    descrizione:
      "Anello con superficie scolpita a treccia, misura regolabile. Disponibile in oro e argento.",
    immagine: "/immagini/anello-treccia-oro.jpg",
    materiale: "Acciaio inox 316L",
    misure: "Misura regolabile, larghezza superficie 5,8 mm, larghezza fascia 1,8-3,7 mm",
    varianti: [
      { nome: "Oro", immagine: "/immagini/anello-treccia-oro.jpg" },
      { nome: "Argento", immagine: "/immagini/anello-treccia-argento.jpg" },
    ],
  },
  {
    slug: "anello-cuore-contorno",
    nome: "Anello a Fascia Sottile con Cuore",
    categoria: "anelli",
    prezzo: 10,
    descrizione:
      "Anello a fascia sottile in argento, con un piccolo cuore in strass e uno zircone accanto. Delicato e minimal.",
    immagine: "/immagini/anello-cuore-contorno.jpg",
    materiale: "Acciaio inox 316L, strass",
    misure: "Spessore fascia 1 mm, cuore 1,2×1,1 cm",
  },
  {
    slug: "anello-doppio-cerchio-contorno",
    nome: "Anello a Fascia Sottile con Doppio Cerchio",
    categoria: "anelli",
    prezzo: 10,
    descrizione:
      "Anello a fascia sottile in argento, con due cerchi intrecciati in strass e uno zircone centrale. Delicato e minimal.",
    immagine: "/immagini/anello-doppio-cerchio-contorno.jpg",
    materiale: "Acciaio inox 316L, strass",
    misure: "Spessore fascia 1 mm, superficie 1,2×1,1 cm",
  },
  {
    slug: "anello-croce-x",
    nome: "Anello a Croce X",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Anello dorato con design a X, una fascia interamente ricoperta di zirconi che si incrocia con una fascia liscia. Misura regolabile.",
    immagine: "/immagini/anello-croce-x-oro.jpg",
    materiale: "Acciaio inox 316L, zircone",
    misure: "Misura regolabile, altezza 1,4 cm",
  },
  {
    slug: "anello-fedina-incastonature",
    nome: "Fedina con Incastonature",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Fedina sottile con zirconi incastonati alternati a un taglio baguette. Disponibile in argento e oro, nelle misure 16/17/18.",
    immagine: "/immagini/anello-fedina-incastonature-argento.png",
    materiale: "Acciaio inox, strass",
    misure: "Larghezza 3,5 mm, spessore 2 mm, misure disponibili 16/17/18",
    varianti: [
      { nome: "Argento", immagine: "/immagini/anello-fedina-incastonature-argento.png" },
      { nome: "Oro", immagine: "/immagini/anello-fedina-incastonature-oro.png" },
    ],
  },
  {
    slug: "anello-eternity",
    nome: "Fedina Eternity",
    categoria: "anelli",
    prezzo: 10,
    descrizione:
      "Fedina dorata con zirconi tondi incastonati tutto intorno, effetto eternity. Disponibile nelle misure 16/17/18.",
    immagine: "/immagini/anello-eternity-oro.png",
    materiale: "Acciaio inox, strass",
    misure: "Larghezza 2,6 mm, spessore 1,5 mm, misure disponibili 16/17/18",
  },
  {
    slug: "anello-cuore-oro",
    nome: "Anello con Cuore",
    categoria: "anelli",
    prezzo: 8,
    descrizione:
      "Anello sottile con piccolo cuore e zircone accanto. Oro. Disponibile nelle misure 16/17/18.",
    immagine: "/immagini/anello-cuore-oro.jpg",
    materiale: "Acciaio inox, strass",
    misure: "Misure disponibili 16/17/18",
  },
  {
    slug: "anello-cuore-argento",
    nome: "Anello con Cuore",
    categoria: "anelli",
    prezzo: 8,
    descrizione:
      "Anello sottile con piccolo cuore e zircone accanto. Argento. Disponibile nelle misure 16/17/18.",
    immagine: "/immagini/anello-cuore-argento.jpg",
    materiale: "Acciaio inox, strass",
    misure: "Misure disponibili 16/17/18",
  },
  {
    slug: "set-anelli-cuore-oro-argento",
    nome: "Set 2 Anelli con Cuore (Oro + Argento)",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "I due anelli con cuore, oro e argento, venduti insieme in un unico set a prezzo scontato rispetto all'acquisto separato.",
    immagine: "/immagini/anello-cuore-oro.jpg",
    materiale: "Acciaio inox, strass",
    misure: "Misure disponibili 16/17/18",
  },
  {
    slug: "anello-cuore-aperto",
    nome: "Anello Aperto con Cuore",
    categoria: "anelli",
    prezzo: 8,
    descrizione:
      "Anello a fascia sottile e aperta, con piccolo cuore centrale. Disponibile in argento e oro.",
    immagine: "/immagini/bracciale-cuore-argento.jpg",
    materiale: "Acciaio inox 316L",
    misure: "Spessore 1 mm, cuore 0,8×1,2 cm",
    varianti: [
      { nome: "Argento", immagine: "/immagini/bracciale-cuore-argento.jpg" },
      { nome: "Oro", immagine: "/immagini/bracciale-cuore-oro.jpg" },
    ],
  },
  {
    slug: "anello-fede-zircone",
    nome: "Fede con Zircone Singolo",
    categoria: "anelli",
    prezzo: 12,
    descrizione:
      "Fede sottile e liscia, oro, con un unico zircone incastonato. Disponibile nelle misure 16/17/18.",
    immagine: "/immagini/anello-fede-zircone-oro.png",
    materiale: "Acciaio inox, strass",
    misure: "Larghezza 3,6 mm, spessore 1,8 mm, misure disponibili 16/17/18",
    varianti: [
      { nome: "Oro", immagine: "/immagini/anello-fede-zircone-oro.png" },
      { nome: "Argento", immagine: "/immagini/anello-fede-zircone-argento.png" },
    ],
  },
];

export function getProdotto(slug: string) {
  return prodotti.find((p) => p.slug === slug);
}

export function getProdottiPerCategoria(categoria: Product["categoria"]) {
  return prodotti.filter((p) => p.categoria === categoria);
}
