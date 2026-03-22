import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const bookingCopy = {
  en: {
    title: "Book Your Table",
    description:
      "Choose your date, time, and party size directly in Tableo for the fastest reservation experience.",
    badge: "Instant Booking",
    widgetTitle: "Reserve Online With Tableo",
    widgetDescription: "Complete your booking below and receive your confirmation through the Tableo flow.",
    back: "Back to Home",
  },
  lv: {
    title: "Rezervējiet galdiņu",
    description: "Izvēlieties datumu, laiku un viesu skaitu Tableo sistēmā ātrākajai rezervācijas pieredzei.",
    badge: "Tūlītēja rezervācija",
    widgetTitle: "Rezervējiet tiešsaistē ar Tableo",
    widgetDescription: "Pabeidziet rezervāciju zemāk un saņemiet apstiprinājumu Tableo sistēmā.",
    back: "Atpakaļ uz sākumu",
  },
  ru: {
    title: "Забронируйте стол",
    description: "Выберите дату, время и количество гостей в Tableo для самого быстрого бронирования.",
    badge: "Мгновенная бронь",
    widgetTitle: "Бронируйте онлайн через Tableo",
    widgetDescription: "Завершите бронирование ниже и получите подтверждение через Tableo.",
    back: "Назад на главную",
  },
} as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Book() {
  const { language, t } = useLanguage();
  const copy = bookingCopy[language];
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-4 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[10%] h-40 w-40 rounded-full bg-primary/10 blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-44 h-56 w-56 rounded-full bg-secondary/12 blur-[110px]"
        />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/6 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {t.nav.reserve}
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl">{copy.title}</h1>
            <p className="mt-4 text-foreground/70">{copy.description}</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {copy.back}
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-[32px] border border-white/10 bg-card/60 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5"
        >
          <motion.div
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          />

          <div className="mb-5 px-2">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              {copy.badge}
            </span>
            <h2 className="mt-4 text-3xl font-bold">{copy.widgetTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">{copy.widgetDescription}</p>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-background/60 shadow-inner shadow-black/20">
            {isIframeLoading && (
              <div className="absolute inset-0 z-10 flex min-h-[720px] items-center justify-center bg-background/92 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="relative h-14 w-14">
                    <div className="absolute inset-0 rounded-full border border-primary/20" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
                    <div className="absolute inset-[10px] rounded-full bg-primary/12" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{copy.badge}</p>
                    <p className="mt-2 text-sm text-foreground/65">{copy.widgetTitle}</p>
                  </div>
                </div>
              </div>
            )}
            <iframe
              src="https://app.tableo.com/r/uUXafVy"
              width="100%"
              height="100%"
              style={{ border: "none", minHeight: 720 }}
              referrerPolicy="unsafe-url"
              title="Tableo booking form"
              onLoad={() => setIsIframeLoading(false)}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
