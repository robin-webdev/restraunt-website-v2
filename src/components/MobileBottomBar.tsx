import { Phone, UtensilsCrossed, MapPin, CalendarCheck } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";

const directionsUrl = "https://maps.app.goo.gl/2Kd7H5az1swWuoZw8";

export function MobileBottomBar() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const menuHref = location === "/" ? "#menu" : "/#menu";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/10 pb-safe">
      <div className="flex justify-around items-center p-3">
        <a href="tel:+37167000000" className="flex flex-col items-center gap-1 text-foreground/70 hover:text-primary transition-colors">
          <Phone size={20} />
          <span className="text-[10px] font-medium">{t.mobileBar.call}</span>
        </a>
        <a href={menuHref} className="flex flex-col items-center gap-1 text-foreground/70 hover:text-primary transition-colors">
          <UtensilsCrossed size={20} />
          <span className="text-[10px] font-medium">{t.mobileBar.menu}</span>
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
        >
          <MapPin size={20} />
          <span className="text-[10px] font-medium">{t.mobileBar.map}</span>
        </a>
        <Link href="/book" className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors">
          <CalendarCheck size={20} />
          <span className="text-[10px] font-bold">{t.mobileBar.reserve}</span>
        </Link>
      </div>
    </div>
  );
}
