import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#737373)] text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-[0.24em] text-emerald-100 z-50 relative"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Panogari Capital"
              className="h-7 w-auto"
              loading="lazy"
            />
            <span className="hidden xs:block">PANOGARI CAPITAL</span>
            <span className="block xs:hidden">PANOGARI CAPITAL</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const active = isActive(router.pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm transition hover:text-emerald-100 sm:px-4 ${
                    active ? "bg-white/10 text-emerald-100" : "text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/roadmap"
              className="ml-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01]"
            >
              Roadmap
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-emerald-100 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-6 bg-emerald-100 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-emerald-100 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col bg-slate-950/98 pt-24 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex w-full flex-col gap-1 px-4">
             {navItems.map((item) => {
               const active = isActive(router.pathname, item.href);
               return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex w-full items-center justify-between rounded-lg px-5 py-4 text-base font-medium transition-colors ${
                    active 
                      ? "bg-white/5 text-emerald-400" 
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg className={`h-4 w-4 transition-transform ${active ? "rotate-0 text-emerald-400" : "-rotate-90 text-slate-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
               );
             })}
             
             <div className="my-2 h-px w-full bg-white/5" />

             <Link
               href="/roadmap"
               onClick={() => setIsMobileMenuOpen(false)}
               className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
             >
               View Roadmap
             </Link>
          </nav>
        </div>
      </div>

      <div className="pt-20">{children}</div>

      <footer className="mt-12 border-t border-[#d4a34a]/45 bg-black px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-slate-300">
            <p className="text-base font-semibold text-emerald-100">Panogari Capital Family Office</p>
            <p>Active Trading Desk + CVQuant System</p>
            <p>Governance, risk, and performance to reach the Rp1B AUM target.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
              href="mailto:panogaricapital@gmail.com"
            >
              panogaricapital@gmail.com
            </a>
            <span className="rounded-full border border-white/15 px-4 py-2 text-slate-100">
              +62 851-2605-4805
            </span>
            <Link
              className="rounded-full border border-white/15 px-4 py-2 text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
              href="/contact"
            >
              Contact page
            </Link>
            <Link
              className="rounded-full border border-white/15 px-4 py-2 text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
              href="/services"
            >
              Services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
