import { Sparkles, Brain, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SunnahAI = () => {
  return (
    <section id="sunnah-ai" className="py-20 md:py-32 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-islamic-green-dark to-primary" />
      
      {/* Animated particles/stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-green rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Neon bordered card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-islamic-green-dark/50 backdrop-blur-xl neon-border neon-glow">
            {/* Corner decorations */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neon-green/50 rounded-tr-lg" />
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-neon-green/50 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neon-green/50 rounded-br-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-neon-green/50 rounded-bl-lg" />

            <div className="text-center">
              {/* AI Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-green/20 to-neon-gold/20 border border-neon-green/30 mb-6">
                <Brain className="w-10 h-10 text-neon-green" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 mb-6">
                <Sparkles className="w-4 h-4 text-neon-gold" />
                <span className="text-sm font-bold text-neon-green tracking-wider">SUNNAH AI</span>
                <Sparkles className="w-4 h-4 text-neon-gold" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                مساعدك الذكي للفتاوى
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                تقنية الذكاء الاصطناعي المتقدمة تساعدك في البحث عن الفتاوى والأحكام الشرعية 
                من مصادر موثوقة ومعتمدة من كبار العلماء
              </p>

              {/* Features list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <MessageCircle className="w-5 h-5 text-neon-green" />
                  <span className="text-primary-foreground/90 text-sm">محادثة ذكية</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <Zap className="w-5 h-5 text-neon-gold" />
                  <span className="text-primary-foreground/90 text-sm">إجابات فورية</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <Sparkles className="w-5 h-5 text-neon-green" />
                  <span className="text-primary-foreground/90 text-sm">مصادر موثوقة</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-green to-neon-gold text-primary font-bold h-14 px-10 text-lg hover:opacity-90 transition-opacity"
              >
                جرّب Sunnah AI الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunnahAI;
