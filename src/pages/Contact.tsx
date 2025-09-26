import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiry_type: "",
    subject: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for general inquiries",
      contact: "info@inspireai-africa.org",
      note: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+254 (0) 123 456 7890",
      note: "Mon-Fri, 9AM-5PM EAT"
    },
    {
      icon: MapPin,
      title: "Visit Us", 
      description: "Our main office location",
      contact: "Westlands, Nairobi, Kenya",
      note: "By appointment only"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick questions and support",
      contact: "+254 (0) 123 456 7890",
      note: "Available 9AM-6PM EAT"
    }
  ];

  const inquiryTypes = [
    { value: "student", label: "Student Program Inquiry", icon: Users },
    { value: "educator", label: "Educator Training", icon: Users },
    { value: "corporate", label: "Corporate Partnership", icon: Building },
    { value: "sponsorship", label: "Sponsorship Opportunity", icon: Building },
    { value: "media", label: "Media & Press", icon: MessageSquare },
    { value: "general", label: "General Inquiry", icon: MessageSquare }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="font-roboto text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your AI journey or partner with us? We'd love to hear from you. 
            Reach out for program inquiries, partnerships, or any questions about our mission.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              How to Reach Us
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to connect with our team. Choose what works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="font-roboto text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <p className="font-roboto font-medium text-primary mb-2">
                    {method.contact}
                  </p>
                  <p className="font-roboto text-xs text-muted-foreground">
                    {method.note}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="font-roboto text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="font-montserrat text-xl text-center">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-roboto">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-roboto">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-roboto">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+234 123 456 7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="font-roboto">Organization</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        placeholder="Your school, company, or organization"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry_type" className="font-roboto">Type of Inquiry *</Label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => handleInputChange("inquiry_type", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-roboto">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief summary of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-roboto">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide details about your inquiry, including any specific questions or requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our programs and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I apply for the AI & Robotics Bootcamp?",
                answer: "You can apply through our programs page or contact form. The application process includes submitting basic information, a brief interview, and commitment confirmation. We offer rolling admissions with new cohorts starting every quarter."
              },
              {
                question: "Are there any prerequisites for the programs?",
                answer: "Most of our programs are designed for beginners. For student bootcamps (ages 11-25), no prior experience is required. Professional programs may benefit from basic computer literacy, but we accommodate all skill levels."
              },
              {
                question: "What kind of support do you provide for job placement?",
                answer: "We offer comprehensive career support including resume review, interview preparation, job referrals, and access to our employer network. Our job placement rate is 80% within 6 months of graduation."
              },
              {
                question: "How can my organization partner with InspireAI Africa?",
                answer: "We offer various partnership opportunities including sponsorships, corporate training, talent pipeline access, and curriculum collaboration. Contact us to discuss how we can work together."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-roboto text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Office Hours & Response Times
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-montserrat font-semibold text-lg">Business Hours</h3>
              <p className="font-roboto">Monday - Friday</p>
              <p className="font-roboto">9:00 AM - 5:00 PM WAT</p>
            </div>
            <div className="space-y-2">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-montserrat font-semibold text-lg">Email Response</h3>
              <p className="font-roboto">Within 24 hours</p>
              <p className="font-roboto">Faster during business hours</p>
            </div>
            <div className="space-y-2">
              <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-montserrat font-semibold text-lg">WhatsApp Support</h3>
              <p className="font-roboto">9:00 AM - 6:00 PM WAT</p>
              <p className="font-roboto">Quick questions & support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}