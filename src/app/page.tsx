import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import StickyCta from "@/components/StickyCta";

const industries = [
  "Dental Practices",
  "MedSpas and aesthetics",
  "Mortgages & financial services",
  "Health and wellness businesses",
  "Local service businesses",
  "Professional services firms",
];

const clientPainPoints = [
  "Customers compare you before they call.",
  "AI needs clear proof that your business is credible.",
  "Weak listings, thin content, and inconsistent signals make you harder to recommend.",
];

const steps = [
  {
    number: "1.",
    title: "The Personalized Signal Scan",
    body: "We run a quick, deep-dive scan of your digital footprint to see exactly how AI search engines perceive your business today.",
    icon: "document",
  },
  {
    number: "2.",
    title: "The Custom Roadmap",
    body: "We don’t give you a cookie-cutter template. You get a step-by-step blueprint to optimize your data for AI discovery.",
    icon: "chart",
  },
  {
    number: "3.",
    title: "The Partner Plan",
    body: "Ongoing consulting and execution support you need to keep your business ahead of the curve.",
    icon: "team",
  },
];

const signalSlices = [
  {
    title: "Trust",
    points: ["Reviews", "Testimonials", "Certifications"],
    labelX: 250,
    labelY: 122,
    pointsX: 250,
    pointsY: 72,
  },
  {
    title: "Expertise",
    points: ["Blogs", "Video", "FAQs"],
    labelX: 362,
    labelY: 212,
    pointsX: 412,
    pointsY: 170,
  },
  {
    title: "Authority",
    points: ["Mentions", "Awards", "Partnerships"],
    labelX: 330,
    labelY: 332,
    pointsX: 370,
    pointsY: 392,
  },
  {
    title: "Visibility",
    points: ["SEO", "Maps", "Directory listings"],
    labelX: 170,
    labelY: 332,
    pointsX: 130,
    pointsY: 392,
  },
  {
    title: "Experience",
    points: ["Referrals", "Retention", "Customer satisfaction"],
    labelX: 138,
    labelY: 212,
    pointsX: 88,
    pointsY: 170,
  },
  {
    title: "Proof",
    points: ["Licenses", "Social proof", "Years in business"],
    labelX: 250,
    labelY: 382,
    pointsX: 250,
    pointsY: 436,
  },
];

const signalCards = signalSlices.map((signal) => ({
  title: signal.title,
  body: signal.points.join(", "),
}));

const trustProof = [
  "No obligation",
  "Personalized to your website",
  "Delivered with clear next steps",
];

const faqs = [
  {
    question: "What does ThroughPoint Marketing do?",
    answer:
      "ThroughPoint Marketing helps local businesses improve the digital trust, authority, visibility, proof, expertise, and customer experience signals that influence how customers and AI search systems evaluate a business.",
  },
  {
    question: "What is a Signal Scan?",
    answer:
      "A Signal Scan is a focused audit of a business's digital footprint. It identifies where the business is visible, trusted, authoritative, and easy to understand for AI search engines and prospective customers.",
  },
  {
    question: "Who is the AI readiness framework for?",
    answer:
      "The AI readiness framework is built for local businesses, including dental practices, MedSpas, health and wellness companies, local service businesses, financial services, and professional services firms.",
  },
  {
    question: "How does this support generative engine optimization?",
    answer:
      "Generative engine optimization focuses on making business information clear, consistent, credible, and easy for AI systems to retrieve and cite. ThroughPoint's process strengthens those signals across search, maps, reviews, content, and business profiles.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://throughpointmarketing.com/#organization",
      name: "ThroughPoint Marketing",
      url: "https://throughpointmarketing.com",
      logo: "https://throughpointmarketing.com/throughpoint-logo-transparent.png",
      description:
        "ThroughPoint Marketing helps local businesses improve AI readiness, digital trust signals, visibility, authority, and customer experience.",
      areaServed: "United States",
      knowsAbout: [
        "AI readiness",
        "AI search optimization",
        "generative engine optimization",
        "local business marketing",
        "digital trust signals",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://throughpointmarketing.com/#website",
      url: "https://throughpointmarketing.com",
      name: "ThroughPoint Marketing",
      publisher: {
        "@id": "https://throughpointmarketing.com/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://throughpointmarketing.com/#signal-scan",
      name: "Personalized Signal Scan",
      serviceType: "AI readiness and generative engine optimization audit",
      provider: {
        "@id": "https://throughpointmarketing.com/#organization",
      },
      areaServed: "United States",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Local businesses",
      },
      description:
        "A digital footprint audit that evaluates trust, authority, visibility, expertise, proof, and customer experience signals for AI discovery.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://throughpointmarketing.com/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function StepIcon({ type }: { type: string }) {
  if (type === "chart") {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path d="M8 35h28M10 35V23h6v12M20 35V17h6v18M30 35V10h6v25" />
        <path d="M9 19 20 14l8-5 7-4M32 5h5v5" />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="16" r="7" />
        <path d="M10 35c1.7-7 6-11 12-11s10.3 4 12 11" />
        <circle cx="10" cy="20" r="5" />
        <circle cx="34" cy="20" r="5" />
        <path d="M3 34c1.2-5.4 4.2-8.4 8.7-8.7M40.8 34c-1.2-5.4-4.2-8.4-8.7-8.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <path d="M13 8h18l5 5v23H13z" />
      <path d="M31 8v7h7M18 18h10M18 24h14M18 30h14" />
      <path d="M11 12H8v28h24v-3" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#clients">Clients</a>
        <a href="#signal-scan">Signal Scan</a>
        <a href="#framework">Framework</a>
        <a href="#faq">FAQs</a>
        <a href="#signal-form">Contact</a>
      </nav>
      <section className="hero">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <Image
              src="/throughpoint-logo-transparent.png"
              alt="ThroughPoint Marketing"
              width={190}
              height={88}
              className="logo"
              priority
            />
            <h1>
              Get <span>Found By AI.</span>
              <br />
              Get <span>Chosen By Customers</span>
            </h1>
            <p>
              AI is changing how customers discover and choose businesses.
              Today&apos;s growth comes from building the trust, authority, and
              visibility signals that AI and people rely on.
            </p>
            <a href="#signal-form" className="hero-cta">
              Get Your Signal Scan
            </a>
          </div>
          <Image
            src="/ai-search-phone-v2.png"
            alt="AI search on a phone"
            width={650}
            height={730}
            className="hero-image"
            priority
          />
        </div>
        <div className="section-inner">
          <div className="divider" />
        </div>
      </section>

      <section className="clients" id="clients">
        <div className="section-inner">
          <h2>
            <span>Who</span> We Help
          </h2>
          <h3>
            Built for customers.
            <br />
            Ready for AI
          </h3>
          <p className="client-intro">
            We help local businesses strengthen the signals AI systems use to
            understand, recommend, and rank them.
          </p>
          <p className="client-fit">
            Best for owner-led and service-based businesses that rely on local
            trust, reviews, referrals, and search visibility.
          </p>
          <h3 className="industry-heading">Industries we know well:</h3>
          <div className="industry-chips" aria-label="Industries we serve">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
          <div className="client-points">
            {clientPainPoints.map((point) => (
              <article key={point}>
                <p>{point}</p>
              </article>
            ))}
          </div>
          <div className="divider" />
        </div>
      </section>

      <section className="signal" id="signal-scan">
        <div className="section-inner signal-grid">
          <div className="signal-copy">
            <h2>
              <span>The</span> Signal <span>Scan</span>
            </h2>
            <p className="strong">
              Every customer decision is shaped by Signals — proof points that
              answer “Can I trust this business?” before a single word is
              spoken.
            </p>
            <p className="strong">
              ThroughPoints Signal Scan™ evaluates your business across five of
              them, from visibility to authority to customer experience, and
              shows you exactly where you&apos;re strong and where you&apos;re
              invisible.
            </p>
            <p className="trust">
              Customers choose businesses they trust. AI recommends businesses
              it trusts.
            </p>
          </div>
          <div className="signal-art">
            <Image
              src="/wheel3-transparent.png"
              alt="Signal Economy wheel showing trust, expertise, authority, visibility, and experience signals"
              width={582}
              height={582}
              className="signal-wheel-image"
            />
            <p>
              Signal Scan™ maps your business across six signals that shape how
              customers — and AI — find, trust, and choose you.
            </p>
          </div>
        </div>
        <div className="section-inner">
          <div className="signal-cards" aria-label="Signal Scan categories">
            {signalCards.map((signal) => (
              <article key={signal.title}>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="section-inner">
          <div className="cta-row">
            <div className="divider" />
            <a href="#signal-form" className="cta">
              Sign up for your personalized Signal Scan
            </a>
          </div>
        </div>
      </section>

      <section className="framework" id="framework">
        <div className="section-inner">
          <h2>
            Three Steps to Your <span>AI Readiness Framework</span>
          </h2>
          <h3>
            Understand where your business stands today and what needs to happen
            next
          </h3>
          <div className="steps">
            {steps.map((step) => (
              <article key={step.title} className="step-card">
                <div className="icon-circle">
                  <StepIcon type={step.icon} />
                </div>
                <h4>
                  <span>{step.number}</span> {step.title}
                </h4>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <div className="divider" />
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="section-inner">
          <h2>
            AI Readiness <span>FAQs</span>
          </h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="divider" />
        </div>
      </section>

      <section className="contact" id="contact">
        <Image
          src="/meeting-background-v3.png"
          alt="Consultants meeting with clients"
          fill
          className="contact-bg"
          sizes="100vw"
        />
        <div className="contact-card" id="signal-form">
          <h2>Contact Us</h2>
          <div className="accent" />
          <p>Request a personalized Signal Scan for your business.</p>
          <ul className="proof-list">
            {trustProof.map((proof) => (
              <li key={proof}>{proof}</li>
            ))}
          </ul>
          <LeadForm />
          <a className="site-link" href="https://ThroughPointMarketing.com">
            ThroughPointMarketing.com
          </a>
        </div>
      </section>
      <StickyCta />
    </main>
  );
}
