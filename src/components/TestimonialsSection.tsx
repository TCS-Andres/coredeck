"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivers",
    role: "Senior Accounting Major & Audit Intern",
    initials: "AR",
    quote:
      "CoreDeck is my digital mission control. Seeing my Canvas deadlines right next to my LinkedIn recruiter messages has completely eliminated my app fatigue.",
  },
  {
    name: "Jordan Chen",
    role: "Recent Graduate & Junior Financial Analyst",
    initials: "JC",
    quote:
      "I used to miss high-stakes recruiter follow-ups because my inbox was a mess. CoreDeck flags what's urgent so I can stay responsive and professional.",
  },
  {
    name: "Taylor Morgan",
    role: "Junior Business Student & Retail Supervisor",
    initials: "TM",
    quote:
      "Between five classes and a retail job, I was constantly overwhelmed. Now, my work shift changes and exam dates are in one prioritized view.",
  },
  {
    name: "Casey Blair",
    role: "MBA Candidate & Career Consultant",
    initials: "CB",
    quote:
      "I've cut my 'app hopping' in half. CoreDeck doesn't replace my tools; it just organizes the fragmented chaos into one actionable dashboard.",
  },
  {
    name: "Riley Vance",
    role: "Senior Marketing Student & Job Seeker",
    initials: "RV",
    quote:
      "I was hesitant about privacy, but the transparent connection process and easy revoke controls made it easy to trust CoreDeck with my data.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 bg-gradient-to-br from-navy-50/50 to-surface"
    >
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
            What Early Users Say
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl"
          >
            Real Students. Real Results.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="rounded-2xl bg-surface-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-display text-4xl leading-none text-gold/30">
                &ldquo;
              </span>
              <p className="mt-2 text-sm leading-6 text-charcoal-light italic">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-charcoal-lighter">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
