import Image from "next/image";

const quickLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Logo + tagline */}
          <div>
            <Image
              src="/images/coredeck-logo.png"
              alt="CoreDeck logo"
              width={120}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-white/70">
              Your Digital Mission Control
            </p>
            <p className="mt-6 text-xs text-white/50">
              &copy; 2026 CoreDeck. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                <a
                  href="mailto:coredeck@now.com"
                  className="hover:text-gold transition-colors"
                >
                  coredeck@now.com
                </a>
              </p>
              <p>
                <a
                  href="tel:123-456-7890"
                  className="hover:text-gold transition-colors"
                >
                  123-456-7890
                </a>
              </p>
              <p>Mon–Wed, 9 AM – 5 PM EST</p>
            </div>

            {/* Social icons placeholder */}
            <div className="mt-6 flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((platform) => (
                <span
                  key={platform}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-white/60 hover:bg-gold/20 hover:text-gold transition-colors"
                  aria-label={platform}
                >
                  {platform[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 border-t border-white/10 pt-8 space-y-3">
          <p className="text-xs leading-5 text-white/40">
            CoreDeck is a third-party integrator. We are not affiliated with,
            endorsed by, or sponsored by Instructure (Canvas), LinkedIn, Google,
            or any other integrated platform.
          </p>
          <p className="text-xs leading-5 text-white/40">
            This platform is designed for organizational purposes only. Users are
            responsible for adhering to their institution&apos;s policies
            regarding third-party API use and data privacy.
          </p>
          <p className="text-xs leading-5 text-white/40">
            CoreDeck is currently in a conceptual beta phase for educational
            validation.
          </p>
        </div>
      </div>
    </footer>
  );
}
