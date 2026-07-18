"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { pushDataLayerEvent } from "@/lib/analytics";
import {
  calculateQuizScore,
  findWeakestQuestionIndex,
  GAUGE_CIRCUMFERENCE,
  SIGNAL_SCAN_QUESTIONS,
  SIGNAL_SCAN_TIERS,
} from "@/lib/signal-scan-quiz";
import styles from "./signal-scan-quiz.module.css";

const QUESTION_COUNT = SIGNAL_SCAN_QUESTIONS.length;

const INTRO = {
  title: "How strong is your AI Signal?",
  subtitle:
    "Six quick questions. See at a glance whether AI tools like ChatGPT and Google's AI results can find, trust, and recommend your business.",
};

const RESULTS_INTRO = {
  title: "Your AI Signal Scan™ results",
  subtitle:
    "Here's how visible — and recommendable — your business looks to AI right now.",
};

function Gauge({ score }: { score: number }) {
  const fillRef = useRef<SVGPathElement>(null);
  const [displayScore, setDisplayScore] = useState(0);
  const targetOffset = GAUGE_CIRCUMFERENCE * (1 - score / 100);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fill = fillRef.current;

    if (!fill) {
      return;
    }

    if (reduced) {
      fill.style.strokeDashoffset = `${targetOffset}`;
      setDisplayScore(score);
      return;
    }

    const frame = requestAnimationFrame(() => {
      fill.style.strokeDashoffset = `${targetOffset}`;
    });

    const start = performance.now();
    const duration = 1100;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(score * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    const scoreFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scoreFrame);
    };
  }, [score, targetOffset]);

  return (
    <div className={styles.gaugeWrap}>
      <svg viewBox="0 0 210 120" aria-hidden="true">
        <path
          className={styles.gaugeTrack}
          d="M 21 110 A 84 84 0 0 1 189 110"
          fill="none"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          ref={fillRef}
          className={styles.gaugeFill}
          d="M 21 110 A 84 84 0 0 1 189 110"
          fill="none"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={GAUGE_CIRCUMFERENCE}
          strokeDashoffset={GAUGE_CIRCUMFERENCE}
        />
      </svg>
      <div className={styles.gaugeNum}>
        <span>{displayScore}</span>
        <small>Signal Score</small>
      </div>
    </div>
  );
}

export default function SignalScanQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(
    () => new Array(QUESTION_COUNT).fill(null),
  );
  const [showResults, setShowResults] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [header, setHeader] = useState(INTRO);

  const progressLabel = showResults
    ? "Scan complete"
    : currentQuestion === 0
      ? "Start your scan"
      : `Signal ${currentQuestion + 1} of ${QUESTION_COUNT}`;

  const litBars = showResults ? QUESTION_COUNT : currentQuestion;

  const results = useMemo(() => {
    if (!showResults) {
      return null;
    }

    const score = calculateQuizScore(answers, SIGNAL_SCAN_QUESTIONS);
    const tier =
      SIGNAL_SCAN_TIERS.find(
        (entry) => score >= entry.min && score <= entry.max,
      ) ?? SIGNAL_SCAN_TIERS[0];
    const weakestIndex = findWeakestQuestionIndex(
      answers,
      SIGNAL_SCAN_QUESTIONS,
    );
    const weakestPts =
      answers[weakestIndex] === null
        ? 3
        : SIGNAL_SCAN_QUESTIONS[weakestIndex].options[answers[weakestIndex]!]
            .pts;

    return {
      score,
      tier,
      weakestIndex,
      showWeakest: weakestPts < 3,
    };
  }, [answers, showResults]);

  const resetQuiz = useCallback(() => {
    setAnswers(new Array(QUESTION_COUNT).fill(null));
    setCurrentQuestion(0);
    setShowResults(false);
    setHasStarted(false);
    setHeader(INTRO);
  }, []);

  const selectOption = (optionIndex: number) => {
    if (!hasStarted) {
      setHasStarted(true);
      pushDataLayerEvent("signal_scan_quiz_start", {
        form_name: "signal_scan_quiz",
        form_location: "signal_section",
      });
    }

    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = optionIndex;
    setAnswers(nextAnswers);

    window.setTimeout(() => {
      if (currentQuestion < QUESTION_COUNT - 1) {
        setCurrentQuestion(currentQuestion + 1);
        return;
      }

      setShowResults(true);
      setHeader(RESULTS_INTRO);

      const score = calculateQuizScore(nextAnswers, SIGNAL_SCAN_QUESTIONS);
      const tier =
        SIGNAL_SCAN_TIERS.find(
          (entry) => score >= entry.min && score <= entry.max,
        ) ?? SIGNAL_SCAN_TIERS[0];

      pushDataLayerEvent("signal_scan_quiz_complete", {
        form_name: "signal_scan_quiz",
        form_location: "signal_section",
        signal_score: score,
        signal_tier: tier.name,
      });
    }, 280);
  };

  const handleOptionKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    optionIndex: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectOption(optionIndex);
    }
  };

  const handleCtaClick = () => {
    pushDataLayerEvent("signal_scan_quiz_cta_click", {
      form_name: "signal_scan_quiz",
      form_location: "signal_section",
      signal_score: results?.score,
      signal_tier: results?.tier.name,
    });
  };

  const question = SIGNAL_SCAN_QUESTIONS[currentQuestion];

  return (
    <div className={styles.scan}>
      <div className={styles.header}>
        <div className={styles.brand}>
          Through<span className={styles.brandAccent}>Point</span> Marketing
        </div>
        <h3 className={styles.title}>{header.title}</h3>
        <p className={styles.subtitle}>{header.subtitle}</p>
        <div className={styles.progress} aria-hidden="true">
          {Array.from({ length: QUESTION_COUNT }).map((_, index) => (
            <div
              key={index}
              className={`${styles.bar} ${index < litBars ? styles.barLit : ""}`}
            />
          ))}
          <span className={styles.progressLabel}>{progressLabel}</span>
        </div>
      </div>

      <div className={styles.body} aria-live="polite">
        {!showResults && question ? (
          <div className={styles.fade} key={currentQuestion}>
            <span className={styles.signalTag}>{question.signal}</span>
            <h4 className={styles.question}>{question.q}</h4>
            <div
              className={styles.options}
              role="radiogroup"
              aria-label={question.q}
            >
              {question.options.map((option, optionIndex) => (
                <button
                  key={option.label}
                  type="button"
                  className={`${styles.option} ${
                    answers[currentQuestion] === optionIndex
                      ? styles.optionSelected
                      : ""
                  }`}
                  role="radio"
                  aria-checked={answers[currentQuestion] === optionIndex}
                  onClick={() => selectOption(optionIndex)}
                  onKeyDown={(event) =>
                    handleOptionKeyDown(event, optionIndex)
                  }
                >
                  <span className={styles.dot} aria-hidden="true" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
            <div className={styles.nav}>
              <button
                type="button"
                className={`${styles.back} ${
                  currentQuestion === 0 ? styles.backHidden : ""
                }`}
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                ← Back
              </button>
              <span className={styles.count}>
                {currentQuestion + 1} / {QUESTION_COUNT}
              </span>
            </div>
          </div>
        ) : null}

        {showResults && results ? (
          <div className={styles.results}>
            <div className={styles.fade}>
              <Gauge score={results.score} />
              <h4 className={styles.tier}>
                Your signal:{" "}
                <span className={styles.tierAccent}>{results.tier.name}</span>
              </h4>
              <p className={styles.desc}>{results.tier.desc}</p>
              {results.showWeakest ? (
                <div className={styles.weakest}>
                  <div className={styles.weakestLabel}>Your weakest signal</div>
                  <div className={styles.weakestText}>
                    <strong>
                      {
                        SIGNAL_SCAN_QUESTIONS[results.weakestIndex].signal
                      }
                      :
                    </strong>{" "}
                    {SIGNAL_SCAN_QUESTIONS[results.weakestIndex].weakestTip}
                  </div>
                </div>
              ) : null}
              <Link
                href="#contact"
                className={styles.cta}
                onClick={handleCtaClick}
              >
                Get your full AI Readiness Audit →
              </Link>
              <button
                type="button"
                className={styles.retake}
                onClick={resetQuiz}
              >
                Retake the scan
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.footer}>
        AI Signal Scan™ · Based on the ThroughPoint AI Readiness Audit ·
        throughpointmarketing.com
      </div>
    </div>
  );
}
