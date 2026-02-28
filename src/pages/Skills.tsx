import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const skills = [
  { name: "HTML5", level: 90, label: "Napredno" },
  { name: "CSS3", level: 85, label: "Napredno" },
  { name: "JavaScript", level: 40, label: "Osnovno" },
  { name: "Webflow", level: 65, label: "Srednje" },
  { name: "Responsive Design", level: 70, label: "Srednje" },
  { name: "Figma", level: 45, label: "Osnovno" },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), index * 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.label}</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-foreground transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Veštine</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Moje Veštine</h2>
        </div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
