import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function AnimatedHeroOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-300/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500/15 to-emerald-400/10 blur-3xl"
        animate={{
          y: [0, 40, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={item}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay, duration: 0.6 }}
      className="text-3xl font-bold text-emerald-100"
    >
      {value}
    </motion.div>
  );
}

export function AnimatedFinancialBackground() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
      animate={{
        scale: [1, 1.02, 1],
        x: [0, 6, 0],
        y: [0, -6, 0],
        opacity: [0.28, 0.36, 0.28],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
