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
    target: "Rp1 Billion AUM Target in 2026",
    cards: [
      { title: "Chairman & CEO", desc: "NICO PANOGARI SIHOMBING" },
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

      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#737373)] text-slate-100 selection:bg-amber-500/30">
        <section className="relative isolate w-full overflow-hidden py-16 lg:py-28">
          
          <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex flex-col gap-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-amber-500/60"></div>
                     <span className="text-sm font-semibold tracking-[0.2em] text-amber-500 uppercase">Est. 2026 Strategy</span>
                  </div>
                  
                  <h1 className="text-4xl xs:text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
                    <span className="block font-serif font-medium italic text-slate-200 lg:text-[6.5rem] tracking-wide text-5xl sm:text-7xl">Panogari</span>
                    <span className="block mt-2 tracking-[0.15em] sm:tracking-[0.3em] font-sans font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 text-3xl xs:text-4xl sm:text-5xl lg:text-[5.5rem] break-words">
                      CAPITAL
                    </span>
                  </h1>
                </div>
                
                <div className="max-w-2xl space-y-6">
                   <h2 className="text-2xl font-light text-slate-100 leading-snug font-serif italic">
                     Family Office 
                   </h2>
                   <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                   <p className="text-xl text-slate-200 leading-relaxed font-light">
                    Institutional-grade trading infrastructure dedicated to <span className="font-medium text-white">wealth preservation</span> and <span className="font-medium text-white">systematic growth</span>.
                   </p>
                   <p className="text-base text-slate-400 leading-relaxed max-w-lg">
                    By combining our proprietary <strong>CVQuant System</strong> with seasoned discretionary oversight, we pursue a disciplined Rp1B AUM target for 2026—prioritizing transparency and governance above all.
                   </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-4">
                  <a
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-sm bg-[linear-gradient(90deg,#000000,#16145a)] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all hover:opacity-90 shadow-[0_0_20px_rgba(53,51,205,0.3)]"
                    href="mailto:panogaricapital@gmail.com"
                  >
                    <span>START CONVERSATION</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                  
                  <div className="flex flex-wrap gap-4">
                      <a
                        className="group inline-flex items-center justify-center px-6 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:text-amber-400"
                        href="/roadmap"
                      >
                        <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-amber-400">View Roadmap</span>
                      </a>
                      <Link
                        className="group inline-flex items-center justify-center px-6 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:text-amber-400"
                        href="/services"
                      >
                         <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-amber-400">Services</span>
                      </Link>
                   </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                 <div className="relative flex justify-end">
                    <img
                    src="/logo.png"
                    alt="Panogari Capital logo"
                    className="relative z-10 w-full max-w-lg drop-shadow-2xl grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
                    />
                 </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-6 hidden lg:block">
            <div className="h-full w-[2px] bg-gradient-to-b from-slate-900 via-amber-500/10 to-slate-900 opacity-80" />
          </div>

          <div className="mx-auto max-w-6xl space-y-16 px-6 pb-12 sm:px-10 md:px-12 lg:px-14">
            <section className="relative pl-6 lg:pl-16">
              <div className="mt-2 ml-3 lg:ml-8 space-y-2 py-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric, idx) => (
                      <AnimatedCard key={metric.label} delay={idx * 0.05}>
                         <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10">
                            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-emerald-900/5 blur-xl transition-all duration-500 group-hover:bg-emerald-500/20" />
                            <p className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-emerald-300 transition-colors">
                              {metric.label}
                            </p>
                            <p className="relative z-10 mt-1 text-2xl font-bold text-white group-hover:text-emerald-50 transition-colors">
                              {metric.value}
                            </p>
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-transparent transition-all duration-300 group-hover:w-full" />
                         </div>
                      </AnimatedCard>
                    ))}
                  </div>
              </div>
            </section>

            <section className="relative pl-6 lg:pl-16">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
                
                {/* CVQuant Strategy Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-2xl font-bold text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      CV
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                         <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                         <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/80">CVQuant System v2.0</p>
                      </div>
                      <h3 className="text-3xl font-bold text-white mt-1">Signal-First Execution</h3>
                    </div>
                  </div>
                  
                  <div className="grid gap-5 sm:grid-cols-2">
                      {strategy.map((item, idx) => (
                        <AnimatedCard key={item.title} delay={idx * 0.06}>
                          <div className="group h-full rounded-xl border border-white/5 bg-[linear-gradient(90deg,#000000,#78560e)] p-5 transition-all hover:border-emerald-500/40 hover:bg-slate-800/60">
                            <div className="mb-3 flex items-center justify-between">
                              <p className="font-mono text-sm font-bold text-emerald-300 group-hover:text-emerald-200">{item.title}</p>
                              <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">Module 0{idx + 1}</span>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">{item.detail}</p>
                          </div>
                        </AnimatedCard>
                      ))}
                  </div>
                </div>

                {/* Governance Section */}
                <div className="ml-3 lg:ml-8 relative">
                   {/* Background Decor */}
                   <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-amber-900/5 blur-3xl pointer-events-none" />
                   
                   <div className="relative rounded-2xl border border-amber-500/20 bg-[linear-gradient(90deg,#000000,#78560e)] p-8 shadow-2xl backdrop-blur-xl">
                      <div className="mb-6 border-b border-white/10 pb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">Risk Framework</p>
                        <h3 className="mt-2 text-2xl font-bold text-white">Governance & Oversight</h3>
                      </div>
                      
                      <ul className="space-y-5">
                        {governance.map((item, idx) => (
                          <li key={idx} className="group flex items-start gap-4">
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                               <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                               </svg>
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-6 border-t border-white/10">
                        <Link
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                            href="/about"
                        >
                            <span className="border-b border-emerald-400/30 pb-0.5 group-hover:border-emerald-400">Read Governance Protocol</span>
                            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            <section className="relative pl-6 lg:pl-16">
               <div className="mt-8 ml-3 lg:ml-8">
                  <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white">Core Pillars</h3>
                      <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-transparent"></div>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {pillars.map((pillar, idx) => (
                      <AnimatedCard key={pillar.title} delay={idx * 0.07}>
                        <div className="group h-full space-y-4 p-1 transition-all duration-300">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                             <div className="h-6 w-6 rounded-sm border-2 border-emerald-400/50" />
                          </div>
                          <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{pillar.title}</h4>
                          {pillar.subtitle && <p className="text-sm italic text-slate-300">{pillar.subtitle}</p>}
                          <ul className="space-y-3 text-sm text-slate-200">
                            {pillar.points.map((point) => (
                              <li key={point} className="flex items-start gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="group-hover:text-white transition-colors">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
               </div>
            </section>

            <section className="relative pl-6 lg:pl-16">
              <div className="ml-3 lg:ml-8 relative pb-20">
                  {/* Modern Header for Capital Structure */}
                  <div className="relative mb-20 pt-10">
                    <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-900/5 blur-[60px]" />
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                      <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        PANOGARI CAPITAL
                      </span>
                      <br />
                      <span className="font-serif italic text-emerald-400">Structure</span>
                    </h2>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-500 to-transparent" />
                      <p className="font-mono text-xs uppercase tracking-widest text-emerald-500/80">
                        System Architecture & Roadmap
                      </p>
                    </div>
                  </div>

                  {/* Central Spine for Desktop */}
                  <div className="absolute left-[24px] lg:left-1/2 top-48 bottom-12 w-[3px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent hidden lg:block" />

                  <div className="relative space-y-24">
                    {structurePhases.map((phase, idx) => {
                      const isLeft = phase.align === "left";
                      return (
                        <AnimatedCard key={phase.marker} delay={idx * 0.08}>
                          <div className={`relative flex flex-col gap-8 lg:grid lg:grid-cols-2 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                            
                            {/* Central Node Marker (Desktop) */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex flex-col items-center justify-center">
                              <div className="relative flex h-4 w-4 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full  rounded-full bg-emerald-400 opacity-20"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
                              </div>
                              
                              {/* Vertical Phase Label */}
                              <div className="absolute left-4 top-8 origin-top-left rotate-90">
                                <span className="whitespace-nowrap font-mono text-[10px] font-bold tracking-[0.3em] text-emerald-500/50">
                                  PHASE_0{phase.marker}
                                </span>
                              </div>
                            </div>

                            {/* Section Info */}
                            <div className={`lg:col-span-1 ${isLeft ? "lg:pr-20" : "lg:order-2 lg:pl-20"}`}>
                              <div className={`flex flex-col ${isLeft ? "lg:items-end" : "lg:items-start"}`}>
                                {/* Mobile Marker */}
                                <div className="flex items-center gap-3 mb-4 lg:hidden">
                                  <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-900/5 border border-emerald-500/30 text-emerald-400 font-mono text-sm font-bold">
                                    0{phase.marker}
                                  </span>
                                  <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent"></span>
                                </div>

                                <h3 className="text-2xl font-bold text-white drop-shadow-sm md:text-3xl">{phase.title}</h3>
                                
                                <div className={`mt-3 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 backdrop-blur-md ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                                  <p className="text-xs font-medium uppercase tracking-wide text-slate-300">{phase.subtitle}</p>
                                </div>

                                {phase.target && (
                                  <div className="mt-6 border-l-2 border-emerald-500/40 bg-gradient-to-r from-emerald-900/10 to-transparent py-2 pl-4">
                                    <p className="font-mono text-sm text-emerald-400">{`>>> TARGET: ${phase.target}`}</p>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Cards Grid */}
                            <div className={`lg:col-span-1 ${isLeft ? "lg:order-2 lg:pl-20" : "lg:pr-20"}`}>
                              <div className="grid gap-3 sm:grid-cols-2">
                                {phase.cards.map((card, cIdx) => (
                                  <div
                                    key={cIdx}
                                    className="group relative overflow-hidden rounded-xl border border-white/5 bg-[linear-gradient(90deg,#000000,#78560e)] p-4 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/60"
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                      <div className="flex items-start justify-between">
                                        <p className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors duration-300">
                                          {card.title}
                                        </p>
                                        <div className="mt-1 h-1 w-1 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors duration-300" />
                                      </div>
                                      <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-300">{card.desc}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AnimatedCard>
                      );
                    })}
                  </div>

                  {/* Futuristic Decision Node & Roadmap */}
                  <div className="mt-32 rounded-3xl border border-white/5 bg-[linear-gradient(90deg,#000000,#16145a)] backdrop-blur-xl p-6 sm:p-10 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-amber-900/5 blur-3xl" />
                    
                    <div className="relative z-10 grid gap-12 lg:grid-cols-2">
                      <div className="space-y-8">
                        <div>
                          <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                            Decision Node
                          </span>
                          <h4 className="text-3xl font-bold text-white sm:text-4xl">2026 Target Evaluation</h4>
                        </div>
                        <p className="text-lg leading-relaxed text-slate-300">
                          Continuous assessment of our Rp1B AUM milestone. The system automatically routes to expansion or optimization protocols based on real-time performance metrics.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1 rounded-xl border border-emerald-500/20 bg-emerald-900/5 p-5 text-center transition hover:bg-emerald-500/20">
                            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-400">Success Protocol</p>
                            <p className="text-lg font-bold text-white">Scale to Rp10B</p>
                          </div>
                          <div className="flex-1 rounded-xl border border-amber-500/20 bg-amber-500/10 p-5 text-center transition hover:bg-amber-500/20">
                            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-amber-400">Re-Optimize</p>
                            <p className="text-lg font-bold text-white">Adjust Parameters</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:border-l lg:border-white/10 lg:pl-12 space-y-8">
                         <div>
                            <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                                Strategic Timeline
                            </span>
                            <h4 className="text-xl font-bold text-white">Future Roadmap</h4>
                         </div>
                         
                         <div className="space-y-6">
                            {[
                                { year: '2025', title: 'System Stabilization', desc: 'Full operation at Rp1B AUM', status: 'active' },
                                { year: '2026', title: 'Scaling Phase 1', desc: 'Target Rp10B deployment & new markets', status: 'pending' },
                                { year: '2027', title: 'Global Expansion', desc: 'Multi-asset framework implementation', status: 'future' }
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-4">
                                     <div className={`mt-1 font-mono text-sm font-bold ${item.status === 'active' ? 'text-emerald-400' : 'text-slate-600'}`}>{item.year}</div>
                                     <div className="relative flex-1 pb-6 border-l border-white/5 pl-6 last:pb-0 last:border-0">
                                        <div className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-slate-900 ${item.status === 'active' ? 'bg-emerald-400' : 'bg-slate-700'}`} />
                                        <h5 className={`font-semibold ${item.status === 'active' ? 'text-white' : 'text-slate-400'}`}>{item.title}</h5>
                                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                                     </div>
                                </div>
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className="relative pl-6 lg:pl-16">
                <div className="relative p-10">
                  <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-6 lg:max-w-2xl">
                      <div>
                          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">System Playbook</p>
                          <h3 className="text-3xl font-bold text-white sm:text-4xl">Quant Signals + Discretionary Validation</h3>
                      </div>
                      <p className="text-lg leading-relaxed text-slate-300">
                        Our hybrid approach combines machine-speed execution via CVQuant with human oversight. Signals are filtered through rigorous risk models before execution, ensuring every trade aligns with our capital preservation mandates.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {["Altcoins Scanner", "Derivatives Trading", "Onchain Analytics", "Risk Models"].map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full lg:w-auto">
                      <a
                        className="group flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:scale-105"
                        href="mailto:panogaricapital@gmail.com"
                      >
                        Available for Partners
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <div className="flex flex-col gap-2 sm:flex-row">
                          <a
                            className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            href="mailto:panogaricapital@gmail.com?subject=Governance%20Overview%20Request"
                          >
                            Request Governance
                          </a>
                          <Link
                            className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            href="/contact"
                          >
                            Contact Page
                          </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
