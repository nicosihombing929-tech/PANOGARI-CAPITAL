import Head from "next/head";
import { AnimatedCard, AnimatedContainer } from "../components/AnimatedElements";

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
    role: "Investment Management",
    name: "CVQuant System + Trading Desk",
    focus: "Signal generation, execution quality, and portfolio construction.",
  },
  {
    role: "Wealth Management",
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

const investors = [
  { 
    name: "Nico Panogari Sihombing", 
    role: "Chairman, CEO & Founder", 
    image: "/investors/nico-panogari.png",
    description: "Founder and visionary behind Panogari Capital, driving the strategic roadmap, governance framework, and the CVQuant trading systems." 
  },
  { 
    name: "R. Sihombing", 
    role: "Investor", 
    image: "/investors/investor-1.png",
    description: "Specializes in algorithmic trading strategies and quantitative risk assessment, bringing 10+ years of market experience." 
  },
  { 
    name: "R. Tampubolon", 
    role: "Investor", 
    image: "/investors/investor-2.png",
    description: "Focuses on long-term asset allocation and wealth preservation, ensuring alignment with family legacy goals." 
  },
  { 
    name: "Afrinaldi Sihombing", 
    role: "Investor", 
    image: "/investors/investor-3.png",
    description: "Oversees operational governance and compliance frameworks, maintaining institutional-grade standards." 
  },
  { 
    name: "Evlin Sarah Sihombing", 
    role: "Investor", 
    image: "/investors/investor-4.png",
    description: "Expert in alternative investments and venture capital, identifying high-growth opportunities in emerging markets." 
  },
  { 
    name: "Luis Fabiano Sihombing", 
    role: "Investor", 
    image: "/investors/investor-5.png",
    description: "Leads the real estate and physical asset portfolio, balancing liquidity with stable, long-term appreciation." 
  },
  { 
    name: "Diva Olivia Sihombing", 
    role: "Investor", 
    image: "/investors/investor-6.png",
    description: "Manages philanthropic initiatives and impact investing, integrating social responsibility with financial returns." 
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
      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#737373)] text-slate-100 selection:bg-amber-500/30">
        
        {/* Header Section */}
        <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-32">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-emerald-900/5 blur-[40px]" />
           <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-14">
              <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-amber-500/60"></div>
                     <span className="text-sm font-semibold tracking-[0.2em] text-amber-500 uppercase">Our D.N.A</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                    Institutional discipline for a
                    <span className="block mt-2 font-serif italic text-emerald-400">focused family office</span>
                  </h1>
                  <p className="mt-8 text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
                    Panogari Capital blends a professional trading desk, CVQuant signal stack, and wealth management services under a clear governance framework. We operate with measurable targets and transparent oversight to keep the AUM roadmap on track.
                  </p>
              </div>
           </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 md:px-12 lg:px-14 space-y-24">
          
          {/* Highlights */}
          <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item, idx) => (
                <AnimatedCard key={item} delay={idx * 0.05}>
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 transition-all">
                     <div className="absolute top-0 right-0 p-4 opacity-20">
                        <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <p className="text-sm font-light leading-relaxed text-slate-200">{item}</p>
                  </div>
                </AnimatedCard>
              ))}
          </div>

          {/* Leadership Section */}
          <section className="relative">
             <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-1/3 lg:sticky lg:top-24">
                   <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">Leadership</p>
                   <h2 className="mt-4 text-3xl font-bold text-white">Focused roles, clear accountability</h2>
                   <p className="mt-6 text-slate-300 leading-relaxed">
                      Roles are defined to keep decision-making swift while retaining strong controls. Investment, trading, and wealth management functions are aligned to the same roadmap and review cadence.
                   </p>
                   <div className="mt-8 h-px w-24 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                </div>

                <div className="lg:w-2/3 grid gap-6">
                   {leadership.map((leader, idx) => (
                    <AnimatedCard key={leader.role} delay={idx * 0.1}>
                       <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 sm:p-8 transition-all hover:border-emerald-500/30">
                          <div className="flex flex-col sm:flex-row gap-6 items-start">
                             <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                                {idx + 1}
                             </div>
                             <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{leader.role}</p>
                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">{leader.name}</h3>
                                <p className="mt-3 text-slate-300 group-hover:text-white transition-colors">{leader.focus}</p>
                             </div>
                          </div>
                       </div>
                    </AnimatedCard>
                   ))}
                </div>
             </div>
          </section>

          {/* Investment Team / Family Members Section */}
          <section className="relative">
             <div className="mb-16">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">Investment Family</p>
                <h2 className="mt-4 text-3xl font-bold text-white">Our Stakeholders</h2>
                <p className="mt-3 text-slate-300 max-w-2xl">United by vision, aligned on capital allocation and long-term wealth preservation for the family office.</p>
             </div>

             <div className="space-y-16">
                 {/* Chairman - Tier 1 */}
                 <div className="mx-auto max-w-5xl mb-20">
                   {investors.slice(0, 1).map((leader) => (
                      <AnimatedCard key={leader.name} delay={0}>
                         <div className="group relative">
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                               <div className="relative h-[400px] md:h-[500px] w-full">
                                     <img 
                                       src={leader.image} 
                                       alt={leader.name}
                                       className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                                     />
                                     {/* Removed gradient overlay for cleaner look if requested */}
                               </div>
                               <div className="flex flex-col justify-center relative">
                                  <div className="mb-6 opacity-20">
                                     <svg className="w-16 h-16 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                                  </div>
                                  <span className="mb-4 inline-block w-fit rounded bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-500 border border-amber-500/20">
                                     {leader.role}
                                  </span>
                                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{leader.name}</h3>
                                  <p className="text-slate-300 leading-relaxed text-lg max-w-lg">{leader.description}</p>
                                  
                                  <div className="mt-8 flex gap-4">
                                     <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent rounded-full" />
                                  </div>
                               </div>
                            </div>
                         </div>
                      </AnimatedCard>
                   ))}
                 </div>

                 {/* Investors - Tier 2 (Staggered Grid) */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 px-2">
                    {investors.slice(1).map((investor, idx) => (
                       <AnimatedCard key={investor.name} delay={idx * 0.1}>
                          <div className={`group flex flex-col items-center ${idx % 2 !== 0 ? "md:mt-16" : ""}`}>
                              <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl">
                                   <img 
                                     src={investor.image}
                                     alt={investor.name}
                                     className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                   />
    
                                   {/* Hover Description & Role */}
                                   <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                      <div>
                                        <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">Investor</p>
                                        <p className="text-slate-200 leading-relaxed text-sm">
                                          {investor.description}
                                        </p>
                                      </div>
                                   </div>
                              </div>
                              
                              {/* Name Below Image */}
                              <div className="mt-6 text-center">
                                 <h3 className="text-2xl font-bold text-white tracking-wide">{investor.name}</h3>
                              </div>
                              
                              {/* Bottom Accent Line (External) */}
                              <div className="mt-4 h-0.5 bg-emerald-500/50 w-0 transition-all duration-500 group-hover:w-24 group-hover:bg-emerald-400" />
                          </div>
                       </AnimatedCard>
                    ))}
                 </div>
             </div>
          </section>

          {/* Pillars Section */}
          <section>
             <div className="mb-12">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Foundation</p>
                <h2 className="mt-2 text-3xl font-bold text-white">Core Capabilities</h2>
             </div>
             <div className="grid gap-6 sm:p-8 lg:grid-cols-3">
              {pillars.map((pillar, idx) => (
                <AnimatedCard key={pillar.title} delay={idx * 0.07}>
                  <div className="group h-full rounded-2xl border border-white/5 bg-[linear-gradient(90deg,#000000,#78560e)] p-6 sm:p-8 transition-all hover:shadow-2xl hover:shadow-emerald-900/10">
                    <h3 className="text-lg font-bold text-emerald-400 mb-6">{pillar.title}</h3>
                    <ul className="space-y-4">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                          <span className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              ))}
             </div>
          </section>

          {/* Operating Cadence */}
          <section className="relative rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 sm:p-12 overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
             <div className="relative z-10">
                <div className="max-w-2xl mb-10">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">Operating Cadence</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">Feedback loops that keep us on target</h2>
                    <p className="mt-4 text-slate-300">
                      Monthly reviews decide whether to continue the current playbooks, adjust trading parameters, or run model optimization—keeping us aligned to the Rp1B target and the scale plan beyond.
                    </p>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {["Signal intake", "Pre-trade risk", "Execution quality", "Performance review"].map((item, idx) => (
                    <AnimatedCard key={item} delay={idx * 0.05}>
                      <div className="relative group rounded-xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 text-center">
                        <div className="mb-4 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-500 font-bold text-xs ring-4 ring-black">0{idx+1}</div>
                        <div className="text-sm font-bold text-white group-hover:text-emerald-400">{item}</div>
                        {idx < 3 && (
                           <div className="hidden lg:block absolute top-1/2 -right-6 w-8 h-px bg-white/10 -translate-y-1/2"></div>
                        )}
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
             </div>
          </section>

        </div>
      </div>
    </>
  );
}

