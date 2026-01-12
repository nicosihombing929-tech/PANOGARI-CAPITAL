import React from "react";
import {
  Rocket,
  Target,
  BarChart3,
  Cpu,
  Shield,
  TrendingUp,
  Zap,
  ChevronRight,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface RoadmapPhase {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  status: "active" | "completed" | "upcoming";
  items: string[];
  milestones: string[];
  color: string;
  gradient: string;
  timeline: string;
}

const Roadmap: React.FC = () => {
  const phases: RoadmapPhase[] = [
    {
      id: 1,
      title: "Build & Validate",
      subtitle: "Foundation & Infrastructure",
      icon: <Cpu className="w-8 h-8" />,
      status: "active",
      items: [
        "Stand up CVQuant pipelines and active trading desk",
        "Establish RP1B AUM portfolio target and risk guardrails",
        "Baseline governance: reporting, compliance-ready documentation",
      ],
      milestones: [
        "CVQuant Pipeline Operational",
        "Risk Framework Established",
        "Governance Documentation Ready",
      ],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      timeline: "Q1 2025",
    },
    {
      id: 2,
      title: "Execute & Monitor",
      subtitle: "Scale & Performance Tracking",
      icon: <BarChart3 className="w-8 h-8" />,
      status: "upcoming",
      items: [
        "Scale live signals across altcoins, derivatives, and technical sleeves",
        "Monthly committee review, adjust parameters if below target",
        "Achieve Panogari Capital operational at RP1B AUM",
      ],
      milestones: [
        "Live Signals Deployed",
        "Monthly Review Process Active",
        "RP1B AUM Target Achieved",
      ],
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      timeline: "Q2-Q3 2025",
    },
    {
      id: 3,
      title: "Scale & Optimize",
      subtitle: "Expansion & Enhancement",
      icon: <Rocket className="w-8 h-8" />,
      status: "upcoming",
      items: [
        "Phase 2: roadmap to RP10B AUM",
        "Model optimization and new strategy onboarding",
        "Stress testing, liquidity drills, and risk capital allocation",
      ],
      milestones: [
        "RP10B Roadmap Defined",
        "Enhanced Models Deployed",
        "Risk Protocols Optimized",
      ],
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      timeline: "Q4 2025 - 2026",
    },
  ];

  const stats = [
    { label: "Target AUM", value: "RP1B", subvalue: "Initial Target", icon: <Target /> },
    { label: "Next Phase", value: "RP10B", subvalue: "Scale Target", icon: <TrendingUp /> },
    { label: "Automation", value: "95%", subvalue: "CVQuant System", icon: <Zap /> },
    { label: "Coverage", value: "360°", subvalue: "Risk Management", icon: <Shield /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <Rocket className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PANOGARI CAPITAL
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-2">Strategic Roadmap 2025-2026</p>
            <p className="text-gray-400 max-w-2xl">
              Building the future of quantitative trading and family office wealth management
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-blue-400">{stat.icon}</div>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.subvalue}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 opacity-30" />

          <div className="space-y-32">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-900 bg-gradient-to-r from-gray-800 to-gray-900 z-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${phase.color}`} />
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div
                    className={`${phase.gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:border-gray-600/50`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${phase.color}`}>{phase.icon}</div>
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold ${
                          phase.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : phase.status === "completed"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {phase.status === "active" ? "In Progress" : phase.status === "completed" ? "Completed" : "Upcoming"}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                        <Clock className="w-4 h-4" />
                        {phase.timeline}
                      </div>
                      <h2 className="text-3xl font-bold mb-2">{phase.title}</h2>
                      <p className="text-gray-300 mb-6">{phase.subtitle}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {phase.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-400 mb-3">Key Milestones</h3>
                      <div className="flex flex-wrap gap-2">
                        {phase.milestones.map((milestone, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
                            {milestone}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute ${index % 2 === 0 ? "md:right-1/2 md:translate-x-16" : "md:left-1/2 md:-translate-x-16"} text-8xl font-bold text-gray-800/30 -z-10`}
                >
                  0{phase.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powered by cutting-edge quantitative systems and risk management protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "CVQuant System",
                description: "Proprietary quantitative trading infrastructure",
                icon: <Cpu className="w-6 h-6" />,
                features: ["Real-time Analysis", "Pattern Recognition", "Risk Scoring"],
              },
              {
                title: "Active Trading Desk",
                description: "Multi-asset execution platform",
                icon: <BarChart3 className="w-6 h-6" />,
                features: ["Altcoins Scanner", "Derivatives Trading", "Portfolio Management"],
              },
              {
                title: "Risk Governance",
                description: "Comprehensive risk management framework",
                icon: <Shield className="w-6 h-6" />,
                features: ["Stress Testing", "Liquidity Drills", "Capital Allocation"],
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">{tech.icon}</div>
                  <h3 className="text-xl font-bold">{tech.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Roadmap Progress</h3>
                <p className="text-gray-400">Track our journey from foundation to scaling</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <span className="text-sm">Build & Validate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  <span className="text-sm">Execute & Monitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                  <span className="text-sm">Scale & Optimize</span>
                </div>
              </div>
            </div>

            <div className="relative h-4 bg-gray-800/50 rounded-full overflow-hidden">
              <div className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 w-1/3" />
              <div className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-500 w-1/3 left-1/3 opacity-50" />
              <div className="absolute h-full bg-gradient-to-r from-orange-500 to-red-500 w-1/3 left-2/3 opacity-30" />
            </div>

            <div className="flex justify-between mt-6">
              {phases.map((phase, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-sm font-semibold">{phase.title}</div>
                  <div className="text-xs text-gray-500">{phase.timeline}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-semibold">On track to achieve RP1B AUM target by Q3 2025</span>
            <ArrowRight className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto pt-8 border-t border-gray-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-400">Live - Updated December 2024</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            PANOGARI CAPITAL - Professional Family Office - "Big Dreams, Start Small"
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Roadmap;
