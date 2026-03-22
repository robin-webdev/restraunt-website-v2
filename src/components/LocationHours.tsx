import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const directionsUrl = "https://maps.app.goo.gl/2Kd7H5az1swWuoZw8";

export function LocationHours() {
  const { t } = useLanguage();
  const location = t.home.location;

  return (
    <section className="border-t border-white/5 bg-card/50 px-4 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 text-4xl">{location.title}</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 text-xl font-bold">{location.locationTitle}</h4>
                <p className="mb-2 text-foreground/70">{location.locationDesc}</p>
                <p className="text-sm text-foreground/50">{location.locationHint}</p>
                <Button variant="link" className="mt-2 px-0" asChild>
                  <a href={directionsUrl} target="_blank" rel="noreferrer">
                    {location.directions}
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full">
                <h4 className="mb-4 text-xl font-bold">{location.hoursTitle}</h4>
                <ul className="max-w-sm space-y-2 text-foreground/70">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>{location.weekdaysLabel}</span>
                    <span className="font-medium text-foreground">{location.weekdayHours}</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>{location.weekendsLabel}</span>
                    <span className="font-medium text-foreground">{location.weekendHours}</span>
                  </li>
                </ul>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-green-500">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  {location.openNow}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative h-[400px] w-full overflow-hidden rounded-3xl lg:h-[500px] glass-card">
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm transition-all duration-500 group-hover:bg-transparent group-hover:backdrop-blur-none">
            <MapPin className="mb-4 h-12 w-12 text-primary drop-shadow-[0_0_15px_rgba(217,119,6,0.8)]" />
            <Button variant="default" className="shadow-2xl" asChild>
              <a href={directionsUrl} target="_blank" rel="noreferrer">
                {location.openMaps}
              </a>
            </Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
            alt="Map layout"
            className="h-full w-full object-cover opacity-30 grayscale sepia sepia-[.3] hue-rotate-[15deg]"
          />
        </div>
      </div>
    </section>
  );
}
