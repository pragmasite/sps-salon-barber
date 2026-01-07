import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Check } from "lucide-react";

const About = () => {
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
    <section
      id="a-propos"
      ref={ref}
      className="py-24 bg-card"
    >
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
            {t.about.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-5xl mt-4"
          >
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              {t.about.p1}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              {t.about.p2}
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { value: "10+", label: t.about.stat1 },
                { value: "500+", label: t.about.stat2 },
                { value: "100%", label: t.about.stat3 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl font-serif font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
