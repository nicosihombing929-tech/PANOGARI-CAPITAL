import Head from "next/head";

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
      <div className="min-h-screen px-6 py-10 text-slate-100 sm:px-10 md:px-12 lg:px-16">
        <header className="mb-12 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Services</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Integrated wealth, investment, and trading capabilities</h1>
          <p className="max-w-4xl text-lg text-slate-200">
            We combine family office wealth services with an active trading desk powered by the CVQuant System—designed to preserve, grow, and transfer wealth with measurable accountability.
          </p>
        </header>

        <main className="flex flex-col gap-10">
          <section className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Wealth Management</p>
                <h2 className="mt-2 text-2xl font-semibold">Preserve, optimize, and transfer</h2>
                <p className="mt-3 text-slate-200">
                  Advisory and structures that protect capital while enabling efficient growth and succession.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {wealthServices.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Investment Management</p>
                <h2 className="mt-2 text-2xl font-semibold">Disciplined allocation with risk budgets</h2>
                <p className="mt-3 text-slate-200">
                  We design allocation sleeves with explicit risk budgets, rebalancing rules, and transparent performance attribution.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {investmentServices.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Active Trading Desk</p>
                <h2 className="mt-2 text-2xl font-semibold">Quant signals with discretionary oversight</h2>
                <p className="mt-3 text-slate-200">
                  The desk integrates CVQuant signals with human validation, real-time monitoring, and execution quality controls.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {tradingDesk.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
