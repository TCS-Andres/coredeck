"use client";

import { motion } from "framer-motion";
import {
  LinkIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: LinkIcon,
    number: "1",
    title: "Connect Your Platforms",
    description:
      "Securely link Canvas, LinkedIn, Gmail, and your work scheduler using our OAuth 2.0 flow. It takes 60 seconds. You control every permission.",
  },
  {
    icon: SparklesIcon,
    number: "2",
    title: "Let AI Prioritize",
    description:
      "CoreDeck's priority engine analyzes every incoming notification across all your platforms and surfaces what needs your attention right now.",
  },
  {
    icon: RocketLaunchIcon,
    number: "3",
    title: "Act With Confidence",
    description:
      "Respond to recruiters, submit assignments, and confirm shifts from one dashboard. No more app-hopping. No more missed opportunities.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function PlanSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-surface-dark/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-gold"
          >
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl"
          >
            Three Steps to Digital Clarity
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="relative mt-16"
        >
          {/* Connecting line (desktop only) */}
          <div className="absolute top-16 left-[16.67%] right-[16.67%] hidden h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30 lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold font-display text-2xl font-bold shadow-lg ring-4 ring-surface">
                  {step.number}
                </div>

                <div className="mt-6 rounded-2xl bg-surface-card p-6 shadow-sm">
                  <step.icon className="mx-auto h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy shadow-lg transition-all hover:scale-105 hover:shadow-gold/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Get Early Access &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
