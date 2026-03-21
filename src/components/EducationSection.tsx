import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Em andamento",
    period: "2024 – Presente",
    description: "Curso superior tecnológico focado em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos.",
  },
  {
    icon: Award,
    title: "Desenvolvimento Full Stack",
    institution: "Curso Complementar",
    period: "2024",
    description: "Formação em tecnologias front-end e back-end, incluindo HTML, CSS, JavaScript e frameworks modernos.",
  },
  {
    icon: Award,
    title: "Cursos Online",
    institution: "Plataformas diversas",
    period: "Contínuo",
    description: "Lógica de programação, Git & GitHub, introdução a bancos de dados e boas práticas de desenvolvimento.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-gradient">Formação</span> Acadêmica
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 hover:glow-border transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ed.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{ed.title}</h3>
                <p className="text-sm text-primary font-mono">
                  {ed.institution} • {ed.period}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {ed.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
