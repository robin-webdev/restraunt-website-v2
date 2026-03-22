import { motion } from "framer-motion";
import { ChefHat, Coffee, Heart, Leaf, Star } from "lucide-react";
import fallbackImage from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const featuredImages = [
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
];

const featuredBadgeIcons = [Star, Heart, Leaf, ChefHat, Star, Heart, Leaf, Coffee];

export function FeaturedDishes() {
  const { t } = useLanguage();
  const featured = t.home.featured;

  return (
    <section id="specials" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">{featured.eyebrow}</span>
        <h2 className="mt-2 mb-4 text-4xl md:text-5xl">{featured.title}</h2>
        <p className="mx-auto max-w-2xl text-foreground/70">{featured.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.dishes.map((dish, idx) => {
          const BadgeIcon = featuredBadgeIcons[idx];

          return (
            <motion.div
              key={`${dish.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl glass-card"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-transparent" />
                <img
                  src={featuredImages[idx]}
                  alt={dish.name}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                  <span className="flex items-center gap-1 rounded border border-primary/20 bg-background/80 px-2 py-1 text-xs font-semibold text-primary shadow-lg backdrop-blur-md">
                    <BadgeIcon size={12} />
                    {dish.badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{dish.name}</h3>
                  <span className="font-semibold text-primary">EUR {dish.price}</span>
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/60">{dish.desc}</p>
                <Button variant="outline" className="mt-auto h-10 w-full text-sm">
                  {featured.orderNow}
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <a href="#menu">{featured.explore}</a>
        </Button>
      </div>
    </section>
  );
}
