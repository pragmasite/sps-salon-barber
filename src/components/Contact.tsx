import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 22 734 67 34",
      href: "tel:+41227346734",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "spssalonbarber@gmail.com",
      href: "mailto:spssalonbarber@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rue du Grand-Pré 27, 1202 Genève, CH",
      href: "https://maps.google.com/?q=46.213806,6.135795",
    },
  ];

  return (
    <section
      id="contact"
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
            {t.contact.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-5xl mt-4"
          >
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-foreground/70 max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div variants={itemVariants} className="pt-6">
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41227346734" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  {t.contact.cta}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-96 rounded-2xl overflow-hidden border border-border shadow-soft"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.1848447863366!2d6.135795!3d46.213806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1f7b8f7b7b7b%3A0x4b8f8f7b8f7b8f7b!2sRue%20du%20Grand-Pr%C3%A9%2027%2C%201202%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SPS Salon Barber Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
