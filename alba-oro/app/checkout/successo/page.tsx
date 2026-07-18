"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function SuccessoPage() {
  const { svuota } = useCart();

  useEffect(() => {
    svuota();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mx-auto max-w-xl px-6 py-28 text-center">
      <h1 className="font-display text-4xl italic text-inchiostro">
        Grazie per il tuo ordine
      </h1>
      <p className="mt-4 text-inchiostro/70">
        Ti abbiamo inviato una conferma via email. Ti scriveremo di nuovo
        quando il pacco parte.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-bosco px-7 py-3 text-sm text-avorio hover:bg-boscoScuro transition-colors"
      >
        Torna al negozio
      </Link>
    </section>
  );
}
