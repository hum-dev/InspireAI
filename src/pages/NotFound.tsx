import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - AIspire Africa</title>
        <meta
          name="description"
          content="Sorry, we couldn't find the page you're looking for. Explore our other resources and programs at AIspire Africa."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="section-spacing container-responsive flex min-h-[80vh] items-center justify-center">
        <Card className="p-responsive max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <OptimizedImage
              src="/404-illustration.svg"
              alt="Page not found illustration"
              width={300}
              height={200}
              className="mx-auto mb-8"
              fallbackSrc="/placeholder.svg"
            />

            <h1 className="heading-responsive text-primary mb-4">
              Page Not Found
            </h1>
            <p className="text-responsive text-muted-foreground mb-8">
              Sorry, we couldn't find what you're looking for. Let's get you
              back on track.
            </p>

            <div className="flex-responsive justify-center gap-4 mb-12">
              <Button asChild variant="default" size="lg">
                <Link to="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>

            <div className="hidden-mobile">
              <h2 className="text-lg font-semibold mb-4">Popular Resources</h2>
              <nav
                className="grid-responsive gap-4"
                aria-label="Alternative pages"
              >
                <Link
                  to="/programs"
                  className="p-4 hover:bg-muted rounded-lg transition-colors"
                >
                  <h3 className="font-medium mb-2">Our Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore our AI and robotics training programs
                  </p>
                </Link>
                <Link
                  to="/resources"
                  className="p-4 hover:bg-muted rounded-lg transition-colors"
                >
                  <h3 className="font-medium mb-2">Learning Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Access free educational materials
                  </p>
                </Link>
                <Link
                  to="/events"
                  className="p-4 hover:bg-muted rounded-lg transition-colors"
                >
                  <h3 className="font-medium mb-2">Events</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our upcoming workshops and webinars
                  </p>
                </Link>
              </nav>
            </div>
          </motion.div>
        </Card>
      </main>
    </>
  );
};

export default NotFound;
