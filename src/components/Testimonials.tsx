import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t.home.testimonials;

  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-background to-card px-4 py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl">{testimonials.title}</h2>
          <div className="flex items-center justify-center gap-2 text-xl font-bold">
            <span className="text-3xl text-primary">4.9</span>
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary" />
              ))}
            </div>
          </div>
          <p className="mt-2 text-sm text-foreground/60">{testimonials.basedOn}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.reviews.map((review, idx) => (
            <motion.div
              key={`${review.name}-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl p-8 glass-card"
            >
              <div className="mb-4 flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="mb-6 italic leading-relaxed text-foreground/80">"{review.text}"</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-sm font-semibold">{review.name}</h5>
                  <span className="text-xs text-foreground/50">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
