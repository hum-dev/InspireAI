import { Link } from "react-router-dom";
import { BookOpen, Download, Video, ExternalLink, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Resources() {
  const resources = [
    {
      type: "Guide",
      title: "AI Literacy for Beginners",
      description: "Complete guide to understanding artificial intelligence, machine learning, and their applications in African contexts.",
      downloadUrl: "#",
      category: "AI Fundamentals",
      level: "Beginner",
      format: "PDF"
    },
    {
      type: "Toolkit",
      title: "Robotics Programming Starter Kit",
      description: "Python libraries, code examples, and project templates for robotics programming.",
      downloadUrl: "#",
      category: "Robotics",
      level: "Intermediate",
      format: "ZIP"
    },
    {
      type: "Curriculum",
      title: "Educator's AI Teaching Guide",
      description: "Comprehensive curriculum framework for teaching AI concepts in African schools.",
      downloadUrl: "#",
      category: "Education",
      level: "Educator",
      format: "PDF"
    },
    {
      type: "Report",
      title: "AI in African Agriculture",
      description: "Research report on AI applications in agriculture across sub-Saharan Africa.",
      downloadUrl: "#",
      category: "Applications",
      level: "Advanced",
      format: "PDF"
    }
  ];

  const videos = [
    {
      title: "Introduction to Machine Learning",
      duration: "45 min",
      speaker: "Dr. Amina Hassan",
      description: "Fundamental concepts of machine learning explained with African case studies.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#"
    },
    {
      title: "Building Your First Robot",
      duration: "60 min", 
      speaker: "Engineer John Okafor",
      description: "Step-by-step tutorial on assembling and programming a basic robot.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#"
    },
    {
      title: "AI Ethics and Society",
      duration: "30 min",
      speaker: "Prof. Sarah Kimani",
      description: "Important considerations for responsible AI development in African contexts.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#"
    }
  ];

  const blogPosts = [
    {
      title: "How AI is Transforming Healthcare in Nigeria",
      excerpt: "Exploring innovative AI applications in Nigerian hospitals and clinics, from diagnostic tools to patient management systems.",
      author: "Dr. Michael Adebayo",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Healthcare"
    },
    {
      title: "Building Inclusive AI: Lessons from Kenya",
      excerpt: "How Kenyan startups are developing AI solutions that work for diverse populations and languages.",
      author: "Grace Wanjiku",
      date: "December 10, 2024", 
      readTime: "6 min read",
      category: "Innovation"
    },
    {
      title: "The Future of Education Technology in Africa",
      excerpt: "Examining how AI and robotics education can address skill gaps and prepare African youth for the future economy.",
      author: "Prof. Kwame Asante",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Education"
    }
  ];

  const tools = [
    {
      name: "Scratch for Arduino",
      description: "Visual programming environment for robotics projects",
      url: "#",
      category: "Programming"
    },
    {
      name: "TensorFlow Lite",
      description: "Lightweight machine learning framework for mobile devices",
      url: "#",
      category: "AI Framework"
    },
    {
      name: "OpenCV",
      description: "Computer vision library for image and video processing",
      url: "#",
      category: "Computer Vision"
    },
    {
      name: "Python for AI",
      description: "Programming language tutorials and resources for AI development",
      url: "#",
      category: "Programming"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
            Resources & Learning Materials
          </h1>
          <p className="font-roboto text-lg text-muted-foreground max-w-3xl mx-auto">
            Free resources, guides, videos, and tools to support your AI and robotics learning journey. 
            Everything you need to get started and advance your skills.
          </p>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Free Download Resources
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides, toolkits, and curricula designed by our expert instructors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <div className="flex gap-2">
                      <Badge variant="outline">{resource.level}</Badge>
                      <Badge variant="outline">{resource.format}</Badge>
                    </div>
                  </div>
                  <CardTitle className="font-montserrat text-xl">{resource.title}</CardTitle>
                  <p className="font-roboto text-sm text-muted-foreground">{resource.category}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-roboto text-muted-foreground">{resource.description}</p>
                  <Button variant="cta" className="w-full" asChild>
                    <a href={resource.downloadUrl}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Video Learning Library
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert-led video tutorials and lectures covering key concepts in AI and robotics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <Video className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{video.duration}</Badge>
                  </div>
                  <CardTitle className="font-montserrat text-lg">{video.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {video.speaker}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-roboto text-muted-foreground">{video.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={video.videoUrl}>
                      <Video className="mr-2 h-4 w-4" />
                      Watch Video
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Latest Blog Posts & News
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest developments in AI, robotics, and tech education across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="font-montserrat text-lg leading-tight">{post.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-roboto text-muted-foreground">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-roboto text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="link" asChild>
                      <Link to="/blog">
                        Read More <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Recommended Tools & Software
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential tools and software platforms we recommend for AI and robotics development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                    {tool.name}
                  </h3>
                  <p className="font-roboto text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <Badge variant="outline" className="mb-4">{tool.category}</Badge>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Stay Updated
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest resources, program updates, and AI education news.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="default" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}