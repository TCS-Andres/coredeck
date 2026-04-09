"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: string; numeric: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [displayed, setDisplayed] = useState("0");

  // For simple display values like "6+", "24/7" just reveal them
  const isSimple = target === "24/7" || target === "6+";

  useEffect(() => {
    if (!isInView) return;
    if (isSimple) {
      setDisplayed(target);
      return;
    }
    const numTarget = parseFloat(target);
    let start = 0;
    const duration = 1200;
    const increment = numTarget / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numTarget) {
        setDisplayed(String(numTarget));
        clearInterval(timer);
      } else {
        setDisplayed(String(Math.floor(start)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, isSimple]);

  return (
    <span ref={ref}>
      {displayed}
      {!isSimple && suffix}
    </span>
  );
}

const stats = [
  { display: "6+", numeric: 6, suffix: "+", label: "Apps consolidated into one view" },
  { display: "100+", numeric: 100, suffix: "+", label: "Beta users and counting" },
  { display: "50", numeric: 50, suffix: "%", label: "Reduction in notification overload" },
  { display: "24/7", numeric: 0, suffix: "", label: "Platform availability" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function SocialProofSection() {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Built for the Student-to-Professional Journey
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <p className="font-display text-4xl font-extrabold text-gold lg:text-5xl">
                <CountUp
                  target={stat.display}
                  numeric={stat.numeric}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
