import { motion } from "framer-motion";
import { Heart, Leaf, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useLanguage();
  const about = t.home.about;
  const bulletIcons = [Leaf, ShieldCheck, Heart, MapPin];

  return (
    <section id="about" className="overflow-hidden px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Restaurant interior"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="absolute -right-6 -bottom-6 max-w-[200px] rounded-2xl p-6 lg:-right-12 glass-card">
              <div className="mb-1 text-4xl font-bold text-primary">15+</div>
              <p className="text-sm font-medium text-foreground">{about.stats}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">{about.eyebrow}</span>
            <h2 className="mt-2 mb-6 text-4xl md:text-5xl">{about.title}</h2>
            <p className="mb-6 text-lg font-light leading-relaxed text-foreground/70">{about.paragraph1}</p>
            <p className="mb-8 leading-relaxed text-foreground/70">{about.paragraph2}</p>

            <div className="mb-8 grid grid-cols-2 gap-6">
              {about.bullets.map((item, idx) => {
                const Icon = bulletIcons[idx];

                return (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                );
              })}
            </div>

            <Button>{about.cta}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
