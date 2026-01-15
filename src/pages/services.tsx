import Head from "next/head";
import { AnimatedCard, AnimatedContainer } from "../components/AnimatedElements";

const wealthServices = [
  "Holistic financial planning aligned to family objectives",
  "Tax optimization and entity structuring",
  "Legacy, trust, and asset protection planning",
  "Liquidity ladders and reserves management",
];

const investmentServices = [
  "Asset allocation with risk budgets per sleeve",
  "Portfolio construction and rebalancing discipline",
  "Attribution and performance governance via monthly committee",
  "Scenario analysis and stress testing for liquidity and risk capital",
];

const tradingDesk = [
  "Altcoins Scanner, Derivatives Trading, Onchain/Technical sleeves",
  "Quant signals with human-in-the-loop discretionary validation",
  "Execution playbooks for trend, mean reversion, and volatility regimes",
  "Real-time monitoring: PnL, VaR, drawdowns, slippage, and venue quality",
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | PANOGARI CAPITAL</title>
        <meta
          name="description"
          content="Wealth management, investment management, and active trading desk services at Panogari Capital."
        />
      </Head>
      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#737373)] text-slate-100 selection:bg-amber-500/30">
        
        {/* Header */}
        <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-32">
           <div className="absolute top-0 left-0 -ml-20 -mt-20 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[40px]" />
           <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-14">
              <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-emerald-500/60"></div>
                     <span className="text-sm font-semibold tracking-[0.2em] text-emerald-500 uppercase">Service Suite</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                    Integrated wealth, investment, and
                    <span className="block mt-2 font-serif italic text-amber-500">trading capabilities</span>
                  </h1>
                  <p className="mt-8 text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
                    We combine family office wealth services with an active trading desk powered by the CVQuant System—designed to preserve, grow, and transfer wealth with measurable accountability.
                  </p>
              </div>
           </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 md:px-12 lg:px-14 space-y-16">

          {/* Wealth Management */}
          <section>
            <AnimatedContainer>
               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 sm:p-8 sm:p-12 shadow-2xl">
                  <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                  
                  <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between relative z-10">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20">
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         </div>
                         <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">Wealth Management</p>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white mb-6">Preserve, optimize, and transfer</h2>
                      <p className="text-lg text-slate-200 leading-relaxed">
                        Advisory and structures that protect capital while enabling efficient growth and succession. We ensure every asset serves the long-term family roadmap.
                      </p>
                    </div>

                    <div className="flex-1 grid gap-4 sm:grid-cols-2">
                      {wealthServices.map((item, idx) => (
                        <div key={item} className="group flex items-center gap-4 rounded-xl bg-[linear-gradient(90deg,#000000,#16145a)] p-4 transition-colors hover:brightness-110 border border-white/10">
                           <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                           <span className="text-sm font-medium text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </AnimatedContainer>
          </section>

          {/* Investment Management */}
          <section>
            <AnimatedContainer>
               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 sm:p-8 sm:p-12 shadow-2xl">
                  {/* Decorative */}
                  <div className="absolute left-0 bottom-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-emerald-900/5 blur-3xl pointer-events-none" />

                  <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-start lg:justify-between relative z-10">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                         </div>
                         <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">Investment Management</p>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white mb-6">Disciplined allocation with risk budgets</h2>
                      <p className="text-lg text-slate-200 leading-relaxed">
                         We design allocation sleeves with explicit risk budgets, rebalancing rules, and transparent performance attribution. No black boxes—just data-driven strategy.
                      </p>
                    </div>
                    
                    <div className="flex-1 grid gap-4 sm:grid-cols-2">
                       {investmentServices.map((item, idx) => (
                         <div key={item} className="group flex items-center gap-4 rounded-xl bg-[linear-gradient(90deg,#000000,#16145a)] p-4 transition-colors hover:brightness-110 border border-white/10">
                           <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                           <span className="text-sm font-medium text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </AnimatedContainer>
          </section>

          {/* Active Trading Desk */}
          <section>
            <AnimatedContainer>
               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 sm:p-8 sm:p-12 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent pointer-events-none" />
                  
                  <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between relative z-10">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500 border border-amber-500/30">
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                         </div>
                         <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500">Active Trading Desk</p>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white mb-6">Quant signals with discretionary oversight</h2>
                      <p className="text-lg text-slate-200 leading-relaxed">
                        The desk integrates CVQuant signals with human validation, real-time monitoring, and execution quality controls. Speed meets wisdom.
                      </p>
                    </div>

                    <div className="flex-1 grid gap-4 sm:grid-cols-2">
                       {tradingDesk.map((item, idx) => (
                         <div key={item} className="group flex items-center gap-4 rounded-xl bg-[linear-gradient(90deg,#000000,#16145a)] p-4 transition-colors hover:brightness-110 border border-white/10">
                           <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                           <span className="text-sm font-medium text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </AnimatedContainer>
          </section>

        </div>
      </div>
    </>
  );
}

