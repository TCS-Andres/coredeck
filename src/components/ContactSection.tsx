"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Early Access / Beta",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with CRM endpoint (e.g., HubSpot, Mailchimp, or custom API)
    console.log("Form submission:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-card p-12 shadow-sm text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-8 w-8 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">
                  You&apos;re on the list!
                </h3>
                <p className="mt-2 text-sm text-charcoal-light">
                  We&apos;ll be in touch soon with your early access details.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-surface-card p-8 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-navy">
                  Get Early Access
                </h3>
                <p className="mt-1 text-sm text-charcoal-lighter">
                  Fill out the form and we&apos;ll get you set up.
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1.5 block w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 block w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="mt-1.5 block w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                    >
                      <option>Early Access / Beta</option>
                      <option>Integration Request</option>
                      <option>Partnership Inquiry</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Message{" "}
                      <span className="text-charcoal-lighter">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1.5 block w-full rounded-lg border border-surface-dark bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gold px-8 py-3 text-base font-semibold text-navy transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
                  >
                    Get Early Access
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col justify-center"
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-2xl font-bold text-navy"
            >
              Get in Touch
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-base text-charcoal-light"
            >
              Have questions? Reach out directly — we&apos;d love to hear from
              you.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 space-y-6"
            >
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <a
                    href="mailto:coredeck@now.com"
                    className="text-sm text-charcoal-light hover:text-navy-400 transition-colors"
                  >
                    coredeck@now.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-navy">Phone</p>
                  <a
                    href="tel:123-456-7890"
                    className="text-sm text-charcoal-light hover:text-navy-400 transition-colors"
                  >
                    123-456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-navy">Hours</p>
                  <p className="text-sm text-charcoal-light">
                    Live Support Mon–Wed, 9 AM – 5 PM EST
                  </p>
                  <p className="text-sm text-charcoal-light">
                    24/7 Automated Support
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
