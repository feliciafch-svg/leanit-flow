import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { name, email });

    try {
      const businessEmail = resend.emails.send({
        from: "Lean’it <no-reply@leanit-automatisation.com>", // ton domaine vérifié
        to: ["contact@leanit-automatisation.com"],
        reply_to: email, // tu pourras répondre au client direct
        subject: "📬 Nouveau message via Lean’it",
        html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#222;border-bottom:2px solid #522B5B;padding-bottom:10px">
          Nouveau message reçu
        </h2>
        <div style="background:#FBE4D8;padding:16px;border-radius:8px;margin:16px 0;color:#190019">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        </div>
        <p style="margin:0 0 6px"><strong>Message :</strong></p>
        <p style="line-height:1.6;white-space:pre-wrap;color:#2B124C">${message}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
        <p style="color:#777;font-size:12px">Formulaire de contact Lean’it</p>
      </div>
    `,
      });

      const customerEmail = resend.emails.send({
        from: "Lean’it <no-reply@leanit-automatisation.com>",
        to: [email],
        subject: "Nous avons bien reçu votre message ✔︎",
        html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#222">Merci, ${name} !</h2>
        <p>Votre message a été bien reçu. Nous revenons vers vous sous 24h ouvrées.</p>
        <p style="margin-top:16px">Rappel :</p>
        <ul>
          <li><strong>Email</strong> : ${email}</li>
          ${phone ? `<li><strong>Téléphone</strong> : ${phone}</li>` : ""}
        </ul>
        <p style="color:#777;font-size:12px;margin-top:24px">Lean’it — Automatiser. Piloter. Respirer.</p>
      </div>
    `,
      });

      const results = await Promise.allSettled([businessEmail, customerEmail]);
      console.log("Resend results:", results);

      // Optionnel: vérifier les rejets
      results.forEach((r, i) => {
        if (r.status === "rejected") {
          console.error(`Email ${i === 0 ? "business" : "customer"} failed:`, r.reason);
        }
      });
    } catch (err) {
      console.error("Resend fatal error:", err);
    }

    console.log("Emails sent successfully:", { emailResponse, confirmationResponse });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      },
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      },
    );
  }
};

serve(handler);
