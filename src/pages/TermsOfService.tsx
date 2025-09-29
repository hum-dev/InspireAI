import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - InspireAI Africa Network</title>
        <meta 
          name="description" 
          content="Read the terms and conditions for using InspireAI Africa Network services, website, and educational programs. Know your rights and responsibilities." 
        />
        <link rel="canonical" href="/terms" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold font-montserrat text-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-lg font-roboto text-muted-foreground">
                Effective Date: December 1, 2024
              </p>
            </header>

            <article className="prose prose-lg max-w-none font-roboto">
              <div className="bg-card p-8 rounded-lg border border-border space-y-8">
                <section>
                  <p className="text-foreground leading-relaxed">
                    Welcome to InspireAI Africa Network. By accessing our website or participating in our programs, you agree to the following terms and conditions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Use of Website</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>You must be at least 13 years old to use our services.</li>
                    <li>You agree to use the site for lawful and educational purposes only.</li>
                    <li>Do not misuse, copy, or distribute content without permission.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Registration and Participation</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>Accurate information is required during registration.</li>
                    <li>We reserve the right to approve or deny participation in programs.</li>
                    <li>Payments (if applicable) must be made through secure gateways.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Intellectual Property</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>All content, logos, and materials are property of InspireAI Africa Network.</li>
                    <li>You may not reproduce or use content without written consent.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Limitation of Liability</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>We are not liable for any indirect or consequential damages.</li>
                    <li>Educational outcomes may vary and are not guaranteed.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Termination</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>We may suspend or terminate access for violations of these terms.</li>
                    <li>You may discontinue use at any time.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Governing Law</h2>
                  <p className="text-foreground">
                    These terms are governed by local laws and international data protection standards.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Changes to Terms</h2>
                  <p className="text-foreground">
                    We may update these terms periodically. Continued use of the site implies acceptance of changes.
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

export default TermsOfService;