import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, BookOpen, Target } from "lucide-react";

const items = [
  {
    icon: Code,
    title: "Paixão por Tecnologia",
    text: "Fascinado por desenvolvimento web, aplicações e soluções criativas usando código.",
  },
  {
    icon: BookOpen,
    title: "Aprendizado Contínuo",
    text: "Sempre buscando novos conhecimentos, cursos e desafios para evoluir como desenvolvedor.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    text: "Determinado a entregar projetos de qualidade e construir uma carreira sólida na área de TI.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Sobre <span className="text-gradient">Mim</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          Sou um estudante dedicado, apaixonado por tecnologia e desenvolvimento
          de software. Busco constantemente novas oportunidades para aprender e
          crescer na área.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 hover:glow-border transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
