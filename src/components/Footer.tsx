import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/InspireAI.png";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
 <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img
                src={logo}
                alt="AIspireAI Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-montserrat font-bold text-xl text-foreground">
              AIspireAfrica
            </span>
          </Link>
            <p className="font-roboto text-sm leading-relaxed">
              Empowering Africa's future through AI, robotics, and digital skills training.
              Building the next generation of tech innovators.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 font-roboto text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/impact" className="hover:text-primary transition-colors">Our Impact</Link></li>
              <li><Link to="/get-involved" className="hover:text-primary transition-colors">Get Involved</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-lg">Programs</h3>
            <ul className="space-y-2 font-roboto text-sm">
              <li><Link to="/programs" className="hover:text-primary transition-colors">AI Bootcamps</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Robotics Training</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Educator Programs</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Corporate Training</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-lg">Stay Connected</h3>
            <div className="space-y-3 font-roboto text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@aispireai-africa.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+254 (07) 957 723 09</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <NewsletterSubscription variant="footer" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-roboto text-sm">
              {/* get current year */}
              © {new Date().getFullYear()} AIspire Africa Network. All rights reserved.
            </p>
            <div className="flex space-x-6 font-roboto text-sm">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};