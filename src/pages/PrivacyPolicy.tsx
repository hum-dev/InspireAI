import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - AIspireAI Africa Network</title>
        <meta 
          name="description" 
          content="Learn how AIspireAI Africa Network protects your privacy and handles your personal data. Our privacy policy explains data collection, usage, and your rights." 
        />
        <link rel="canonical" href="/privacy" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold font-montserrat text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg font-roboto text-muted-foreground">
                Effective Date: December 1, 2024
              </p>
            </header>

            <article className="prose prose-lg max-w-none font-roboto">
              <div className="bg-card p-8 rounded-lg border border-border space-y-8">
                <section>
                  <p className="text-foreground leading-relaxed">
                    AIspireAI Africa Network is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our programs.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Information We Collect</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>Personal information (name, email, phone) when you register for bootcamps, newsletters, or events.</li>
                    <li>Usage data (IP address, browser type, device info) for analytics and performance.</li>
                    <li>Cookies and tracking technologies to enhance user experience.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">How We Use Your Information</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>To provide and manage educational programs and services.</li>
                    <li>To communicate updates, newsletters, and event information.</li>
                    <li>To improve website functionality and user experience.</li>
                    <li>To comply with legal obligations and protect our community.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Data Protection</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>We follow GDPR and local data protection laws.</li>
                    <li>Data is stored securely and accessed only by authorized personnel.</li>
                    <li>We use HTTPS encryption and CAPTCHA to protect forms.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Your Rights</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>Access, correct, or delete your personal data.</li>
                    <li>Withdraw consent for marketing communications.</li>
                    <li>Contact us at info@aispireai-africa.org for data inquiries.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Third-Party Services</h2>
                  <ul className="space-y-2 text-foreground">
                    <li>We may use secure third-party tools (e.g., payment gateways, analytics).</li>
                    <li>These services comply with privacy regulations and do not share your data without consent.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-montserrat text-foreground mb-4">Updates</h2>
                  <p className="text-foreground">
                    We may update this policy periodically. Changes will be posted on this page with a revised effective date.
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

export default PrivacyPolicy;