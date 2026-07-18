import { Hero } from '@/components/hero'
import { SignalEconomy } from '@/components/signal-economy'
import { SignalScan } from '@/components/signal-scan'
import SignalScanQuiz from '@/components/SignalScanQuiz'
import { Process } from '@/components/process'
import { Contact } from '@/components/contact'
import { Reveal } from '@/components/reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <SignalEconomy />
      <SignalScan />
      <section
        id="ai-signal-quiz"
        className="scroll-mt-24 bg-light-gray py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                How strong is your <span className="text-coral">AI Signal</span>?
              </h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-body">
                Answer six quick questions and get an instant score — no email
                required.
              </p>
            </div>
          </Reveal>
          <SignalScanQuiz />
        </div>
      </section>
      <Process />
      <Contact />
    </>
  )
}
