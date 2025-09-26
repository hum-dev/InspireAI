import { Link } from "react-router-dom";
import { Users, Building, GraduationCap, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetInvolved() {
  const pathways = [
    {
      icon: GraduationCap,
      title: "For Students",
      subtitle: "Ages 11-25",
      description: "Start your journey in AI and robotics with our comprehensive bootcamp programs.",
      benefits: [
        "Free bootcamp programs with full scholarships available",
        "Hands-on learning with industry-standard tools",
        "Mentorship from experienced professionals",
        "Career placement support and job referrals",
        "Access to our alumni network across Africa"
      ],
      cta: "Apply for Bootcamp",
      ctaLink: "/programs"
    },
    {
      icon: Users,
      title: "For Professionals",
      subtitle: "Career Advancement",
      description: "Upskill with AI and automation to advance your career and stay competitive.",
      benefits: [
        "Flexible evening and weekend programs",
        "Industry-relevant curriculum designed by experts",
        "Certification recognized by top employers",
        "Networking opportunities with like-minded professionals",
        "Project-based learning with real-world applications"
      ],
      cta: "Explore Professional Programs",
      ctaLink: "/programs"
    },
    {
      icon: Building,
      title: "For Educators",
      subtitle: "Transform Education",
      description: "Learn to integrate AI literacy and digital skills into your teaching curriculum.",
      benefits: [
        "Comprehensive teacher training and resources",
        "Curriculum development support and materials",
        "Ongoing mentorship and community support",
        "Access to educational technology and tools",
        "Opportunity to lead AI education in your institution"
      ],
      cta: "Join Educator Program",
      ctaLink: "/programs"
    },
    {
      icon: Heart,
      title: "For Organizations",
      subtitle: "Partnership & Sponsorship",
      description: "Partner with us to expand access to AI education and build the future workforce.",
      benefits: [
        "Corporate social responsibility impact",
        "Access to trained talent pipeline",
        "Brand visibility in tech education space",
        "Custom corporate training programs",
        "Thought leadership opportunities in AI education"
      ],
      cta: "Become a Partner",
      ctaLink: "/contact"
    }
  ];

  const partnershipTypes = [
    {
      title: "Funding Partners",
      description: "Support scholarships and program development to make AI education accessible to all African youth.",
      commitment: "Financial investment"
    },
    {
      title: "Technology Partners", 
      description: "Provide hardware, software, or cloud services to enhance our training programs.",
      commitment: "Resource sharing"
    },
    {
      title: "Employment Partners",
      description: "Offer internships, jobs, and career opportunities to our program graduates.",
      commitment: "Talent pipeline"
    },
    {
      title: "Content Partners",
      description: "Collaborate on curriculum development and provide subject matter expertise.",
      commitment: "Knowledge sharing"
    },
    {
      title: "Community Partners",
      description: "Help us reach more communities through local networks and facilities.",
      commitment: "Access & outreach"
    },
    {
      title: "Academic Partners",
      description: "University partnerships for research, accreditation, and program validation.",
      commitment: "Academic support"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Get Involved with InspireAI Africa
          </h1>
          <p className="font-roboto text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a student, professional, educator, or organization, there's a place 
            for you in our mission to democratize AI education across Africa.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="#pathways">Find Your Path</Link>
          </Button>
        </div>
      </section>

      {/* Pathways Section */}
      <section id="pathways" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Choose Your Path
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get involved based on your goals and background.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <pathway.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat text-xl">{pathway.title}</CardTitle>
                      <p className="font-roboto text-sm text-muted-foreground">{pathway.subtitle}</p>
                    </div>
                  </div>
                  <p className="font-roboto text-muted-foreground">{pathway.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-montserrat font-semibold">What You Get:</h4>
                    <ul className="space-y-2">
                      {pathway.benefits.map((benefit, idx) => (
                        <li key={idx} className="font-roboto text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="cta" className="w-full" asChild>
                    <Link to={pathway.ctaLink}>
                      {pathway.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways for organizations to partner with us and make a lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="font-roboto text-muted-foreground mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="inline-block bg-gradient-accent px-3 py-1 rounded-full">
                    <span className="font-roboto text-sm text-muted-foreground">{type.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Discuss Partnership <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              How to Apply
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join our programs and start your AI journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Submit Application", description: "Fill out our online application form with your background and interests." },
              { step: "2", title: "Interview", description: "Participate in a brief interview to discuss your goals and commitment." },
              { step: "3", title: "Acceptance", description: "Receive acceptance notification and program details within 1 week." },
              { step: "4", title: "Start Learning", description: "Begin your transformative journey with our comprehensive programs." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl font-montserrat">{process.step}</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="font-roboto text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Ready to Shape Africa's Future?
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Join our community of learners, educators, and innovators working together 
            to build a more technologically empowered Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/programs">Browse Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}