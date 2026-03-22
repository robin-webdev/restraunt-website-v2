import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function MenuPreview() {
  const { t } = useLanguage();
  const menu = t.home.menu;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(2);
  const resolvedCategoryIndex =
    activeCategoryIndex >= 0 && activeCategoryIndex < menu.categories.length ? activeCategoryIndex : 0;
  const activeCategory = menu.categories[resolvedCategoryIndex] ?? menu.categories[0];

  const filteredMenu = menu.items.filter((item) => item.cat === activeCategory);

  return (
    <section id="menu" className="relative overflow-hidden border-y border-white/5 bg-background py-20">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl">{menu.title}</h2>
          <p className="text-foreground/70">{menu.description}</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {menu.categories.map((cat, idx) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategoryIndex(idx)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                resolvedCategoryIndex === idx
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(217,119,6,0.3)]"
                  : "bg-white/5 text-foreground hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={`${menu.title}-${activeCategory}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid min-h-[220px] gap-6"
        >
          {filteredMenu.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="group flex items-end justify-between border-b border-white/10 pb-4">
              <div className="flex-1 pr-4">
                <h4 className="text-xl font-semibold transition-colors group-hover:text-primary">{item.name}</h4>
                <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
              </div>
              <div className="shrink-0 text-lg font-bold text-primary">EUR {item.price}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="min-w-[200px]">
            {menu.download}
          </Button>
        </div>
      </div>
    </section>
  );
}
