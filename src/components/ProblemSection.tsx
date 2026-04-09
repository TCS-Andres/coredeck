"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 117, suffix: "", label: "emails received per day by the average worker" },
  { value: 28, suffix: "%", label: "of the workday lost to email triage and context-switching" },
  { value: 19.4, suffix: "M+", label: "U.S. college students navigating digital fragmentation" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-28">
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
            The Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl"
          >
            You&apos;re Drowning in Apps — And Missing What Matters
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal-light"
          >
            The average student juggles 6+ apps every day — Canvas for class,
            LinkedIn for jobs, Gmail for recruiters, a scheduling app for work
            shifts, and more. Critical notifications get buried. Deadlines slip.
            Recruiter messages go unanswered for days. The cost isn&apos;t just
            stress — it&apos;s missed career opportunities and tanked GPAs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="relative rounded-xl bg-surface-card p-8 shadow-sm border-l-4 border-gold transition-shadow hover:shadow-md"
            >
              <p className="font-display text-4xl font-extrabold text-navy lg:text-5xl">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-3 text-sm leading-6 text-charcoal-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
