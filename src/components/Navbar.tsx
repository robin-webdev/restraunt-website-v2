import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { languageLabels, useLanguage, type Language } from "@/lib/i18n";

const directionsUrl = "https://maps.app.goo.gl/2Kd7H5az1swWuoZw8";

function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) {
    return;
  }

  window.history.replaceState(null, "", hash);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LanguageSwitcher({
  className = "",
  onSelect,
}: {
  className?: string;
  onSelect?: () => void;
}) {
  const { language, setLanguage, t } = useLanguage();
  const languages = Object.entries(languageLabels) as [Language, (typeof languageLabels)[Language]][];

  return (
    <div className={`flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 backdrop-blur-md ${className}`}>
      <span className="sr-only">{t.nav.language}</span>
      {languages.map(([value, label]) => {
        const isActive = value === language;

        return (
          <button
            key={value}
            type="button"
            onClick={() => {
              setLanguage(value);
              onSelect?.();
            }}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.18em] transition-all ${
              isActive
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(217,119,6,0.25)]"
                : "text-foreground/70 hover:bg-white/10 hover:text-foreground"
            }`}
            aria-pressed={isActive}
            aria-label={label.name}
            title={label.name}
          >
            {label.short}
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = t.nav.links;
  const resolveNavHref = (href: string) => {
    if (href === "#") {
      return location === "/" ? href : "/";
    }

    if (!href.startsWith("#")) {
      return href;
    }

    return location === "/" ? href : `/${href}`;
  };

  const handleSectionClick = (href: string, onSelect?: () => void) => {
    if (location !== "/") {
      return () => onSelect?.();
    }

    if (href === "#") {
      return (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onSelect?.();
        window.history.replaceState(null, "", "#");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
    }

    if (!href.startsWith("#")) {
      return () => onSelect?.();
    }

    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onSelect?.();
      scrollToHash(href);
    };
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
              <span className="font-display text-3xl font-bold tracking-widest text-foreground group-hover:text-primary transition-colors">
                GONGU
              </span>
              <span className="text-[10px] tracking-[0.3em] text-primary uppercase font-sans">
                {t.nav.brandTagline}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {(link.href === "#" || link.href.startsWith("#")) && location === "/" ? (
                      <a
                        href={link.href}
                        onClick={handleSectionClick(link.href)}
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={resolveNavHref(link.href)}
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <LanguageSwitcher />
              <Button asChild>
                <Link href="/book">{t.nav.reserve}</Link>
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex flex-col items-start">
                <span className="font-display text-2xl font-bold tracking-widest text-primary">
                  GONGU
                </span>
                <span className="text-[10px] tracking-[0.28em] text-foreground/50 uppercase">
                  {t.nav.brandTagline}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-white/5 rounded-full text-foreground hover:text-primary hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-8">
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">{t.nav.language}</span>
                <LanguageSwitcher onSelect={() => setMobileMenuOpen(false)} />
              </div>

              <ul className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {(link.href === "#" || link.href.startsWith("#")) && location === "/" ? (
                      <a
                        href={link.href}
                        onClick={handleSectionClick(link.href, () => setMobileMenuOpen(false))}
                        className="text-2xl font-display text-foreground/90 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={resolveNavHref(link.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-display text-foreground/90 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-4">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                    {t.nav.reserve}
                  </Link>
                </Button>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <a href="tel:+37167000000" className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center">
                    <Phone className="text-primary" size={24} />
                    <span className="text-sm font-medium">{t.nav.callUs}</span>
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center"
                  >
                    <MapPin className="text-primary" size={24} />
                    <span className="text-sm font-medium">{t.nav.directions}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
