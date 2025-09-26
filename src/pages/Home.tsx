import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Award, Calendar, Zap, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import roboticsWorkshop from "@/assets/robotics-workshop.jpg";
import aiTraining from "@/assets/ai-training.jpg";

export default function Home() {
  const stats = [
    { icon: Users, label: "Students Trained", value: "2,500+" },
    { icon: BookOpen, label: "Programs Delivered", value: "50+" },
    { icon: Award, label: "Corporate Partners", value: "25+" },
    { icon: Calendar, label: "Events Hosted", value: "100+" },
  ];

  const features = [
    {
      icon: Zap,
      title: "AI & Robotics Bootcamps",
      description: "Intensive hands-on training programs for students aged 11-25, building the next generation of tech innovators.",
      image: roboticsWorkshop,
    },
    {
      icon: Globe,
      title: "Educator Training",
      description: "Empowering teachers and educators with AI literacy and digital skills to transform education across Africa.",
      image: aiTraining,
    },
    {
      icon: Target,
      title: "Corporate Upskilling",
      description: "Custom workshops and training programs to help organizations embrace AI and digital transformation.",
      image: heroImage,
    },
  ];

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Bootcamp Graduate",
      content: "InspireAI changed my life. I went from knowing nothing about AI to building my own chatbot in just 3 months!",
    },
    {
      name: "Dr. Joseph Mensah",
      role: "Educator",
      content: "The training programs have revolutionized how I teach technology. My students are now creating amazing AI projects.",
    },
    {
      name: "Sarah Abdullahi", 
      role: "Corporate Partner",
      content: "InspireAI's corporate training helped our team understand AI applications. We've increased productivity by 40%.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="African youth working on AI and robotics projects"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Empowering Africa's Future Through 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              AI & Robotics
            </span>
          </h1>
          <p className="font-roboto text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the largest network of AI and robotics training across Africa. 
            We're building the next generation of tech innovators through hands-on bootcamps, 
            educator training, and corporate upskilling programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/programs">
                Join a Bootcamp <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/get-involved">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-card">
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
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Programs
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to empower African youth and professionals 
              with cutting-edge AI and robotics skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-foreground">{feature.title}</h3>
                  </div>
                  <p className="font-roboto text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" asChild>
                    <Link to="/programs">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Success Stories
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates, educators, and corporate partners about their transformative experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <p className="font-roboto text-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-montserrat font-semibold text-foreground">{testimonial.name}</div>
                    <div className="font-roboto text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/impact">
                View More Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of African youth and professionals who are already building the future with AI and robotics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/programs">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}