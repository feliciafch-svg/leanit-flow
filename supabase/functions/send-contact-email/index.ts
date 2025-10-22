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

    // Send email to the business
    const emailResponse = await resend.emails.send({
      from: "Lean'it <onboarding@resend.dev>",
      to: ["contact@leanit-automatisation.com"],
      subject: "Nouveau message reçu depuis le site Lean'it",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            Nouveau message reçu
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <p><strong>Message :</strong></p>
            <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #999; font-size: 12px;">
            <p>Ce message a été envoyé depuis le formulaire de contact de Lean'it</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the customer
    const confirmationResponse = await resend.emails.send({
      from: "Lean'it <onboarding@resend.dev>",
      to: [email],
      subject: "Nous avons bien reçu votre message !",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #4F46E5;">Merci de nous avoir contactés, ${name} !</h1>
          
          <p style="line-height: 1.6; color: #555;">
            Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais, généralement sous 24-48 heures.
          </p>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4F46E5;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Votre message:</strong><br/>
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            En attendant, n'hésitez pas à consulter nos solutions sur notre site web ou à nous contacter directement :
          </p>
          
          <ul style="color: #555;">
            <li>📱 WhatsApp : 06 37 49 73 68</li>
            <li>✉️ Email : contact@leanit-automatisation.com</li>
          </ul>
          
          <p style="line-height: 1.6; color: #555;">
            À très bientôt,<br/>
            <strong>L'équipe Lean'it</strong>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #999; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement, merci de ne pas y répondre directement.</p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { emailResponse, confirmationResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
