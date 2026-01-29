import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { Home, Users, Briefcase, Mail, Map, X, ChevronRight } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

const navItems = [
  { href: "/", labelKey: "nav.home", icon: Home },
  { href: "/about", labelKey: "nav.about", icon: Users },
  { href: "/services", labelKey: "nav.services", icon: Briefcase },
  { href: "/contact", labelKey: "nav.contact", icon: Mail },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

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
          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-1 sm:gap-2">
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
                      {t(item.labelKey)}
                    </Link>
                  );
                })}
             </div>
             
             <Link
               href="/roadmap"
               className="ml-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01]"
             >
               {t('nav.roadmap')}
             </Link>
             
             <div className="ml-2 pl-2 border-l border-white/10">
               <LanguageSwitcher />
             </div>
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

        {/* Mobile Sidebar Overlay & Drawer */}
        <div 
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-[#1a1a1a] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/5 px-6">
             <span className="text-sm font-bold tracking-[0.2em] text-emerald-400">MENU</span>
             <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
             >
               <X className="h-5 w-5" />
             </button>
          </div>
          
          <nav className="flex flex-col gap-1 p-4">
             {navItems.map((item) => {
               const active = isActive(router.pathname, item.href);
               const Icon = item.icon;
               return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    active 
                      ? "bg-emerald-900/20 text-emerald-400 border-l-2 border-emerald-500" 
                      : "text-slate-300 border-l-2 border-transparent hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${active ? "text-emerald-400" : "text-slate-400 group-hover:text-white"}`} />
                  <span>{t(item.labelKey)}</span>
                </Link>
               );
             })}
             
             <div className="my-2 h-px w-full bg-white/5" />

             <Link
               href="/roadmap"
               onClick={() => setIsMobileMenuOpen(false)}
               className="group flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium text-slate-300 border-l-2 border-transparent hover:bg-white/5 hover:text-white"
             >
                <Map className="h-5 w-5 text-emerald-500" />
                <span>{t('nav.roadmap')}</span>
                <ChevronRight className="ml-auto h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
             </Link>
             
             <div className="mt-4 pt-4 border-t border-white/5 pl-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Language</p>
                <LanguageSwitcher />
             </div>
          </nav>

          {/* Footer User Profile Style */}
          <div className="absolute bottom-6 left-0 w-full px-4">
             <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-xs font-bold text-white shadow-lg">
                  PC
                </div>
                <div>
                   <p className="text-xs font-bold text-white uppercase tracking-wider">Panogari Capital</p>
                   <p className="text-[10px] text-slate-400">Family Office Systems</p>
                </div>
             </div>
             
             <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-600">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>System Operational</span>
             </div>
          </div>
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
              {t('nav.contact')}
            </Link>
            <Link
              className="rounded-full border border-white/15 px-4 py-2 text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
              href="/services"
            >
              {t('nav.services')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
