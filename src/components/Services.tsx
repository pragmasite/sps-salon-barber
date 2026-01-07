import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Scissors, Waves, Droplet, Palette } from "lucide-react";

const iconMap = {
  0: Scissors,
  1: Waves,
  2: Droplet,
  3: Palette,
};

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-primary"
          >
            {t.services.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-5xl mt-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-foreground/70 max-w-2xl mx-auto"
          >
            {t.services.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.services.items.map((service, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-medium"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
