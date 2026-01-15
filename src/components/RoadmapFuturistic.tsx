'use client';

import React, { useEffect, useState } from "react";
import {
  Rocket,
  Cpu,
  BarChart3,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Database,
  Lock,
  Sparkles,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const RoadmapFuturistic: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "BUILD & VALIDATE",
      stage: "FOUNDATION",
      icon: <Cpu className="w-10 h-10" />,
      tasks: [
        "Stand up CVQuant pipelines and active trading desk",
        "Establish RP1B AUM portfolio target and risk guardrails",
        "Baseline governance: reporting, compliance-ready documentation",
      ],
      tech: ["Docker", "Kubernetes", "Python 3.11", "FastAPI"],
      timeline: "Q1 2026",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "EXECUTE & MONITOR",
      stage: "OPERATIONAL",
      icon: <BarChart3 className="w-10 h-10" />,
      tasks: [
        "Scale live signals across altcoins, derivatives, and technical sleeves",
        "Monthly committee review, adjust parameters if below target",
        "Achieve Panogari Capital operational at RP1B AUM",
      ],
      tech: ["Redis", "WebSockets", "React", "TypeScript"],
      timeline: "Q2-Q3 2026",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "SCALE & OPTIMIZE",
      stage: "EXPANSION",
      icon: <Rocket className="w-10 h-10" />,
      tasks: [
        "Phase 2: roadmap to RP10B AUM",
        "Model optimization and new strategy onboarding",
        "Stress testing, liquidity drills, and risk capital allocation",
      ],
      tech: ["TensorFlow", "Ray", "PostgreSQL", "AWS"],
      timeline: "Q4 2026 - 2027",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const stats = [
    { value: "RP1B", label: "Initial AUM Target in 2026", change: "+0%" },
    { value: "RP10B", label: "Scale Target in 2027", change: "+900%" },
    { value: "24/7", label: "Trading Operations", change: "Real-time" },
    { value: "99.9%", label: "System Uptime", change: "Target" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phases.length]);

  return (
    <div className="relative min-h-screen text-slate-100 overflow-hidden">
      <div className="relative z-10">
        <header className="container mx-auto px-4 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50" />
                  <div className="relative bg-black border border-gray-800 rounded-xl p-3">
                    <Rocket className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl xs:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">PANOGARI</span>
                    <span className="text-white"> CAPITAL</span>
                  </h1>
                  <p className="text-gray-400 mt-2">Quantum Finance Roadmap</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full">
                  <span className="text-sm font-semibold">AUM Target: RP1B to RP10B</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">Active Development</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-2"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  <div className="text-xs text-green-400 mt-2">{stat.change}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-20">
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 h-full w-0.5">
              <div className="h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 opacity-20 blur-lg" />
            </div>

            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center mb-16 lg:mb-32 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${idx % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative p-0">
                    <div className="relative py-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${phase.gradient}`}>{phase.icon}</div>
                          <div>
                            <div className="text-sm font-semibold text-gray-400">{phase.timeline}</div>
                            <h2 className="text-2xl font-bold">{phase.title}</h2>
                            <div className="text-sm text-gray-300">{phase.stage}</div>
                          </div>
                        </div>

                        <div
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            idx === 0
                              ? "bg-cyan-500/20 text-cyan-400"
                              : idx === 1
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-orange-500/20 text-orange-400"
                          }`}
                        >
                          {idx === 0 ? "ACTIVE" : idx === 1 ? "NEXT" : "FUTURE"}
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {phase.tasks.map((task, taskIdx) => (
                          <div key={taskIdx} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-300">{task}</p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-400 mb-3">TECH STACK</div>
                        <div className="flex flex-wrap gap-2">
                          {phase.tech.map((tech, techIdx) => (
                            <span key={techIdx} className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-lg text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center">
                  <div
                    className={`absolute w-6 h-6 rounded-full bg-gradient-to-br ${phase.gradient} ${activePhase === idx ? "animate-pulse" : ""}`}
                  />
                  <div
                    className={`absolute w-8 h-8 rounded-full bg-gradient-to-br ${phase.gradient} opacity-30 ${activePhase === idx ? "animate-ping" : ""}`}
                  />
                  <div className="text-lg font-bold text-white">{idx + 1}</div>
                </div>

                <div className={`w-full lg:w-1/2 ${idx % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`} />
              </motion.div>
            ))}
          </div>

          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technology Infrastructure</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Building on cutting-edge technologies for quantitative excellence</p>
            </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "CVQuant Core",
                  description: "Proprietary quantitative engine",
                  features: ["Real-time Data Processing", "Machine Learning Models", "Risk Analysis"],
                  icon: <Cpu className="w-8 h-8" />,
                  gradient: "from-cyan-500 to-blue-600",
                },
                {
                  title: "Trading Infrastructure",
                  description: "High-frequency execution systems",
                  features: ["WebSocket Streams", "Order Management", "Portfolio Tracking"],
                  icon: <Zap className="w-8 h-8" />,
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  title: "Risk Framework",
                  description: "Enterprise risk management",
                  features: ["Stress Testing", "Liquidity Monitoring", "Compliance Checks"],
                  icon: <Shield className="w-8 h-8" />,
                  gradient: "from-orange-500 to-red-600",
                },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group p-0"
                >
                  <div className="relative p-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${tech.gradient} w-fit mb-6`}>{tech.icon}</div>

                    <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                    <p className="text-gray-400 mb-6">{tech.description}</p>

                    <div className="space-y-3">
                      {tech.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-32">
            <div className="p-0">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Roadmap Progress</h3>
                  <p className="text-gray-400">Real-time tracking of development milestones</p>
                </div>

                <div className="flex items-center gap-8">
                  {phases.map((phase, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className={`text-lg font-bold mb-1 ${
                          idx === 0 ? "text-cyan-400" : idx === 1 ? "text-purple-400" : "text-orange-400"
                        }`}
                      >
                        {phase.title.split(" & ")[0]}
                      </div>
                      <div className="text-sm text-gray-500">{phase.timeline}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="relative h-3 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "33%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <div className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-600 w-1/3 left-1/3 opacity-50" />
                  <div className="absolute h-full bg-gradient-to-r from-orange-500 to-red-600 w-1/3 left-2/3 opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default RoadmapFuturistic;
