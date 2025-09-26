import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, GraduationCap, Building } from "lucide-react";

export default function Impact() {
  const stats = [
    { value: "2,500+", label: "Students Trained", icon: GraduationCap },
    { value: "15", label: "Countries Reached", icon: MapPin },
    { value: "80%", label: "Job Placement Rate", icon: Briefcase },
    { value: "25+", label: "Corporate Partners", icon: Building },
  ];

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "AI Developer at TechCorp",
      location: "Lagos, Nigeria",
      story: "InspireAI's bootcamp changed my life completely. I went from having no coding experience to landing a job as an AI developer at one of Nigeria's top tech companies. The hands-on approach and mentorship made all the difference.",
      program: "AI & Robotics Bootcamp"
    },
    {
      name: "Dr. Joseph Mensah",
      role: "Computer Science Educator",
      location: "Accra, Ghana", 
      story: "As an educator, the training program helped me integrate AI concepts into my curriculum. My students are now building impressive AI projects and several have started their own tech ventures.",
      program: "Educator Training Program"
    },
    {
      name: "Sarah Abdullahi",
      role: "Digital Transformation Manager",
      location: "Kano, Nigeria",
      story: "Our company's productivity increased by 40% after the corporate training. The team now understands AI applications and we've implemented several automation solutions that have transformed our operations.",
      program: "Corporate Upskilling"
    },
    {
      name: "Kwame Asante",
      role: "Robotics Engineer",
      location: "Nairobi, Kenya",
      story: "The robotics component of the program was incredible. I built my first robot during the bootcamp and now I'm working on autonomous systems for agriculture. The foundation was everything.",
      program: "AI & Robotics Bootcamp"
    },
    {
      name: "Fatima Al-Rashid",
      role: "EdTech Entrepreneur",
      location: "Cairo, Egypt",
      story: "The entrepreneurship component inspired me to start my own EdTech company. We're now developing AI-powered learning platforms for African schools and have raised our first round of funding.",
      program: "AI & Robotics Bootcamp"
    },
    {
      name: "Michael Ochieng",
      role: "Data Scientist",
      location: "Kampala, Uganda",
      story: "From a background in traditional agriculture, I transitioned to agricultural technology after the program. I'm now developing ML models for crop yield prediction and helping farmers optimize their operations.",
      program: "Professional Development Track"
    }
  ];

  const impacts = [
    {
      title: "Career Transformation",
      description: "80% of our graduates secure jobs in tech within 6 months of completion",
      highlight: "Average salary increase of 300%"
    },
    {
      title: "Educational Innovation",
      description: "Educators from our programs have reached over 10,000 students with AI curriculum",
      highlight: "50+ schools now teach AI basics"
    },
    {
      title: "Economic Impact",
      description: "Corporate partners report significant productivity gains and cost savings",
      highlight: "$2M+ in documented ROI"
    },
    {
      title: "Community Building",
      description: "Alumni network spans 15 countries with active mentorship programs",
      highlight: "200+ peer connections made"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
            Our Impact Across Africa
          </h1>
          <p className="font-roboto text-lg text-muted-foreground max-w-3xl mx-auto">
            See how InspireAI Africa Network is transforming lives, careers, and communities 
            through AI and robotics education. These are the stories that drive our mission.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-montserrat font-bold text-3xl text-primary mb-2">{stat.value}</div>
                <div className="font-roboto text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Success Stories
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-roboto text-sm text-muted-foreground">{testimonial.location}</span>
                  </div>
                  
                  <Badge variant="secondary" className="mb-4">{testimonial.program}</Badge>
                  
                  <p className="font-roboto text-foreground mb-4 leading-relaxed">
                    "{testimonial.story}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-montserrat font-semibold text-foreground">{testimonial.name}</div>
                    <div className="font-roboto text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Measurable Impact
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond individual success stories, our programs create lasting change across communities and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-foreground mb-3">
                    {impact.title}
                  </h3>
                  <p className="font-roboto text-muted-foreground mb-4">
                    {impact.description}
                  </p>
                  <div className="inline-block bg-gradient-hero text-white px-4 py-2 rounded-lg font-montserrat font-medium text-sm">
                    {impact.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Be Part of Our Success Story
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Join our growing community of AI and robotics professionals making a difference across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/programs" className="inline-flex items-center justify-center h-14 px-10 rounded-lg bg-primary text-primary-foreground font-montserrat font-medium hover:bg-primary/90 transition-colors">
              Join Our Programs
            </a>
            <a href="/get-involved" className="inline-flex items-center justify-center h-14 px-10 rounded-lg border border-white text-white hover:bg-white hover:text-secondary font-montserrat font-medium transition-colors">
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}