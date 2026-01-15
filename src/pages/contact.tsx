import Head from "next/head";
import { AnimatedCard, AnimatedContainer } from "../components/AnimatedElements";

const contactMethods = [
  {
    label: "Email",
    value: "panogaricapital@gmail.com",
    href: "mailto:panogaricapital@gmail.com",
    icon: (
       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  },
  {
    label: "Governance overview",
    value: "Request the latest PDF",
    href: "mailto:panogaricapital@gmail.com?subject=Governance%20Overview%20Request",
    icon: (
       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )
  },
  {
    label: "Partnerships",
    value: "Discuss allocations or strategy onboarding",
    href: "mailto:panogaricapital@gmail.com?subject=Partnership%20Inquiry",
    icon: (
       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
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
      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#737373)] text-slate-100 selection:bg-amber-500/30">
        
        {/* Header */}
        <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-32">
           <div className="absolute top-0 right-1/4 -mt-20 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[50px] pointer-events-none" />
           <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-14">
              <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-amber-500/60"></div>
                     <span className="text-sm font-semibold tracking-[0.2em] text-amber-500 uppercase">Connect</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                    Let&apos;s talk about <br className="hidden lg:block"/>
                    <span className="font-serif italic text-slate-300">governance, performance,</span> <br/>
                    and partnerships
                  </h1>
                  <p className="mt-8 text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
                    Reach out to align on wealth objectives, trading mandates, or collaboration on strategy onboarding. We keep communications concise, measurable, and action-oriented.
                  </p>
              </div>
           </div>
        </section>

        <main className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 md:px-12 lg:px-14 flex flex-col gap-10">
          
          <AnimatedContainer>
            <div className="grid gap-6 lg:grid-cols-3">
               {contactMethods.map((method, idx) => (
                  <AnimatedCard key={method.label} delay={idx * 0.1}>
                    <div className="h-full">
                       <a
                         href={method.href}
                         className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/20"
                       >
                          <div>
                             <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                                {method.icon}
                             </div>
                             <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">{method.label}</p>
                             <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">{method.value}</h3>
                          </div>
                          
                          <div className="mt-8 flex items-center gap-2 text-sm font-bold text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                             <span>Initiate Request</span>
                             <span aria-hidden>→</span>
                          </div>
                       </a>
                    </div>
                  </AnimatedCard>
               ))}
            </div>
          </AnimatedContainer>

          <AnimatedContainer>
            <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(90deg,#000000,#16145a)] p-6 sm:p-8 sm:p-16 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                 <div className="space-y-6">
                    <div>
                       <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500">Agenda</p>
                       <h2 className="mt-2 text-3xl font-bold text-white">Focused conversations that respect your time</h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                       Please include context (objectives, constraints, timelines) so we can prepare a concise, actionable response.
                    </p>
                    <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent my-6"></div>
                 </div>
                 
                 <div className="grid gap-4 sm:grid-cols-2">
                    {questions.map((q, idx) => (
                       <AnimatedCard key={q} delay={idx * 0.05}>
                          <div className="flex bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-emerald-900/5 transition-colors">
                             <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] mr-4" />
                             <span className="text-sm font-medium text-slate-200">{q}</span>
                          </div>
                       </AnimatedCard>
                    ))}
                 </div>
              </div>
            </section>
          </AnimatedContainer>
        </main>
      </div>
    </>
  );
}


