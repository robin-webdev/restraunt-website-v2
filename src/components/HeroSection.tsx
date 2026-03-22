import { motion, type Variants } from "framer-motion";
import { ChefHat, Clock, MapPin, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t.home.hero;

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.16),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(180,83,9,0.18),transparent_30%),linear-gradient(180deg,rgba(20,12,8,0.92),rgba(20,12,8,0.98))]" />
        <div className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-secondary/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-4 pt-20 sm:px-6 md:flex-row lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-2">
            <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
              {hero.badge}
            </span>
            <span className="flex items-center gap-1 text-sm text-amber-100">
              <Star className="h-4 w-4 fill-primary text-primary" />
              {hero.rating}
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            {hero.titleLine1} <br />
            <span className="text-gradient">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-8 max-w-xl text-lg font-light text-foreground/80 md:text-xl">
            {hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href="/book">{hero.reserve}</Link>
            </Button>
            <Button size="lg" variant="glass" asChild>
              <a href="#menu">{hero.viewMenu}</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden w-80 rounded-2xl p-6 shadow-2xl lg:block glass-card"
        >
          <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
          <h3 className="mb-4 border-b border-white/10 pb-2 text-xl">{hero.cardTitle}</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-foreground/80">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span>{hero.address}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground/80">
              <Clock className="h-5 w-5 shrink-0 text-primary" />
              <span>{hero.hours}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground/80">
              <ChefHat className="h-5 w-5 shrink-0 text-primary" />
              <span>{hero.services}</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
