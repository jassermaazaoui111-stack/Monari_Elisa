import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProdotto } from "@/lib/products";

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { errore: "Pagamenti non ancora configurati (manca STRIPE_SECRET_KEY)." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { articoli } = await request.json();

    if (!Array.isArray(articoli) || articoli.length === 0) {
      return NextResponse.json({ errore: "Carrello vuoto." }, { status: 400 });
    }

    // Non ci fidiamo mai del prezzo inviato dal browser: lo ricalcoliamo
    // sempre dal catalogo reale (lib/products.ts) lato server.
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    for (const articolo of articoli) {
      const prodotto = getProdotto(articolo.slug);
      if (!prodotto) continue;
      const quantita = Math.max(1, Math.min(20, Number(articolo.quantita) || 1));
      lineItems.push({
        quantity: quantita,
        price_data: {
          currency: "eur",
          unit_amount: Math.round(prodotto.prezzo * 100),
          product_data: {
            name: prodotto.nome,
            images: [prodotto.immagine],
          },
        },
      });
    }

    if (lineItems.length === 0) {
      return NextResponse.json(
        { errore: "Nessun prodotto valido nel carrello." },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || process.env.SITE_URL || "";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["IT", "SM", "VA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 690, currency: "eur" },
            display_name: "Spedizione standard (2-4 giorni)",
          },
        },
      ],
      success_url: `${origin}/checkout/successo?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/annullato`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Errore creazione sessione Stripe:", err);
    return NextResponse.json(
      { errore: "Errore durante la creazione del pagamento." },
      { status: 500 }
    );
  }
}
