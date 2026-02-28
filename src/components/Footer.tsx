import { Link } from "react-router-dom";
import { Github, Linkedin, Dribbble } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer ref={ref} className="border-t border-border bg-background">
      <div
        className={`container mx-auto px-6 py-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 — tagline */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-3">Mihajlo</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Junior Frontend Developer & Webflow entuzijasta. Pretvaranje dizajna u interaktivne web stranice.
            </p>
          </div>

          {/* Col 2 — quick links */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Brzi Linkovi</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Home", path: "/" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "O meni", path: "/o-meni" },
                { label: "Kontakt", path: "/kontakt" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — social */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Društvene Mreže</h5>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/mihajlo-paunovi%C4%87-4a5b412b1/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Mixxa02", label: "GitHub" },
                { icon: Dribbble, href: "#", label: "Dribbble" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 — legal */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Pravne informacije</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Politika privatnosti</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Uslovi korišćenja</a></li>
            </ul>
          </div>
        </div>

        {/* Watermark name */}
        <div className="mt-16 text-center">
          <p className="font-serif text-6xl md:text-8xl font-bold text-muted/30 select-none tracking-tighter">
            Mihajlo
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © 2026. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
