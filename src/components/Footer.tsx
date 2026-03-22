import { Facebook, Instagram, MapPinned, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://maps.app.goo.gl/2Kd7H5az1swWuoZw8",
    label: "Directions",
    icon: MapPinned,
  },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const footer = t.home.footer;

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-background pt-20 pb-8">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[0.9fr_0.7fr_1.4fr]">
          <div>
            <span className="mb-2 block text-4xl font-bold tracking-widest text-primary">GONGU</span>
            <span className="mb-6 block text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/50">
              {t.nav.brandTagline}
            </span>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-foreground/60">{footer.tagline}</p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">{footer.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-foreground/60 transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-card/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              Contact
            </span>
            <h4 className="mt-4 text-2xl font-bold sm:text-3xl">{footer.formTitle}</h4>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/65">
              Visit us in Riga, call ahead for quick questions, or use the online Tableo booking page to reserve your
              table instantly.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+37167000000"
                className="rounded-2xl border border-white/10 bg-background/60 p-5 transition-colors hover:border-primary/40 hover:bg-background/80"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-foreground/45">Phone</div>
                <div className="mt-3 text-lg font-semibold text-foreground">+371 6700 0000</div>
                <div className="mt-2 text-sm text-foreground/60">{t.nav.callUs}</div>
              </a>

              <a
                href="/book"
                className="rounded-2xl border border-primary/20 bg-primary/10 p-5 transition-colors hover:border-primary/40 hover:bg-primary/15"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-primary/80">Online Booking</div>
                <div className="mt-3 text-lg font-semibold text-foreground">{t.nav.reserve}</div>
                <div className="mt-2 text-sm text-foreground/60">Tableo</div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-foreground/40 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Gongu Restaurant. {footer.rights}
          </p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-primary">
              {footer.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              {footer.terms}
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/37167000000"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-20 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 md:bottom-8"
      >
        <Phone className="h-6 w-6" />
      </a>
    </footer>
  );
}
