import { Users, Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize access to AI and robotics education across Africa, empowering the next generation of tech innovators."
    },
    {
      icon: Heart,
      title: "Our Vision", 
      description: "An Africa where every young person has the opportunity to learn, create, and lead in the digital economy."
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Inclusivity, excellence, innovation, community-driven learning, and sustainable impact."
    },
    {
      icon: Award,
      title: "Our Impact",
      description: "Building a network of skilled professionals who are creating solutions for African challenges."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
              About InspireAI Africa Network
            </h1>
            <p className="font-roboto text-lg text-muted-foreground leading-relaxed">
              We are a pan-African organization dedicated to empowering youth and professionals 
              through comprehensive AI, robotics, and digital skills training. Founded by passionate 
              educators and technologists, we believe in the transformative power of technology education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-roboto text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
              Our Story
            </h2>
            <div className="space-y-6 font-roboto text-lg text-muted-foreground leading-relaxed">
              <p>
                InspireAI Africa Network was born from a simple observation: Africa has tremendous talent, 
                but limited access to cutting-edge technology education. Our founders, a group of educators 
                and tech professionals from across the continent, came together with a shared vision of 
                democratizing AI and robotics education.
              </p>
              <p>
                What started as a small workshop in Lagos has grown into a continent-wide network, 
                reaching over 2,500 students and professionals across 15 countries. We've partnered 
                with universities, corporations, and government agencies to create sustainable pathways 
                for tech education and career development.
              </p>
              <p>
                Our community-driven approach ensures that our programs are relevant, accessible, 
                and impactful. We believe that by empowering individuals with AI and robotics skills, 
                we're not just building careers – we're building the future of Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="font-roboto text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our diverse team of educators, engineers, and community builders are passionate 
            about empowering the next generation of African tech leaders.
          </p>
          <div className="bg-card rounded-lg p-12 shadow-soft">
            <p className="font-roboto text-muted-foreground">
              Team profiles and founder stories coming soon. Follow us on social media 
              to meet the amazing people behind InspireAI Africa Network.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}