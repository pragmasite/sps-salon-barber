import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Schedule: Monday to Sunday
  const schedule = [
    { hours: "Fermé" },      // Monday - Closed
    { hours: "10:00 - 20:00" }, // Tuesday
    { hours: "10:00 - 20:00" }, // Wednesday
    { hours: "10:00 - 20:00" }, // Thursday
    { hours: "10:00 - 20:00" }, // Friday
    { hours: "09:00 - 20:00" }, // Saturday
    { hours: "Fermé" },      // Sunday - Closed
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1; // Convert JS day (0-6) to our array (0-6)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="horaires"
      ref={ref}
      className="py-24 bg-background"
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
            {t.hours.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-5xl mt-4"
          >
            {t.hours.title}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-lg rounded-2xl border border-border bg-card shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-bold">{t.hours.header}</span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === adjustedTodayIndex;
              const isClosed = item.hours === "Fermé" || item.hours === "Closed";
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <div>
                      <span className={isToday ? "font-semibold text-primary" : "font-medium"}>
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className={isClosed ? "text-muted-foreground italic" : "font-medium"}>
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
