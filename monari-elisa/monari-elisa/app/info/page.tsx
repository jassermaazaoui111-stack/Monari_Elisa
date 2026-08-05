export const metadata = {
  title: "Info — Monari Elisa",
};

export default function InfoPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl italic text-inchiostro mb-8">
        Info
      </h1>

      <div className="space-y-6 text-sm text-inchiostro/75 leading-relaxed">
        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Acciaio inossidabile
          </h2>
          <p>
            I nostri orecchini sono in acciaio inossidabile: un materiale
            pensato per durare. Non arrugginisce, non annerisce e mantiene la
            sua brillantezza nel tempo. Resistente all&apos;acqua e al sudore, è
            perfetto da indossare tutti i giorni. Il contenuto di nichel rientra
            nei limiti previsti dalla normativa europea (EN 1811).
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg not-italic text-inchiostro mb-2">
            Come prendersene cura
          </h2>
          <p>
            Per mantenerli sempre belli, evita il contatto prolungato con
            profumi e creme, e asciugali dopo il contatto con l&apos;acqua. Puoi
            pulirli con un panno morbido.
          </p>
        </div>
      </div>
    </section>
  );
}
