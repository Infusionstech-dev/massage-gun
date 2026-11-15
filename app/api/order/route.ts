import { NextResponse } from "next/server";
import { PACKAGES, SHIPPING } from "@/lib/data";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const pkg = PACKAGES.find((p) => p.id === body?.package);
  const ship = SHIPPING.find((s) => s.id === body?.shipping);
  const name = String(body?.name ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const address = String(body?.address ?? "").trim();

  if (!pkg || !ship || !name || !address || !/^01[3-9]\d{8}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Price is recalculated on the server so it can't be tampered with.
  const order = {
    name, phone, address,
    package: pkg.label, shipping: ship.label,
    total: pkg.price + ship.cost,
    createdAt: new Date().toISOString(),
  };

  // TODO: save the order — Google Sheet, database, email, or courier API.
  console.log("New order:", order);

  return NextResponse.json({ ok: true });
}
