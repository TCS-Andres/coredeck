"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    image: "/images/feature-action-queue.png",
    title: "AI-Powered Priority Stream",
    body: "Not all notifications are created equal. CoreDeck's action queue uses AI to flag what's truly urgent — a recruiter follow-up that expires in 24 hours, a shift change happening tomorrow, an assignment due tonight — and pushes the noise to the background. You see what matters first, every time.",
    bullets: [
      "Automatic urgency scoring",
      "Smart categorization by life domain",
      "One-tap actions for fast response",
    ],
    alt: "UI mockup of an AI-powered notification priority queue with color-coded urgency cards",
  },
  {
    image: "/images/feature-integrations.png",
    title: "All Your Platforms, One Secure Hub",
    body: "Canvas. LinkedIn. Gmail. Outlook. Your work scheduling app. CoreDeck connects natively to the tools that matter most during your student-to-professional transition — no Zapier setup, no manual config. Just tap 'Connect' and your world gets organized.",
    bullets: [
      "Native deep integrations (not just email forwarding)",
      "Secure OAuth 2.0 connection flow",
      "Disconnect any time with one click",
    ],
    alt: "Illustration of app logos connected by glowing lines flowing into a central hub",
  },
  {
    image: "/images/feature-deadline-tracker.png",
    title: "One Calendar to Rule Them All",
    body: "See your exam schedule, job interview dates, and retail shift times in a single visual timeline. Color-coded by domain, sorted by urgency. Never double-book yourself or miss a deadline because it lived in a different app.",
    bullets: [
      "Merged academic + professional + work calendar",
      "Conflict detection and alerts",
      "Mobile-optimized for on-the-go checking",
    ],
    alt: "UI mockup of a unified calendar timeline merging school deadlines, job interviews, and work shifts",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
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
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl"
          >
            Everything You Need. Nothing You Don&apos;t.
          </motion.h2>
        </motion.div>

        <div className="mt-20 space-y-24">
          {features.map((feature, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:direction-rtl" : ""
                }`}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: reversed ? 40 : -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: "easeOut" as const },
                    },
                  }}
                  className={`${reversed ? "lg:order-2" : ""}`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-navy to-navy-700">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={600}
                      height={450}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: reversed ? -40 : 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: "easeOut" as const },
                    },
                  }}
                  className={`${reversed ? "lg:order-1" : ""}`}
                >
                  <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-charcoal-light">
                    {feature.body}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <motion.li
                        key={bullet}
                        variants={fadeUp}
                        className="flex items-start gap-3 text-sm text-charcoal"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                          &#10003;
                        </span>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
