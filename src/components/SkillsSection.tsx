import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { name: "HTML5", level: 75 },
  { name: "CSS3", level: 65 },
  { name: "JavaScript", level: 55 },
  { name: "Lógica de Programação", level: 70 },
  { name: "Git & GitHub", level: 60 },
  { name: "React (aprendendo)", level: 30 },
];

const softSkills = [
  "Organização",
  "Proatividade",
  "Comunicação",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Adaptabilidade",
];

const SkillBar = ({
  name,
  level,
  delay,
  animate,
}: {
  name: string;
  level: number;
  delay: number;
  animate: boolean;
}) => (
  <div className="mb-5">
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground font-mono">{level}%</span>
    </div>
    <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
      <motion.div
        className="h-full rounded-full skill-bar"
        initial={{ width: 0 }}
        animate={animate ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Minhas <span className="text-gradient">Habilidades</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 font-mono text-primary">
              {"// Técnicas"}
            </h3>
            {technicalSkills.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                delay={0.3 + i * 0.1}
                animate={inView}
              />
            ))}
          </motion.div>

          {/* Soft */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 font-mono text-primary">
              {"// Interpessoais"}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-lg border border-border bg-card p-4 text-center text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
