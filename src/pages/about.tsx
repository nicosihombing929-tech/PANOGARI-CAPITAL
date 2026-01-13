import Head from "next/head";
import { AnimatedCard, AnimatedContainer } from "@/components/AnimatedElements";

const highlights = [
  "Family office-grade governance with quant and discretionary oversight",
  "Risk-first execution: drawdown guardrails, liquidity checks, and venue selection",
  "Roadmap-driven growth to Rp1B AUM in 2026 and scale to Rp10B",
];

const leadership = [
  {
    role: "Chairman & CEO",
    name: "Nico Panogari Sihombing",
    focus: "Sets vision, governance cadence, and performance accountability.",
  },
  {
    role: "Investment Management Department",
    name: "CVQuant System + Trading Desk",
    focus: "Signal generation, execution quality, and portfolio construction.",
  },
  {
    role: "Wealth Management Services",
    name: "Planning, tax, legacy, risk",
    focus: "Protect, optimize, and transfer wealth with institutional discipline.",
  },
];

const pillars = [
  {
    title: "Governance & Reporting",
    items: [
      "Monthly investment committee with performance vs. target",
      "Scenario drills and stress testing for liquidity and risk capital",
      "Transparent attribution by sleeve and strategy",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Signal pipelines for onchain, technical, and derivatives data",
      "Execution playbooks with human-in-the-loop overrides",
      "Monitoring for PnL, VaR, slippage, and drawdowns",
    ],
  },
  {
    title: "Client Outcomes",
    items: [
      "Aligned to family objectives: preservation, growth, and transfer",
      "Clear risk budgets per sleeve and capital allocation policy",
      "Actionable feedback loops to adjust parameters or optimize models",
    ],
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | PANOGARI CAPITAL</title>
        <meta
          name="description"
          content="Learn about Panogari Capital's family office governance, leadership, and infrastructure powering the CVQuant system and active trading desk."
        />
      </Head>
      <div className="min-h-screen px-6 py-10 text-slate-100 sm:px-10 md:px-12 lg:px-16">
        <header className="mb-12 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-300">About</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Institutional discipline for a focused family office</h1>
          <p className="max-w-4xl text-lg text-slate-200">
            Panogari Capital blends a professional trading desk, CVQuant signal stack, and wealth management services under a clear governance framework. We operate with measurable targets and transparent oversight to keep the AUM roadmap on track.
          </p>
          <AnimatedContainer>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              {highlights.map((item, idx) => (
                <AnimatedCard key={item} delay={idx * 0.05}>
                  <span className="inline-block rounded-full bg-white/10 px-4 py-2">{item}</span>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedContainer>
        </header>

        <main className="flex flex-col gap-10">
          <AnimatedContainer>
            <section className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Leadership</p>
                <h2 className="mt-2 text-2xl font-semibold">Focused roles, clear accountability</h2>
                <p className="mt-3 text-slate-200">
                  Roles are defined to keep decision-making swift while retaining strong controls. Investment, trading, and wealth management functions are aligned to the same roadmap and review cadence.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {leadership.map((leader, idx) => (
                  <AnimatedCard key={leader.role} delay={idx * 0.06}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{leader.role}</p>
                      <p className="mt-2 text-lg font-semibold text-emerald-100">{leader.name}</p>
                      <p className="mt-3 text-sm text-slate-200">{leader.focus}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
            </section>
          </AnimatedContainer>

          <AnimatedContainer>
            <section className="grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar, idx) => (
                <AnimatedCard key={pillar.title} delay={idx * 0.07}>
                  <div className="h-full rounded-3xl p-2 sm:p-3 lg:p-4">
                    <p className="text-sm font-semibold text-emerald-100">{pillar.title}</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-200">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              ))}
            </section>
          </AnimatedContainer>

          <AnimatedContainer>
            <section className="glass rounded-3xl p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Operating cadence</p>
              <h2 className="mt-2 text-2xl font-semibold">Feedback loops that keep us on target</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {["Signal intake", "Pre-trade risk", "Execution quality", "Performance review"].map((item, idx) => (
                  <AnimatedCard key={item} delay={idx * 0.05}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-semibold text-emerald-100">
                      {item}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-200">
                Monthly reviews decide whether to continue the current playbooks, adjust trading parameters, or run model optimization—keeping us aligned to the Rp1B target and the scale plan beyond.
              </p>
            </section>
          </AnimatedContainer>
        </main>
      </div>
    </>
  );
}
