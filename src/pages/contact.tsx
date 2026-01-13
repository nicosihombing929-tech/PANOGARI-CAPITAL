import Head from "next/head";
import { AnimatedCard, AnimatedContainer } from "@/components/AnimatedElements";

const contactMethods = [
  {
    label: "Email",
    value: "panogaricapital@gmail.com",
    href: "mailto:panogaricapital@gmail.com",
  },
  {
    label: "Governance overview",
    value: "Request the latest PDF",
    href: "mailto:panogaricapital@gmail.com?subject=Governance%20Overview%20Request",
  },
  {
    label: "Partnerships",
    value: "Discuss allocations or strategy onboarding",
    href: "mailto:panogaricapital@gmail.com?subject=Partnership%20Inquiry",
  },
];

const questions = [
  "Need the latest performance and risk summary?",
  "Want to understand our drawdown and VaR guardrails?",
  "Considering co-developing a strategy within the desk?",
  "Curious about our roadmap to Rp1B and scale to Rp10B?",
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | PANOGARI CAPITAL</title>
        <meta
          name="description"
          content="Contact Panogari Capital for conversations on governance, performance, and partnerships."
        />
      </Head>
      <div className="min-h-screen px-6 py-10 text-slate-100 sm:px-10 md:px-12 lg:px-16">
        <header className="mb-12 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Contact</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Let&apos;s talk about governance, performance, and partnerships</h1>
          <p className="max-w-4xl text-lg text-slate-200">
            Reach out to align on wealth objectives, trading mandates, or collaboration on strategy onboarding. We keep communications concise, measurable, and action-oriented.
          </p>
        </header>

        <main className="flex flex-col gap-10">
          <AnimatedContainer>
            <section className="glass rounded-3xl p-8 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {contactMethods.map((method, idx) => (
                  <AnimatedCard key={method.label} delay={idx * 0.06}>
                    <a
                      className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300/70 hover:text-emerald-50"
                      href={method.href}
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{method.label}</p>
                      <p className="mt-2 text-lg font-semibold text-emerald-100">{method.value}</p>
                    </a>
                  </AnimatedCard>
                ))}
              </div>
            </section>
          </AnimatedContainer>

          <AnimatedContainer>
            <section className="glass rounded-3xl p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">What to discuss</p>
              <h2 className="mt-2 text-2xl font-semibold">Focused conversations that respect your time</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {questions.map((q, idx) => (
                  <AnimatedCard key={q} delay={idx * 0.05}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                      {q}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-200">
                Please include context (objectives, constraints, timelines) so we can prepare a concise, actionable response.
              </p>
            </section>
          </AnimatedContainer>
        </main>
      </div>
    </>
  );
}
