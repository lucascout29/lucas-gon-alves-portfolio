import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Portfolio Pessoal",
    description:
      "Site responsivo de currículo online desenvolvido com React e Tailwind CSS para apresentação profissional.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/lucascout29",
  },
  {
    name: "Calculadora Web",
    description:
      "Calculadora funcional com operações básicas, desenvolvida para praticar lógica de programação e manipulação do DOM.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/lucascout29",
  },
  {
    name: "Landing Page Responsiva",
    description:
      "Página de apresentação moderna com design responsivo, animações suaves e boas práticas de HTML semântico.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/lucascout29",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Meus <span className="text-gradient">Projetos</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-6 flex flex-col hover:glow-border transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
