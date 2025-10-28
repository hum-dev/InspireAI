import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PostgrestError } from "@supabase/supabase-js";

interface NewsletterSubscriptionProps {
  variant?: "default" | "footer";
  className?: string;
}

export const NewsletterSubscription = ({ variant = "default", className = "" }: NewsletterSubscriptionProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscriptions")
        .insert([{ email }]);

      if (error) {
        if (error.code === "23505") { // Unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "You're already on our mailing list!",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for joining our newsletter.",
        });
        setEmail("");
      }
    } catch (error: PostgrestError | Error) {
      console.error("Newsletter subscription error:", error);
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === "footer") {
    return (
      <div className={`space-y-2 ${className}`}>
        <p className="font-roboto text-sm">Subscribe to our newsletter</p>
        <form onSubmit={handleSubscribe} className="flex space-x-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            variant="default" 
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? "..." : "Subscribe"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className={`max-w-md ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="h-6 w-6 text-primary" />
        <h3 className="font-montserrat font-semibold text-lg">
          Subscribe to Our Newsletter
        </h3>
      </div>
      <p className="font-roboto text-sm text-muted-foreground mb-4">
        Stay updated with our latest programs, events, and opportunities.
      </p>
      <form onSubmit={handleSubscribe} className="flex space-x-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          variant="cta"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};