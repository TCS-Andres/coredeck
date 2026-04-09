"use client";

import { motion } from "framer-motion";
import { HeartIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function GuideSection() {
  return (
    <section id="guide" className="py-20 sm:py-28 bg-surface-dark/50">
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
            The Solution
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl"
          >
            Meet CoreDeck — Your Digital Mission Control
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal-light"
          >
            We built CoreDeck because we lived the chaos. As students and
            early-career professionals ourselves, we know what it&apos;s like to
            miss a recruiter&apos;s 24-hour follow-up window because it was
            buried under 50 Canvas notifications. CoreDeck is the trusted guide
            that cuts through the noise and puts your highest-stakes items front
            and center.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {/* Empathy Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-surface-card p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
              <HeartIcon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">
              We Get It
            </h3>
            <p className="mt-3 text-base leading-7 text-charcoal-light">
              Built by students who were tired of the app-hopping chaos.
              We&apos;ve missed the deadlines and the recruiter callbacks.
              That&apos;s why we built something different.
            </p>
          </motion.div>

          {/* Authority Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-surface-card p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
              <ShieldCheckIcon className="h-6 w-6 text-navy" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">
              Engineered for Trust
            </h3>
            <p className="mt-3 text-base leading-7 text-charcoal-light">
              OAuth 2.0 secure connections. FERPA and CCPA aligned.
              Permission-minimized architecture. Your data stays yours — we just
              organize the signals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
