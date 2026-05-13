import { NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = getServerClient();

    const { error: dbError } = await supabase.from("inquiries").insert({
      name,
      phone,
      email,
      message: message || null,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@ethioimports.com",
        to: process.env.RESEND_TO_EMAIL || "admin@example.com",
        subject: `New Contact Message from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message || "No message"}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
