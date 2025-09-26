import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Events() {
  const upcomingEvents = [
    {
      title: "AI for Social Good Hackathon",
      date: "January 20-22, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Lagos, Nigeria + Virtual",
      type: "Hackathon",
      participants: "200+ participants",
      description: "48-hour hackathon focused on developing AI solutions for African social challenges. Open to all skill levels with mentorship and prizes.",
      registrationUrl: "#",
      featured: true
    },
    {
      title: "Robotics Workshop for Educators", 
      date: "February 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Accra, Ghana",
      type: "Workshop",
      participants: "50 educators",
      description: "Hands-on workshop for teachers on integrating robotics into STEM curriculum. Includes take-home robotics kits.",
      registrationUrl: "#",
      featured: false
    },
    {
      title: "Corporate AI Strategy Seminar",
      date: "February 15, 2025", 
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      type: "Seminar",
      participants: "100+ business leaders",
      description: "Strategic seminar for business leaders on implementing AI in African enterprises. Case studies and networking.",
      registrationUrl: "#",
      featured: false
    },
    {
      title: "Youth Robotics Competition",
      date: "March 10, 2025",
      time: "9:00 AM - 5:00 PM", 
      location: "Nairobi, Kenya",
      type: "Competition",
      participants: "150+ students",
      description: "Annual robotics competition for students aged 11-18. Teams compete in challenges while learning about automation.",
      registrationUrl: "#",
      featured: true
    }
  ];

  const pastEvents = [
    {
      title: "AI Bootcamp Graduation Ceremony",
      date: "December 2024",
      location: "Lagos, Nigeria",
      attendees: "200+",
      highlights: "150 graduates, 12 countries represented, 80% job placement rate",
      photos: ["#", "#", "#"],
      recap: "Amazing ceremony celebrating our largest cohort yet. Graduates showcased incredible AI projects."
    },
    {
      title: "Pan-African AI Conference",
      date: "November 2024",
      location: "Cape Town, South Africa",
      attendees: "500+",
      highlights: "25 speakers, 15 countries, 100+ startups showcased",
      photos: ["#", "#", "#"],
      recap: "Groundbreaking conference bringing together AI leaders from across the continent."
    },
    {
      title: "Teacher Training Program Launch",
      date: "October 2024", 
      location: "Kampala, Uganda",
      attendees: "100+",
      highlights: "50 educators trained, 20 schools reached, curriculum framework launched",
      photos: ["#", "#", "#"],
      recap: "Successful launch of our educator training program with overwhelming positive response."
    }
  ];

  const webinars = [
    {
      title: "Introduction to Machine Learning",
      date: "Every Tuesday",
      time: "7:00 PM WAT",
      description: "Weekly webinar series covering ML fundamentals for beginners",
      registrationUrl: "#"
    },
    {
      title: "AI Career Guidance Session",
      date: "First Friday of Month",
      time: "6:00 PM WAT", 
      description: "Monthly career guidance for professionals transitioning to AI",
      registrationUrl: "#"
    },
    {
      title: "Robotics Q&A with Experts",
      date: "Last Saturday of Month",
      time: "3:00 PM WAT",
      description: "Monthly Q&A session with robotics experts and project feedback",
      registrationUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Events & Community Gatherings
          </h1>
          <p className="font-roboto text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join our vibrant community at workshops, competitions, conferences, and networking events 
            across Africa. Connect, learn, and build the future together.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#upcoming">View Upcoming Events</a>
          </Button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss these exciting opportunities to learn, network, and grow with the AI community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className={`hover:shadow-medium transition-all duration-300 ${event.featured ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={event.featured ? "default" : "secondary"}>
                      {event.featured ? "Featured" : event.type}
                    </Badge>
                    {event.featured && <Badge variant="outline">Featured</Badge>}
                  </div>
                  <CardTitle className="font-montserrat text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      {event.participants}
                    </div>
                  </div>
                  
                  <p className="font-roboto text-muted-foreground">{event.description}</p>
                  
                  <Button 
                    variant={event.featured ? "cta" : "default"} 
                    className="w-full" 
                    asChild
                  >
                    <a href={event.registrationUrl}>
                      Register Now <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Webinars */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Regular Webinar Series
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our ongoing webinar series for continuous learning and community connection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-3">
                    {webinar.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {webinar.time}
                    </div>
                  </div>
                  <p className="font-roboto text-muted-foreground mb-4">
                    {webinar.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={webinar.registrationUrl}>Join Series</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Recent Event Highlights
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at our recent successful events and the amazing community we're building.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-montserrat text-lg">{event.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="font-roboto text-muted-foreground">Event Photos</span>
                  </div>
                  
                  <div>
                    <h4 className="font-montserrat font-semibold mb-2">Highlights:</h4>
                    <p className="font-roboto text-sm text-muted-foreground">{event.highlights}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-montserrat font-semibold mb-2">Event Recap:</h4>
                    <p className="font-roboto text-sm text-muted-foreground">{event.recap}</p>
                  </div>
                  
                  <Badge variant="secondary">{event.attendees} attendees</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Never Miss an Event
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our event calendar and newsletter to stay updated on all upcoming 
            workshops, competitions, and community gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Subscribe to Calendar
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
              Join Newsletter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}