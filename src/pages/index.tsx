import Head from "next/head";
import Link from "next/link";
import { AnimatedHeroOrb, AnimatedCard, AnimatedContainer, AnimatedFinancialBackground } from "../components/AnimatedElements";

type PillarCard = {
  title: string;
  subtitle?: string;
  points: string[];
};

const pillars: PillarCard[] = [
  {
    title: "Investment Management",
    subtitle: "Disciplined, data-driven allocation",
    points: [
      "Asset allocation aligned to Rp1B+ AUM target",
      "Portfolio construction with risk budgets per sleeve",
      "Performance governance via monthly investment committee",
    ],
  },
  {
    title: "Active Trading Desk",
    subtitle: "Quant + discretionary synergy",
    points: [
      "Altcoins scanner and derivatives strategy stack",
      "Real-time signal routing with human risk override",
      "Execution playbooks for trending, mean-revert, and vol regimes",
    ],
  },
  {
    title: "Wealth Management",
    subtitle: "Preserve, optimize, transfer",
    points: [
      "Holistic financial planning and tax optimization",
      "Legacy and asset protection structures",
      "Liquidity, cash, and reserves laddering",
    ],
  },
];

const strategy = [
  {
    title: "CVQuant System",
    detail:
      "Onchain + technical + derivatives signals feed the Active Trading Desk with pre-trade risk limits.",
  },
  {
    title: "Trading Execution",
    detail:
      "Dual path: quant signals auto-route to scanners; discretionary desk validates edge, sizes risk, and executes.",
  },
  {
    title: "Real-time Monitoring",
    detail:
      "PnL, VaR limits, slippage, and drawdown triggers feed the risk dashboard for intraday intervention.",
  },
  {
    title: "Monthly Performance Review",
    detail:
      "Performance vs. target determines: continue strategy, adjust trading parameters, or run model optimization.",
  },
];

const structurePhases = [
  {
    marker: "1",
    title: "Panogari Capital — Family Office",
    subtitle: "Professional foundation with a long-term vision",
    target: "Rp1 Billion AUM",
    cards: [
      { title: "Chairman & CEO", desc: "Nico Panogari Sihombing" },
      { title: "Organization", desc: "Investment Management & Wealth Management" },
      { title: "Primary Focus", desc: "Stay focused on targets & governance" },
    ],
    align: "left",
  },
  {
    marker: "2",
    title: "Active Crypto Trading Desk",
    subtitle: "Quant + discretionary with risk controls",
    cards: [
      { title: "Altcoins Scanner", desc: "Identify altcoin opportunities" },
      { title: "Derivatives Trading", desc: "Execute derivatives with guardrails" },
      { title: "Quant Signal", desc: "Data- and model-driven signals" },
      { title: "CVQuant System", desc: "Proprietary signal engine" },
      { title: "Onchain Analysis", desc: "Insights from onchain data" },
      { title: "Technical Analysis", desc: "Timing entries/exits" },
    ],
    align: "right",
  },
  {
    marker: "3",
    title: "Wealth Management Services",
    subtitle: "Comprehensive services for growth & protection",
    cards: [
      { title: "Portfolio Management", desc: "Integrated allocation & execution" },
      { title: "Financial Planning", desc: "Long-term financial planning" },
      { title: "Tax Optimization", desc: "Tax efficiency" },
      { title: "Legacy Planning", desc: "Family wealth continuity" },
      { title: "Risk Management", desc: "Holistic risk management" },
    ],
    align: "left",
  },
  {
    marker: "4",
    title: "Asset Allocation & Execution",
    subtitle: "Strategic allocation with real-time execution & monitoring",
    cards: [
      { title: "Trading Execution", desc: "Execute on quantitative signals" },
      { title: "Quant Signals", desc: "Signals from CVQuant" },
      { title: "Discretionary Trading", desc: "Desk decisions with risk override" },
      { title: "Real-time Monitoring", desc: "Active risk control" },
      { title: "Monthly Review", desc: "Monthly performance evaluation" },
    ],
    target: "AUM Target: Rp1 Billion",
    align: "right",
  },
  {
    marker: "5",
    title: "Growth & Scaling Phase",
    subtitle: "Evaluate 2026 target and scaling plan",
    cards: [
      { title: "On Track", desc: "Continue strategy + AUM growth plan" },
      { title: "Below Target", desc: "Adjust trading parameters" },
      { title: "Model Optimization", desc: "Optimize models for better outcomes" },
      { title: "AUM Growth Plan", desc: "Phase 2: scale to Rp10B" },
    ],
    align: "left",
  },
];

const metrics = [
  { label: "2026 AUM Target", value: "Rp1 Billion" },
  { label: "Core Strategy", value: "Active Trading + CVQuant" },
  { label: "Governance", value: "Monthly Perf. Review" },
  { label: "Next Milestone", value: "Scale to Rp10B" },
];

const governance = [
  "Risk budget per sleeve with pre-trade checks",
  "Drawdown and VaR guardrails with escalation paths",
  "Execution quality: slippage, spread, venue selection",
  "Post-trade analytics and attribution by strategy",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>PANOGARI CAPITAL </title>
        <meta
          name="description"
          content="Panogari Capital  — Active Trading Desk powered by CVQuant System to achieve Rp1B AUM target in 2026 and scale to Rp10B."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="PANOGARI CAPITAL | Family Office" />
        <meta
          property="og:description"
          content="Active Trading + CVQuant System. Governance, risk, and performance to reach Rp1B AUM target by 2026."
        />
      </Head>

      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#737373)] text-slate-100">
        <section className="relative isolate w-full overflow-hidden bg-transparent py-12 sm:py-14 lg:py-16">
          <AnimatedHeroOrb />
          <AnimatedFinancialBackground />
          <div className="relative mx-auto max-w-6xl px-6 sm:px-10 md:px-12 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="flex flex-col gap-4 pt-6 sm:pt-8">
                <div className="space-y-2">
                  <h1 className="text-4xl font-semibold leading-none sm:text-5xl">
                    <span className="font-serif">PANOGARI</span>
                    <span className="ml-3 font-sans text-[0.95em] tracking-[0.14em] font-normal">CAPITAL</span>
                  </h1>
                </div>
                <p className="text-lg font-semibold uppercase tracking-[0.28em] text-slate-200 sm:text-xl">
                  Family Office
                </p>
                <p className="text-xl font-medium text-slate-100 sm:text-2xl">
                  A professional family office with an active trading edge
                </p>
                <p className="max-w-3xl text-lg text-slate-200">
                  We combine an institutional-grade trading desk with CVQuant System to pursue the Rp1B AUM target in 2026, while keeping governance, risk, and reporting transparent for family stakeholders.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01]"
                    href="mailto:contact@panogaricapital.com"
                  >
                    Schedule a conversation
                  </a>
                  <a
                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                    href="/roadmap"
                  >
                    View roadmap
                  </a>
                  <Link
                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                    href="/services"
                  >
                    Services
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start lg:self-center lg:-ml-6">
                <img
                  src="/logo.png"
                  alt="Panogari Capital logo"
                  className="h-[32rem] w-auto max-w-none drop-shadow-[0_14px_60px_rgba(16,185,129,0.38)] sm:h-[36rem] md:h-[40rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-6 hidden lg:block">
            <div className="h-full w-[2px] bg-gradient-to-b from-slate-900 via-amber-500/30 to-slate-900 opacity-80" />
          </div>

          <div className="mx-auto max-w-6xl space-y-16 px-6 pb-12 sm:px-10 md:px-12 lg:px-14">
            <section className="relative pl-6 lg:pl-16">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(212,162,79,0.12)] lg:left-[-0.9rem]" />
              <div className="mt-2 ml-3 lg:ml-8 space-y-2 border-y border-[#d4a34a]/45 py-6">
                <AnimatedContainer>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric, idx) => (
                      <AnimatedCard key={metric.label} delay={idx * 0.05}>
                        <div className="flex items-center justify-between rounded-lg px-2 py-1 text-sm text-slate-200">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>
                            <p className="mt-1 text-base font-semibold text-emerald-100">{metric.value}</p>
                          </div>
                          <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
                </AnimatedContainer>
              </div>
            </section>

            <section className="relative pl-6 lg:pl-16">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(212,162,79,0.12)] lg:left-[-0.9rem]" />
              <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-emerald-300/15 text-center text-lg font-semibold text-emerald-200">CV</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-300">CVQuant System</p>
                      <h3 className="text-2xl font-semibold">Signal-first execution</h3>
                    </div>
                  </div>
                  <AnimatedContainer>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {strategy.map((item, idx) => (
                        <AnimatedCard key={item.title} delay={idx * 0.06}>
                          <div className="rounded-xl border-y border-[#d4a34a]/45 py-4">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-semibold text-emerald-100">{item.title}</p>
                              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Focus</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
                          </div>
                        </AnimatedCard>
                      ))}
                    </div>
                  </AnimatedContainer>
                </div>

                <AnimatedContainer>
                  <div className="space-y-4 border-y border-[#d4a34a]/45 py-6 ml-3 lg:ml-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Governance & Risk</p>
                    <h3 className="mt-2 text-xl font-semibold">Real-time oversight</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {governance.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-100 underline-offset-4 hover:underline"
                    href="/about"
                  >
                    Governance approach
                    <span aria-hidden>→</span>
                  </Link>
                  </div>
                </AnimatedContainer>
              </div>
            </section>

            <section className="relative pl-6 lg:pl-16">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(212,162,79,0.12)] lg:left-[-0.9rem]" />
              <AnimatedContainer>
                <div className="mt-2 ml-3 lg:ml-8 grid gap-10 lg:grid-cols-3">
                  {pillars.map((pillar, idx) => (
                    <AnimatedCard key={pillar.title} delay={idx * 0.07}>
                      <div className="space-y-3 border-y border-[#d4a34a]/45 py-5">
                        <p className="text-sm font-semibold text-emerald-200">{pillar.title}</p>
                        {pillar.subtitle && <p className="text-sm text-slate-300">{pillar.subtitle}</p>}
                        <ul className="space-y-2 text-sm text-slate-200">
                          {pillar.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-300" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </AnimatedContainer>
            </section>

            <section className="relative pl-6 lg:pl-16">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(212,162,79,0.12)] lg:left-[-0.9rem]" />
              <AnimatedContainer>
                <div className="ml-3 lg:ml-8 relative pb-4">
                  <div className="flex flex-wrap items-center gap-3 pb-6">
                    <span className="rounded-full border border-[#d4a34a]/60 bg-[#d4a34a]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-100">Panogari Capital Structure</span>
                    <p className="text-sm text-slate-300">Professional flowchart: decisions → execution → oversight</p>
                  </div>

                  <div className="absolute left-1/2 top-6 hidden h-[88%] w-px -translate-x-1/2 bg-gradient-to-b from-[#d4a34a] via-emerald-300/50 to-[#d4a34a] lg:block" />

                  <div className="space-y-12 lg:space-y-16">
                    {structurePhases.map((phase, idx) => {
                      const isLeft = phase.align === "left";
                      return (
                        <AnimatedCard key={phase.marker} delay={idx * 0.08}>
                          <div className={`relative flex flex-col gap-4 lg:grid lg:grid-cols-2 ${isLeft ? "lg:pr-10" : "lg:pl-10"}`}>
                            <div className={`lg:col-span-1 ${isLeft ? "lg:pr-6 lg:justify-self-start" : "lg:order-2 lg:pl-6 lg:justify-self-end"}`}>
                              <div className="flex items-center gap-3">
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4a34a] bg-black/50 text-lg font-bold text-amber-200 shadow-[0_0_0_8px_rgba(212,163,74,0.18)]">
                                  {phase.marker}
                                </div>
                                <div>
                                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Phase {phase.marker}</p>
                                  <h3 className="text-xl font-semibold text-emerald-100">{phase.title}</h3>
                                </div>
                              </div>
                              <p className="mt-2 text-sm text-slate-200">{phase.subtitle}</p>
                              {phase.target && (
                                <div className="mt-4 rounded-2xl border border-[#d4a34a]/45 bg-black/20 px-4 py-3 text-sm font-semibold text-emerald-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                                  {phase.target}
                                </div>
                              )}
                            </div>

                            <div className={`lg:col-span-1 ${isLeft ? "lg:pl-8" : "lg:order-1 lg:pr-8"}`}>
                              <div className="rounded-2xl border border-[#d4a34a]/45 bg-black/25 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.38)]">
                                <div className="grid gap-3 sm:grid-cols-2">
                                  {phase.cards.map((card) => (
                                    <div key={card.title} className="rounded-xl border border-[#d4a34a]/35 bg-black/30 px-3 py-3 text-sm text-slate-100">
                                      <p className="text-[13px] font-semibold text-emerald-100">{card.title}</p>
                                      <p
                                        className={`mt-1 text-xs ${card.title === "Chairman & CEO" ? "font-semibold text-emerald-100" : "text-slate-300"}`}
                                      >
                                        {card.desc}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className={`absolute inset-y-0 hidden items-center lg:flex ${isLeft ? "lg:left-1/2 lg:-translate-x-1/2" : "lg:left-1/2 lg:-translate-x-1/2"}`}>
                              <div className="h-full w-px bg-[#d4a34a]/25" />
                            </div>
                          </div>
                        </AnimatedCard>
                      );
                    })}
                  </div>

                  <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl border border-[#d4a34a]/45 bg-black/20 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.35)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-100">Decision Node</p>
                      <h4 className="mt-2 text-lg font-semibold text-emerald-100">2026 Target Evaluation</h4>
                      <p className="mt-2 text-sm text-slate-200">Is the Rp1B AUM target reached?</p>
                      <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
                        <span className="rounded-full border border-emerald-400/60 bg-emerald-400/15 px-3 py-2 text-emerald-100">YES: Continue strategy + AUM growth plan</span>
                        <span className="rounded-full border border-amber-400/60 bg-amber-400/15 px-3 py-2 text-amber-100">NO: Adjust trading parameters</span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#d4a34a]/45 bg-black/20 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.35)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-100">Long-term Roadmap</p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3 text-center text-sm text-slate-200">
                        <div className="rounded-xl border border-[#d4a34a]/35 bg-black/25 px-3 py-3">
                          <p className="text-lg font-semibold text-emerald-100">2025</p>
                          <p>Operate at Rp1B AUM</p>
                        </div>
                        <div className="rounded-xl border border-[#d4a34a]/35 bg-black/25 px-3 py-3">
                          <p className="text-lg font-semibold text-emerald-100">2026</p>
                          <p>Scale to Rp10B</p>
                        </div>
                        <div className="rounded-xl border border-[#d4a34a]/35 bg-black/25 px-3 py-3">
                          <p className="text-lg font-semibold text-emerald-100">2027</p>
                          <p>Strategy revision for expansion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </section>

            <section className="relative pl-6 lg:pl-16">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(212,162,79,0.12)] lg:left-[-0.9rem]" />
              <AnimatedContainer>
                <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-8 sm:p-10">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Trading Playbook</p>
                      <h3 className="text-2xl font-semibold">Quant signals + discretionary validation</h3>
                      <p className="max-w-3xl text-slate-200">
                        Altcoins Scanner, Derivatives Trading, and Technical sleeves feed into the Trading Desk. Signals are either auto-executed within risk limits or validated by the discretionary desk. Monthly performance reviews decide whether to continue the strategy, adjust parameters, or optimize models.
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {["Altcoins Scanner", "Derivatives Trading", "Onchain / Technical", "Model Optimization"].map((item) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm font-semibold text-emerald-100">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        className="rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01]"
                        href="mailto:contact@panogaricapital.com"
                      >
                        Contact Panogari Capital
                      </a>
                      <a
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                        href="mailto:contact@panogaricapital.com?subject=Governance%20Overview%20Request"
                      >
                        Request governance overview
                      </a>
                      <Link
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                        href="/contact"
                      >
                        Contact page
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
