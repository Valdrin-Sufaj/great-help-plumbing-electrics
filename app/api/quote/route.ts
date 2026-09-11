import { NextResponse } from "next/server";

const emailTo = process.env.QUOTE_TO_EMAIL || "ghplumbingelectrics@gmail.com";
const emailFrom =
  process.env.QUOTE_FROM_EMAIL ||
  "Great Help Plumbing & Electrics <quotes@greathelpplumbing.co.uk>";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const name = asString(payload?.name);
  const phone = asString(payload?.phone);
  const message = asString(payload?.message);

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Please add your name, phone number and message." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.info("Quote request received", { name, phone, message, emailTo });
    return NextResponse.json({ ok: true, delivery: "logged" }, { status: 202 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: emailFrom,
      to: emailTo,
      subject: `New quote request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Message could not be sent. Please call instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
