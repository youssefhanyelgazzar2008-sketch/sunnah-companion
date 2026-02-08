import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Facebook", icon: "f", href: "#" },
    { name: "YouTube", icon: "▶", href: "#" },
  ];

  const footerLinks = [
    { label: "سياسة الخصوصية", href: "#" },
    { label: "الشروط والأحكام", href: "#" },
    { label: "تواصل معنا", href: "#" },
    { label: "الأسئلة الشائعة", href: "#" },
  ];

  return (
    <footer id="download" className="relative bg-primary text-primary-foreground">
      {/* Arabesque top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-gold-light to-secondary" />

      <div className="container mx-auto px-4 py-16">
        {/* Download CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            حمّل سنة برو الآن
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            ابدأ رحلتك في اتباع السنة النبوية مع تطبيق سنة برو - متوفر على iOS و Android
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg gap-3 w-full sm:w-auto"
            >
              <Apple className="w-6 h-6" />
              <div className="text-right">
                <div className="text-xs opacity-80">حمّل من</div>
                <div className="font-bold">App Store</div>
              </div>
            </Button>

            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 px-8 text-lg gap-3 w-full sm:w-auto"
            >
              <Play className="w-6 h-6" />
              <div className="text-right">
                <div className="text-xs opacity-80">احصل عليه من</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 mb-12" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="text-center md:text-right">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">س</span>
              </div>
              <span className="text-2xl font-bold">سنة برو</span>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed">
              رفيقك المسلم اليومي - تطبيق شامل لكل ما تحتاجه في حياتك الإسلامية
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <nav className="flex flex-wrap items-center justify-center gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4">تابعنا</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} سنة برو. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
