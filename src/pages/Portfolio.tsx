import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";
import proj1Image from "@/assets/proj1.png";
import proj2Image from "@/assets/proj2.png";
import proj3Image from "@/assets/proj3.png";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Crafted Mornings",
    description: "Jednostavan, ali interaktivan coffee shop sa mikroanimacijama.",
    tech: ["Webflow"],
    image: "src={proj1Image}",
    demoUrl: "https://crafted-mornings.webflow.io",
  },
  {
    title: "Portfolio Redesign",
    description: "Redizajn postojećeg portfolia kako bi bio responzivan i čist.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "src={proj2Image}",
    demoUrl: "https://mixxa02.github.io/",
  },
  {
    title: "Mini eCommerce Page",
    description: "Fiktivna online prodavnica sa fokusom na UX i responzivni dizajn.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "src={proj3Image}",
    demoUrl: "https://mixxa02.github.io/aurel.github.io/",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-700 hover:border-foreground/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="aspect-video bg-secondary overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-foreground/30"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> View Demo
            </Button>
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Portfolio() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Moji Projekti</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
