import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function QuickInfoStrip() {
  const { t } = useLanguage();
  const icons = [Clock, MapPin, Phone];

  return (
    <section className="relative z-30 mx-auto -mt-12 mb-16 max-w-5xl px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {t.home.quickInfo.map((item, idx) => {
          const Icon = icons[idx];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 rounded-xl p-5 glass-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
