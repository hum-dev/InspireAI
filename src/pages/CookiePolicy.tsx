import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - AIspire Africa Network</title>
        <meta 
          name="description" 
          content="Learn about how AIspire Africa Network uses cookies to enhance your browsing experience and improve website functionality." 
        />
        <link rel="canonical" href="/cookies" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold font-montserrat text-foreground mb-4">
                Cookie Policy
              </h1>
              <p className="text-lg font-roboto text-muted-foreground">
                Effective Date: December 1, 2024
              </p>
            </header>

            <article className="prose prose-lg max-w-none font-roboto">
              <div className="bg-card p-8 rounded-lg border border-border space-y-8">
                <section>
                  <p className="text-foreground leading-relaxed">
                    AIspire Africa Network uses cookies to enhance your browsing experience and improve website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">What Are Cookies?</h2>
                  <p className="text-foreground">
                    Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you interact with our site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Types of Cookies We Use</h2>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Essential Cookies:</strong> Required for basic site functionality.</li>
                    <li><strong>Performance Cookies:</strong> Help us analyze site usage and improve performance.</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant content and measure campaign effectiveness.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Managing Cookies</h2>
                  <p className="text-foreground">
                    You can control or disable cookies through your browser settings. However, disabling cookies may affect site functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Consent</h2>
                  <p className="text-foreground">
                    By using our website, you consent to the use of cookies as described in this policy. A cookie banner will appear on your first visit to confirm your preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Updates</h2>
                  <p className="text-foreground">
                    We may revise this policy periodically. Please check this page for the latest version.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default CookiePolicy;