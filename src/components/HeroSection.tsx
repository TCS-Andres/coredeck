"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 20 } },
};

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.h1
              variants={fadeLeft}
              className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl"
            >
              One Dashboard.
              <br />
              Zero Missed Opportunities.
            </motion.h1>

            <motion.p
              variants={fadeLeft}
              className="mt-6 text-lg leading-8 text-charcoal-light sm:text-xl"
            >
              CoreDeck brings your Canvas deadlines, recruiter messages, work
              schedule, and email into a single AI-prioritized command center —
              so you never drop the ball on what matters most.
            </motion.p>

            <motion.div
              variants={fadeLeft}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.a
                variants={scaleIn}
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy shadow-lg transition-all hover:scale-105 hover:shadow-gold/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Get Early Access
              </motion.a>
              <motion.a
                variants={scaleIn}
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border-2 border-navy px-8 py-3.5 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                See How It Works
              </motion.a>
            </motion.div>

            <motion.div variants={fadeLeft} className="mt-8 space-y-1">
              <p className="text-sm font-medium text-charcoal-lighter">
                Designed for students at FIU, UM, FAU, and Barry University
              </p>
              <p className="text-sm text-charcoal-lighter">
                Currently in Beta &middot; Trusted by 100+ Early Adopters
              </p>
            </motion.div>
          </div>

          {/* Product mockup */}
          <motion.div
            variants={fadeRight}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-navy/10 bg-gradient-to-br from-navy to-navy-700">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="CoreDeck unified dashboard showing notification cards, calendar events, and a priority action queue on laptop and phone screens"
                  width={800}
                  height={450}
                  priority
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Gradient fallback is the parent div bg */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-navy/5 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
