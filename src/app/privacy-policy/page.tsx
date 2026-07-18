import Link from "next/link";
import styles from "./privacy-policy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-background pb-20 pt-28 lg:pt-32">
      <div className={styles.wrap}>
        <Link href="/" className={styles.backLink}>
          ← Back to ThroughPoint Marketing
        </Link>

        <header className={styles.docHead}>
          <div className={styles.eyebrow}>Legal</div>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>
            ThroughPoint Marketing &nbsp;·&nbsp; Effective date: July 5, 2026
            &nbsp;·&nbsp; Last updated: July 5, 2026
          </p>
        </header>

        <nav className={styles.toc} aria-label="Table of contents">
          <p className={styles.tocLabel}>Contents</p>
          <ol className={styles.tocList}>
            <li>
              <a href="#intro">1. Introduction</a>
            </li>
            <li>
              <a href="#collect">2. Information We Collect</a>
            </li>
            <li>
              <a href="#cookies">3. Cookies &amp; Tracking Technologies</a>
            </li>
            <li>
              <a href="#use">4. How We Use Information</a>
            </li>
            <li>
              <a href="#share">5. How We Share Information</a>
            </li>
            <li>
              <a href="#marketing">6. Email &amp; Marketing Communications</a>
            </li>
            <li>
              <a href="#retention">7. Data Retention</a>
            </li>
            <li>
              <a href="#security">8. Data Security</a>
            </li>
            <li>
              <a href="#rights">9. Your Privacy Choices &amp; Rights</a>
            </li>
            <li>
              <a href="#state">10. State-Specific Disclosures</a>
            </li>
            <li>
              <a href="#children">11. Children&apos;s Privacy</a>
            </li>
            <li>
              <a href="#links">12. Third-Party Links</a>
            </li>
            <li>
              <a href="#transfers">13. International Users</a>
            </li>
            <li>
              <a href="#changes">14. Changes to This Policy</a>
            </li>
            <li>
              <a href="#contact">15. Contact Us</a>
            </li>
          </ol>
        </nav>

        <section id="intro" className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            ThroughPoint Marketing (&quot;ThroughPoint Marketing,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
            privacy and is committed to protecting the personal information of
            everyone who visits our website at{" "}
            <a href="https://throughpointmarketing.com" className={styles.link}>
              throughpointmarketing.com
            </a>{" "}
            (the &quot;Site&quot;) or otherwise interacts with us, including
            prospective and current clients.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use
            and share it, the choices you have, and how you can contact us with
            questions. By using the Site, you agree to the practices described in
            this Policy. If you do not agree, please do not use the Site.
          </p>
          <p>
            ThroughPoint Marketing is based in the State of Illinois, United
            States, and this Policy is governed by U.S. law. If you are located
            outside the United States, please see Section 13.
          </p>
        </section>

        <section id="collect" className={styles.section}>
          <h2>2. Information We Collect</h2>
          <h3>A. Information you provide directly</h3>
          <p>
            When you fill out a contact form, request a consultation, subscribe
            to updates, or otherwise communicate with us, we may collect:
          </p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Company name and job title</li>
            <li>
              Business details you choose to share, such as company size,
              marketing budget, industry, or goals
            </li>
            <li>
              Any other information you voluntarily include in a message to us
            </li>
          </ul>
          <h3>B. Information collected automatically</h3>
          <p>
            When you visit the Site, we and our service providers automatically
            collect certain technical information, including:
          </p>
          <ul>
            <li>IP address and approximate location</li>
            <li>Browser type, device type, and operating system</li>
            <li>
              Pages viewed, links clicked, referring/exit pages, and time spent
              on the Site
            </li>
            <li>
              Advertising identifiers associated with your device or browser (see
              Section 3)
            </li>
          </ul>
          <h3>C. Information from third parties</h3>
          <p>
            We may receive information about you from advertising and analytics
            partners (e.g., Google, Meta, LinkedIn) when you interact with our
            ads or content on their platforms.
          </p>
        </section>

        <section id="cookies" className={styles.section}>
          <h2>3. Cookies &amp; Tracking Technologies</h2>
          <p>
            We use cookies, pixels, and similar technologies to operate the Site
            and to understand and improve our marketing. These generally fall
            into the following categories:
          </p>
          <table>
            <tbody>
              <tr>
                <th>Category</th>
                <th>Purpose</th>
              </tr>
              <tr>
                <td>Analytics tools</td>
                <td>
                  Help us understand site traffic, visitor behavior, and how the
                  Site is used, so we can improve it
                </td>
              </tr>
              <tr>
                <td>Advertising &amp; retargeting tools</td>
                <td>
                  Measure the performance of our ads and show relevant ads to
                  visitors on social media and other platforms
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The specific third-party providers we use within these categories may
            change over time as our marketing tools evolve. These providers may
            set their own cookies and may combine information collected on our
            Site with other information they hold about you, in accordance with
            their own privacy policies. You can control cookies through your
            browser settings, and you can opt out of interest-based advertising
            using tools such as the{" "}
            <a
              href="https://optout.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Digital Advertising Alliance opt-out page
            </a>{" "}
            or your browser&apos;s &quot;Do Not Track&quot; / privacy settings.
          </p>
          <div className={styles.callout}>
            Because we use advertising and analytics tools, we recommend adding a
            cookie-consent banner to the live Site — see the recommendations at
            the end of this document.
          </div>
        </section>

        <section id="use" className={styles.section}>
          <h2>4. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Respond to inquiries and provide requested information about our
              services
            </li>
            <li>Deliver, maintain, and improve the Site</li>
            <li>
              Understand how visitors use the Site and measure the effectiveness
              of our marketing
            </li>
            <li>
              Send marketing emails about our services, insights, or offers
              (with an option to unsubscribe at any time)
            </li>
            <li>
              Deliver targeted advertising and measure ad performance through
              Google, Meta, and LinkedIn
            </li>
            <li>
              Comply with legal obligations and protect our rights, property, or
              safety, and that of others
            </li>
          </ul>
        </section>

        <section id="share" className={styles.section}>
          <h2>5. How We Share Information</h2>
          <p>
            We do not sell your personal information for money. We may share
            information with:
          </p>
          <ul>
            <li>
              <strong>Service providers</strong> who help us operate the Site and
              our business (e.g., hosting providers, CRM/email platforms,
              analytics and advertising platforms), under obligations to protect
              your information
            </li>
            <li>
              <strong>Advertising and analytics partners</strong> — the
              analytics and advertising/retargeting providers described in
              Section 3, which may use information for their own advertising
              purposes subject to their own privacy policies
            </li>
            <li>
              <strong>Legal and safety purposes</strong> — to comply with
              applicable law, regulation, legal process, or governmental request,
              or to protect the rights, property, or safety of ThroughPoint
              Marketing, our clients, or others
            </li>
            <li>
              <strong>Business transfers</strong> — in connection with a merger,
              acquisition, financing, or sale of assets, where personal
              information may be transferred as part of that transaction
            </li>
          </ul>
        </section>

        <section id="marketing" className={styles.section}>
          <h2>6. Email &amp; Marketing Communications</h2>
          <p>
            If you submit your contact information through the Site, we may send
            you marketing emails about our services. Every marketing email we send
            includes a working unsubscribe link, in accordance with the CAN-SPAM
            Act. You may also opt out at any time by:
          </p>
          <ul>
            <li>
              Clicking &quot;unsubscribe&quot; at the bottom of any marketing
              email, or
            </li>
            <li>
              Emailing us directly at{" "}
              <a
                href="mailto:throughpointmarketing@gmail.com"
                className={styles.link}
              >
                throughpointmarketing@gmail.com
              </a>
            </li>
          </ul>
          <p>
            Even after you opt out of marketing emails, we may still send you
            transactional or administrative messages related to services
            you&apos;ve requested.
          </p>
        </section>

        <section id="retention" className={styles.section}>
          <h2>7. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill
            the purposes described in this Policy — including maintaining our
            client and prospect records, complying with legal, tax, or
            accounting requirements, and resolving disputes — after which we
            securely delete or anonymize it. Analytics and advertising data is
            generally retained according to the retention settings of the
            applicable third-party platform (e.g., Google Analytics, Meta).
          </p>
        </section>

        <section id="security" className={styles.section}>
          <h2>8. Data Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards
            designed to protect personal information from unauthorized access,
            use, alteration, or disclosure. However, no method of transmission
            or storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section id="rights" className={styles.section}>
          <h2>9. Your Privacy Choices &amp; Rights</h2>
          <p>
            Depending on where you live, you may have the right to:
          </p>
          <ul>
            <li>
              Request access to, or a copy of, the personal information we hold
              about you
            </li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>
              Opt out of marketing communications and certain uses of your
              information for advertising
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the information in
            Section 15. We will respond within a reasonable time and in
            accordance with applicable law.
          </p>
        </section>

        <section id="state" className={styles.section}>
          <h2>10. State-Specific Disclosures</h2>
          <p>
            ThroughPoint Marketing is based in Illinois. As a small business, we
            do not currently believe we meet the thresholds that trigger
            obligations under comprehensive state privacy laws such as the
            California Consumer Privacy Act (CCPA), Colorado Privacy Act,
            Virginia Consumer Data Protection Act, or similar statutes. If this
            changes, or if you are a resident of a state with such a law and wish
            to exercise rights under it, please contact us and we will address
            your request on a good-faith basis.
          </p>
          <p>
            <strong>Illinois residents:</strong> ThroughPoint Marketing does not
            knowingly collect biometric identifiers or biometric information as
            defined by the Illinois Biometric Information Privacy Act (BIPA). In
            the event of a data breach involving Illinois residents&apos; personal
            information, we will provide notification in accordance with the
            Illinois Personal Information Protection Act.
          </p>
        </section>

        <section id="children" className={styles.section}>
          <h2>11. Children&apos;s Privacy</h2>
          <p>
            The Site is intended for business audiences and is not directed to
            children under 13. We do not knowingly collect personal information
            from children under 13. If you believe a child has provided us with
            personal information, please contact us and we will delete it.
          </p>
        </section>

        <section id="links" className={styles.section}>
          <h2>12. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites. We
            encourage you to review the privacy policy of any third-party site
            you visit.
          </p>
        </section>

        <section id="transfers" className={styles.section}>
          <h2>13. International Users</h2>
          <p>
            The Site is operated in the United States. If you access the Site
            from outside the United States, your information will be transferred
            to, stored, and processed in the United States, where data protection
            laws may differ from those in your jurisdiction.
          </p>
        </section>

        <section id="changes" className={styles.section}>
          <h2>14. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal, operational, or regulatory
            reasons. The &quot;Last updated&quot; date at the top of this page
            reflects the most recent revision. Material changes will be posted on
            this page.
          </p>
        </section>

        <section id="contact" className={styles.section}>
          <h2>15. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            any privacy rights, contact us at:
          </p>
          <p>
            ThroughPoint Marketing
            <br />
            420 Pine Lake CIR
            <br />
            Email:{" "}
            <a
              href="mailto:throughpointmarketing@gmail.com"
              className={styles.link}
            >
              throughpointmarketing@gmail.com
            </a>
            <br />
            Phone: 224-664-0028
          </p>
        </section>
      </div>
    </section>
  );
}
