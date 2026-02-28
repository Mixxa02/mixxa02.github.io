import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const tickerItems = ["HTML5", "CSS3", "JavaScript", "Webflow", "Figma", "Responsive Design", "UX/UI"];

export default function Index() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground/5"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-24">
        <h1
          className={`font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Hej, ja sam{" "}
          <span className="text-gradient">Mihajlo</span>
          <br />
          <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl font-medium">
            Frontend Developer & Webflow entuzijasta
          </span>
        </h1>

        <p
          className={`max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10 transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Volim da pretvaram dizajn u interaktivne i funkcionalne web stranice. Trenutno učim i rastem kao Webflow developer, spreman za kreiranje čistih, responzivnih i modernih sajtova.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button asChild size="lg" className="rounded-full px-8 text-base font-medium">
            <Link to="/portfolio">
              Pogledaj moj rad <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base font-medium border-foreground/20 hover:bg-foreground/5">
            <Link to="/kontakt">Kontaktiraj me</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border py-4 overflow-hidden">
        <div className="animate-ticker flex gap-12 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
