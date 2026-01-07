import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("disclaimer-dismissed");
    if (!isDismissed) {
      setIsOpen(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("disclaimer-dismissed", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md rounded-2xl bg-background p-8 shadow-medium relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <AlertTriangle className="h-7 w-7 text-accent" />
              </div>
            </div>
            <h2 className="mb-4 text-center font-serif text-2xl">
              {t.disclaimer.title}
            </h2>
            <div className="mb-6 space-y-2 text-center text-sm text-foreground/70">
              {t.disclaimer.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <Button onClick={dismiss} className="w-full" size="lg">
              {t.disclaimer.button}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
