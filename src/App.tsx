import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import Home from "@/pages/Home";
import Book from "@/pages/Book";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/Navbar";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { LanguageProvider } from "@/lib/i18n";

function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = document.querySelector(hash);
          if (target instanceof HTMLElement) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollManager />
      <Navbar />
      <main className="grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/book" component={Book} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <MobileBottomBar />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </LanguageProvider>
  );
}

export default App;
