import { Link } from "react-router-dom";
import { Users, Calendar, Award, Clock, BookOpen, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import roboticsWorkshop from "@/assets/robotics-workshop.jpg";
import aiTraining from "@/assets/ai-training.jpg";

export default function Programs() {
  const programs = [
    {
      title: "AI & Robotics Bootcamp (Youth)",
      duration: "3 months",
      level: "Beginner to Intermediate",
      age: "11-25 years",
      description: "Intensive hands-on training in AI fundamentals, machine learning, and robotics programming. Students build real projects and compete in robotics challenges.",
      features: ["Python Programming", "Machine Learning Basics", "Robot Assembly & Programming", "AI Ethics", "Final Project Showcase"],
      image: roboticsWorkshop,
      price: "Sponsored - Free",
      nextStart: "January 15, 2025"
    },
    {
      title: "Educator Training Program",
      duration: "6 weeks",
      level: "All Levels",
      age: "Educators",
      description: "Comprehensive training for teachers and educators to integrate AI literacy and digital skills into their curriculum.",
      features: ["AI Curriculum Design", "Teaching Methodologies", "Assessment Strategies", "Resource Development", "Community Building"],
      image: aiTraining,
      price: "$299",
      nextStart: "February 1, 2025"
    },
    {
      title: "Corporate AI Upskilling",
      duration: "4-8 weeks",
      level: "Customizable",
      age: "Professionals",
      description: "Custom workshops and training programs designed for organizations looking to integrate AI into their operations.",
      features: ["Custom Curriculum", "Industry-Specific Training", "Hands-on Workshops", "Implementation Support", "Ongoing Mentorship"],
      image: aiTraining,
      price: "Contact for Quote",
      nextStart: "Flexible Schedule"
    }
  ];

  const bootcampDetails = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 20 students per cohort for personalized attention"
    },
    {
      icon: Laptop,
      title: "Equipment Provided",
      description: "All necessary hardware and software provided during training"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Industry-recognized certificates upon successful completion"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Weekend and evening options available for working professionals"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Transform Your Future with AI & Robotics
          </h1>
          <p className="font-roboto text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive training programs designed for students, educators, 
            and professionals. Build the skills that will define the future of work in Africa.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="#programs">Explore Programs</Link>
          </Button>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Training Programs
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to meet you where you are and take you where you want to go.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{program.level}</Badge>
                    <Badge variant="outline">{program.age}</Badge>
                  </div>
                  <CardTitle className="font-montserrat text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-roboto text-muted-foreground">{program.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {program.nextStart}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-montserrat font-semibold">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="font-roboto text-sm text-muted-foreground flex items-center gap-2">
                          <BookOpen className="h-3 w-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-montserrat font-bold text-lg text-primary">{program.price}</span>
                    </div>
                    <Button variant="cta" className="w-full" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support to ensure your success in the AI and robotics field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bootcampDetails.map((detail, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <detail.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                  {detail.title}
                </h3>
                <p className="font-roboto text-muted-foreground">
                  {detail.description}
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
            Ready to Start Your Journey?
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students, educators, and professionals who are already building 
            the future with AI and robotics skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Apply for a Program</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/contact">Request Corporate Training</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}