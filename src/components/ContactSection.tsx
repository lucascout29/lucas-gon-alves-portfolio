import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: Mail,
      label: "lucasgoncalves260409@gmail.com",
      href: "mailto:lucasgoncalves260409@gmail.com",
    },
    {
      icon: Phone,
      label: "(85) 99439-1955",
      href: "tel:+5585994391955",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lucascout2904",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/lucascout29",
    },
  ];

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Entre em <span className="text-gradient">Contato</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground mb-6">
              Estou disponível para oportunidades de estágio e colaborações.
              Não hesite em entrar em contato!
            </p>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors group"
              >
                <c.icon
                  size={20}
                  className="text-primary shrink-0"
                />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors truncate">
                  {c.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Input
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Sua mensagem"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-card border-border"
            />
            <Button type="submit" className="w-full gap-2">
              <Send size={16} />
              Enviar Mensagem
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
