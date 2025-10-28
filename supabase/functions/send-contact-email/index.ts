import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiry_type: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactEmailRequest = await req.json();
    console.log("Processing contact form submission:", { email: contactData.email, subject: contactData.subject });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "AIspire Africa <onboarding@resend.dev>",
      to: [contactData.email],
      subject: "Thank you for contacting AIspire Africa!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Thank you for reaching out, ${contactData.name}!</h1>
          <p>We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">Your Message Details:</h2>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Inquiry Type:</strong> ${contactData.inquiry_type}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message}</p>
          </div>

          <p>In the meantime, explore our programs and resources:</p>
          <ul>
            <li><a href="https://www.aispireafrica.com/programs">View Our Programs</a></li>
            <li><a href="https://www.aispireafrica.com/events">Upcoming Events</a></li>
            <li><a href="https://www.aispireafrica.com/impact">Our Impact</a></li>
          </ul>

          <p style="margin-top: 30px;">Best regards,<br>The AIspire Africa Team</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="font-size: 12px; color: #6b7280;">
            AIspire Africa<br>
            Nairobi, Kenya<br>
            info@aispireafrica.com | +254 (0) 795 772 309
          </p>
        </div>
      `,
    });

    // Send notification email to AIspire Africa team
    const teamEmailResponse = await resend.emails.send({
      from: "AIspire Africa Contact Form <onboarding@resend.dev>",
      to: ["info@aispireafrica.com"],
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">New Contact Form Submission</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Information:</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
            ${contactData.organization ? `<p><strong>Organization:</strong> ${contactData.organization}</p>` : ''}
            <p><strong>Inquiry Type:</strong> ${contactData.inquiry_type}</p>
          </div>

          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">Subject:</h2>
            <p>${contactData.subject}</p>
            
            <h2 style="color: #1f2937;">Message:</h2>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>

          <p style="font-size: 12px; color: #6b7280; margin-top: 30px;">
            This is an automated notification from the AIspire Africa website contact form.
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { 
      userEmail: userEmailResponse, 
      teamEmail: teamEmailResponse 
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: Error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);