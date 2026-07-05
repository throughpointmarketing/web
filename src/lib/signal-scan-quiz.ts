export type QuizOption = {
  label: string;
  pts: number;
};

export type QuizQuestion = {
  signal: string;
  q: string;
  weakestTip: string;
  options: QuizOption[];
};

export type QuizTier = {
  min: number;
  max: number;
  name: string;
  desc: string;
};

export const SIGNAL_SCAN_QUESTIONS: QuizQuestion[] = [
  {
    signal: "Trust Signals™",
    q: "How strong is your Google review presence?",
    weakestTip:
      "Reviews are the #1 trust cue AI models look for. Start a simple ask-every-customer review routine — volume and recency both matter.",
    options: [
      { label: "Fewer than 10 reviews, and they rarely come in", pts: 0 },
      { label: "A modest number, but new ones are slow and sporadic", pts: 1 },
      {
        label: "A healthy base of reviews with a steady trickle of new ones",
        pts: 2,
      },
      {
        label: "50+ reviews, high average rating, and we actively request them",
        pts: 3,
      },
    ],
  },
  {
    signal: "Expertise Signals™",
    q: "How often do you publish content that answers your customers' real questions — blogs, FAQs, guides, or videos?",
    weakestTip:
      "AI recommends businesses that demonstrate expertise in writing. An FAQ page and a monthly Q&A-style post are the fastest wins here.",
    options: [
      { label: "We don't really publish content", pts: 0 },
      { label: "We have a few pages, but nothing new in months", pts: 1 },
      { label: "We publish occasionally and keep an FAQ section", pts: 2 },
      {
        label: "We publish regularly and answer customer questions on purpose",
        pts: 3,
      },
    ],
  },
  {
    signal: "Authority Signals™",
    q: "Beyond your own website, where does your business show up — media features, awards, associations, partnerships, community events?",
    weakestTip:
      "Third-party mentions teach AI that others vouch for you. Association memberships, local media, and podcast guest spots all count.",
    options: [
      { label: "Pretty much nowhere but our own site", pts: 0 },
      { label: "One or two mentions, mostly older", pts: 1 },
      { label: "Some credentials, memberships, or local press", pts: 2 },
      {
        label: "Awards, media features, partnerships — we're visibly vouched for",
        pts: 3,
      },
    ],
  },
  {
    signal: "Visibility Signals™",
    q: "How buttoned-up is your Google Business Profile — and are your name, address, and phone consistent everywhere online?",
    weakestTip:
      "Inconsistent listings confuse AI about basic facts. Claim and complete your Google Business Profile, then match every directory to it exactly.",
    options: [
      { label: "Honestly, I'm not sure we've claimed our profile", pts: 0 },
      { label: "Claimed, but incomplete or outdated in places", pts: 1 },
      { label: "Profile is solid; listings are mostly consistent", pts: 2 },
      {
        label: "Fully optimized profile, consistent listings, and we monitor them",
        pts: 3,
      },
    ],
  },
  {
    signal: "Experience Signals™",
    q: "How easy is it to do business with you online — mobile-friendly site, online booking, quick ways to get in touch?",
    weakestTip:
      "AI favors businesses customers can actually act on. Online booking or a one-tap contact option is often the single biggest conversion fix.",
    options: [
      { label: "Our website is dated and hard to use on a phone", pts: 0 },
      { label: "The site works, but contacting or booking takes effort", pts: 1 },
      { label: "Mobile-friendly with easy contact options", pts: 2 },
      {
        label: "Fast, mobile-first site with online booking and instant contact",
        pts: 3,
      },
    ],
  },
  {
    signal: "AI Readiness",
    q: "Have you ever checked what AI tools like ChatGPT actually say about your business — or optimized your content for AI answers?",
    weakestTip:
      'Most businesses have never run the "mirror test." Ask ChatGPT to describe your business today — what it gets wrong is your roadmap.',
    options: [
      { label: "It's never crossed my mind", pts: 0 },
      { label: "I've wondered, but never actually checked", pts: 1 },
      { label: "I've checked, but haven't done anything about it", pts: 2 },
      {
        label: "We monitor AI results and optimize our content for them",
        pts: 3,
      },
    ],
  },
];

export const SIGNAL_SCAN_TIERS: QuizTier[] = [
  {
    min: 0,
    max: 39,
    name: "Weak Signal",
    desc: "Right now, AI tools are likely guessing about your business — or skipping it entirely when customers ask for recommendations. The good news: you have the most to gain, and the first fixes are usually fast. A full AI Readiness Audit will show you exactly where to start.",
  },
  {
    min: 40,
    max: 64,
    name: "Mixed Signal",
    desc: "You have a real foundation, but gaps in your signals mean AI gets an incomplete — and sometimes inaccurate — picture of your business. Competitors with cleaner signals may be recommended ahead of you. Targeted fixes could move you up fast.",
  },
  {
    min: 65,
    max: 84,
    name: "Strong Signal",
    desc: "Nice work — AI can find you and mostly gets you right. You're ahead of the majority of small businesses. The opportunity now is fine-tuning: closing your weakest signal and optimizing content specifically for AI-generated answers so you're the one recommended, not just mentioned.",
  },
  {
    min: 85,
    max: 100,
    name: "Clear Signal",
    desc: "You're genuinely AI-ready — visible, trusted, and easy to recommend. At this level, the game is staying ahead: monitoring how AI describes you as models update, and turning your visibility edge into a durable moat. A verification audit can confirm what AI actually says about you today.",
  },
];

export const GAUGE_RADIUS = 84;
export const GAUGE_CIRCUMFERENCE = Math.PI * GAUGE_RADIUS;

export function calculateQuizScore(
  answers: Array<number | null>,
  questions: QuizQuestion[],
): number {
  const raw = answers.reduce<number>(
    (sum, answerIndex, questionIndex) =>
      sum +
      (answerIndex === null
        ? 0
        : questions[questionIndex].options[answerIndex].pts),
    0,
  );
  return Math.round((raw / (questions.length * 3)) * 100);
}

export function findWeakestQuestionIndex(
  answers: Array<number | null>,
  questions: QuizQuestion[],
): number {
  let weakestIndex = 0;
  let weakestPts = Infinity;

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) {
      return;
    }

    const pts = questions[questionIndex].options[answerIndex].pts;
    if (pts < weakestPts) {
      weakestPts = pts;
      weakestIndex = questionIndex;
    }
  });

  return weakestIndex;
}
