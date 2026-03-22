import fallbackImage from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const galleryImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop",
];

const galleryLayout = [
  "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px] sm:min-h-[360px] lg:min-h-[520px]",
  "min-h-[220px] sm:min-h-[240px] lg:min-h-[250px]",
  "min-h-[220px] sm:min-h-[240px] lg:min-h-[250px]",
  "min-h-[220px] sm:min-h-[240px] lg:min-h-[250px]",
  "min-h-[220px] sm:min-h-[240px] lg:min-h-[250px]",
];

export function GallerySection() {
  const { t } = useLanguage();
  const gallery = t.home.gallery;

  return (
    <section id="gallery" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl">{gallery.title}</h2>
            <p className="max-w-xl text-foreground/70">{gallery.description}</p>
          </div>
          <Button variant="outline" className="shrink-0">
            {gallery.follow}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-card/40 ${galleryLayout[index]}`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-background/10 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/80 backdrop-blur-sm">
                  Gongu
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
