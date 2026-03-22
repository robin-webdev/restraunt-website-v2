import { motion } from "framer-motion";
import { ChefHat, Coffee, Flame, Heart, Leaf, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function WhyChooseUs() {
  const { t } = useLanguage();
  const reasons = t.home.reasons;
  const icons = [ChefHat, Leaf, Coffee, Flame, Heart, ShieldCheck];

  return (
    <section className="relative border-y border-white/5 bg-card py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl">{reasons.title}</h2>
          <p className="text-foreground/70">{reasons.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.items.map((reason, idx) => {
            const Icon = icons[idx];

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/20 to-primary/5 shadow-inner">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
