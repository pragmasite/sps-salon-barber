import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-xl font-bold text-primary">SPS</span>
                <span className="text-xs tracking-widest text-muted-foreground font-medium">
                  {t.footer.tagline}
                </span>
              </div>
            </Link>
            <p className="text-sm text-foreground/70">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#a-propos"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#horaires"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+41227346734" className="hover:text-primary transition-colors">
                  +41 22 734 67 34
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:spssalonbarber@gmail.com" className="hover:text-primary transition-colors">
                  spssalonbarber@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground/70">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=46.213806,6.135795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Rue du Grand-Pré 27<br />
                  1202 Genève, CH
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>
            &copy; {currentYear} SPS Salon Barber. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
