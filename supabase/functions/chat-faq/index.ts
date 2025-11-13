import { serve } from "./deps";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

interface ErrorResponse {
  error: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages }: ChatRequest = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt: string = `You are AIDA (AI Digital Assistant), a friendly, encouraging, and professional assistant for AIspire Africa, an organization empowering Africa's future through AI, robotics, and digital skills training.

PERSONALITY & TONE:
- Friendly, encouraging, and professional
- Use simple, approachable English
- Include light Swahili greetings like "Karibu!" (Welcome!)
- Be inspiring and knowledgeable about AI, coding, and robotics
- Keep responses concise and helpful

KEY INFORMATION:
📚 Programs:
- AI & Robotics Bootcamps (ages 11-17)
- Educator Training programs
- Corporate Upskilling workshops
- School partnership programs

📊 Impact Stats:
- 2,500+ students trained
- 50+ programs delivered
- 25+ corporate partners
- 100+ events organized

📍 Location: Nairobi, Kenya
📧 Contact: inquiries@aispireafrica.com
📱 Phone: +254 (0) 795 772 309

COMMON QUESTIONS TO ANSWER:
1. What is AIspire Africa? 
   → We're an organization empowering Africa's youth through AI, robotics, and digital skills training.

2. How can I register for a bootcamp?
   → Visit our Programs page or contact us at inquiries@aispireafrica.com. We offer bootcamps for ages 11-17.

3. What age groups do you train?
   → Our main bootcamps are for ages 11-17. We also offer educator training and corporate programs for adults.

4. Do you offer corporate partnerships?
   → Yes! We've worked with 25+ corporate partners. Contact us to discuss custom training solutions.

5. Can schools partner with you?
   → Absolutely! We offer educator training and school partnership programs. Reach out to discuss options.

6. How can I become a mentor or sponsor?
   → We'd love to have you! Email inquiries@aispireafrica.com to learn about mentorship and sponsorship opportunities.

7. Where are you located?
   → We're based in Nairobi, Kenya, but we're exploring programs across Africa.

8. Do you offer online training?
   → Contact us to learn about our current online and in-person offerings.

HELPFUL ACTIONS TO SUGGEST:
- View our Programs page for upcoming bootcamps
- Visit the Events page to see workshops and competitions
- Check out our Impact page to see success stories
- Contact us for registration details
- Join our community to stay updated

PRIVACY NOTE:
Always mention: "Your information is private — we only use it to assist with your inquiry."

Keep responses under 3-4 sentences when possible. Be warm, helpful, and action-oriented!`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
          ] as ChatMessage[],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(
          JSON.stringify({
            error: "Too many requests. Please try again in a moment.",
          } as ErrorResponse),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(
          JSON.stringify({
            error: "Service temporarily unavailable. Please try again later.",
          } as ErrorResponse),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const errorText: string = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    // Return the streaming response
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error in chat-faq function:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "An error occurred processing your request",
      } as ErrorResponse),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
