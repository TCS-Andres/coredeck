"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Is CoreDeck free?",
    answer:
      "CoreDeck is currently in beta and free for early adopters. We'll announce pricing plans before general availability, and beta users will receive exclusive benefits.",
  },
  {
    question: "Which platforms does CoreDeck integrate with?",
    answer:
      "We currently support Canvas, Blackboard, LinkedIn, Gmail, Outlook, and popular work scheduling apps. More integrations are on our roadmap based on user feedback.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We use OAuth 2.0 for all connections, meaning we never see or store your passwords. Our architecture follows FERPA and CCPA guidelines, and you can disconnect any platform or delete your data at any time.",
  },
  {
    question: "Do I need to be a student to use CoreDeck?",
    answer:
      "CoreDeck is designed for anyone navigating the student-to-professional transition — current students, recent graduates, and early-career professionals all benefit from having a unified mission control.",
  },
  {
    question: "How is this different from Superhuman or Zapier?",
    answer:
      "Superhuman optimizes your email inbox. Zapier requires manual automation setup. CoreDeck is purpose-built for the student-professional crossover — it natively understands Canvas, LinkedIn, and work scheduling apps without any configuration.",
  },
  {
    question: "What if I want to disconnect a platform?",
    answer:
      "One click. Go to your Privacy Dashboard, hit 'Revoke' next to any connected app, and the connection is immediately severed. We practice permission minimization — we only request the access we need.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-surface-dark">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-navy pr-4">
          {question}
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-charcoal-lighter transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-6 text-charcoal-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface-dark/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl"
          >
            Questions? We&apos;ve Got Answers.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mt-12"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
