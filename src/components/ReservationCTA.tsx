import { Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function ReservationCTA() {
  const { t } = useLanguage();
  const reservation = t.home.reservation;

  return (
    <section id="reservations" className="px-4 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl glass-card">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop"
            alt="Texture background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 p-12 text-center md:p-20">
          <h2 className="mb-6 text-4xl font-bold md:text-6xl">{reservation.title}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/80">{reservation.description}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 w-full px-10 text-lg sm:w-auto" asChild>
              <Link href="/book">{reservation.reserve}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full bg-background/50 px-10 text-lg backdrop-blur-md sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" /> {reservation.call}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
