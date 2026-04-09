"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-700 to-navy-800 py-20 sm:py-24">
      {/* Decorative particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-[10%] h-2 w-2 rounded-full bg-gold" />
        <div className="absolute top-1/3 left-[25%] h-1.5 w-1.5 rounded-full bg-gold" />
        <div className="absolute top-1/4 right-[20%] h-2.5 w-2.5 rounded-full bg-gold" />
        <div className="absolute bottom-1/3 left-[60%] h-2 w-2 rounded-full bg-gold" />
        <div className="absolute bottom-10 right-[30%] h-1.5 w-1.5 rounded-full bg-gold" />
        <div className="absolute top-1/2 left-[45%] h-3 w-3 rounded-full bg-gold/50" />
        <div className="absolute top-[15%] right-[40%] h-1 w-1 rounded-full bg-gold" />
        <div className="absolute bottom-[20%] left-[15%] h-2 w-2 rounded-full bg-gold/70" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Stop Missing What Matters. Get CoreDeck.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
          >
            Join 100+ students and early-career professionals who are already
            taking control of their digital chaos. Sign up for early access —
            it&apos;s free.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gold px-10 py-4 text-lg font-semibold text-navy shadow-xl transition-all hover:scale-105 hover:shadow-gold/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Get Early Access
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
