"use client";

import { motion } from "framer-motion";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";

const failures = [
  "Recruiter follow-ups expire unanswered",
  "Assignment deadlines slip through the cracks",
  "Shift changes catch you off guard",
  "Hours wasted hopping between 6+ apps daily",
  "Constant anxiety about what you're missing",
];

const successes = [
  "Every urgent message surfaced instantly",
  "All deadlines visible in one calendar",
  "Shift changes confirmed in seconds",
  "One dashboard replaces the chaos",
  "Peace of mind — you're on top of everything",
];

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FailureSuccessSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Failure column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideLeft}
            className="rounded-2xl bg-red-50 p-8 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-red-900">
              Without CoreDeck
            </h3>
            <ul className="mt-6 space-y-4">
              {failures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XMarkIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-sm leading-6 text-red-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Success column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideRight}
            className="rounded-2xl bg-emerald-50 p-8 sm:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-emerald-900">
              With CoreDeck
            </h3>
            <ul className="mt-6 space-y-4">
              {successes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-sm leading-6 text-emerald-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
