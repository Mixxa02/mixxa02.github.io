import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile.jpg";
import { Code, Palette, Smartphone, Sparkles } from "lucide-react";

const skills = ["HTML5", "CSS3", "JavaScript", "Webflow", "Figma", "Responsive Design", "UX/UI osnove"];

const details = [
  { icon: Sparkles, text: "Eksperimentišem sa animacijama i mikrointerakcijama" },
  { icon: Code, text: "Pratim Webflow blog i moderne frontend trendove" },
  { icon: Palette, text: "Fokusiran na čist i vizuelno privlačan dizajn" },
  { icon: Smartphone, text: "Responzivni dizajn na prvom mestu" },
];

export default function About() {
  const { ref: bioRef, isVisible: bioVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div ref={bioRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div
            className={`transition-all duration-700 ${
              bioVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">O meni</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Ko sam ja?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Zdravo! Ja sam Mihajlo, frontend developer fokusiran na Webflow i moderne frontend tehnologije. Volim da pravim interaktivne i vizuelno privlačne web stranice koje su i funkcionalne i user-friendly. Trenutno učim HTML, CSS, JavaScript i Webflow, dok aktivno radim na projektima koji mi pomažu da rastem i da se razvijam u toj sferi.
            </p>

            {/* Mini details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:border-foreground/20"
                >
                  <d.icon className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{d.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              bioVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="aspect-square rounded-2xl border border-border bg-card flex items-center justify-center">
              <img className="rounded-xl object-cover" src={profileImage} alt="Description of the image"></img>
            </div>
          </div>
        </div>

        {/* Skills tags */}
        <div
          ref={skillsRef}
          className={`mt-20 transition-all duration-700 ${
            skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl font-bold mb-6 text-center">Tehnologije</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
