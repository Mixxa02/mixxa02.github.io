import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Dribbble, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center">Kontakt</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Hajde da razgovaramo</h2>
          <p className="text-muted-foreground text-center mb-12">
            Ako želiš da sarađujemo ili imaš pitanje, slobodno pošalji poruku.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Input
                placeholder="Tvoje ime"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="bg-card border-border focus:border-foreground/30 rounded-lg h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Tvoj email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="bg-card border-border focus:border-foreground/30 rounded-lg h-12"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tvoja poruka"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="bg-card border-border focus:border-foreground/30 rounded-lg resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full text-base font-medium">
              Pošalji poruku
            </Button>
          </form>

          <div className="mt-10 text-center">
            <a
              href="mailto:mihajlo.paunovici4@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              mihajlo.paunovici4@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Dribbble, href: "#", label: "Dribbble" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
