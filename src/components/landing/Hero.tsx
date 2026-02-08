import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with arabesque pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background arabesque-pattern" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Arabesque corner decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M200 0C200 110.457 110.457 200 0 200V150C82.843 150 150 82.843 150 0H200Z"
            fill="url(#goldGradient)"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="200" y2="200">
              <stop stopColor="hsl(43, 56%, 52%)" />
              <stop offset="1" stopColor="hsl(43, 60%, 65%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-8 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">تطبيقك الإسلامي الشامل</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-6 fade-in-up delay-100">
            سنة برو
            <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80">
              رفيقك المسلم اليومي
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
            تطبيق شامل يجمع لك مكتبة الأحاديث النبوية، مواقيت الصلاة، الأذكار اليومية، 
            بوصلة القبلة، وأكثر من ذلك بكثير - كل ما تحتاجه في تطبيق واحد
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg gap-3 w-full sm:w-auto"
            >
              <Apple className="w-6 h-6" />
              <div className="text-right">
                <div className="text-xs opacity-80">حمّل من</div>
                <div className="font-bold">App Store</div>
              </div>
            </Button>

            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg gap-3 w-full sm:w-auto"
            >
              <Play className="w-6 h-6" />
              <div className="text-right">
                <div className="text-xs opacity-80">احصل عليه من</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto fade-in-up delay-400">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">+50K</div>
              <div className="text-sm text-muted-foreground">تحميل</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">4.9</div>
              <div className="text-sm text-muted-foreground">تقييم</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">11+</div>
              <div className="text-sm text-muted-foreground">ميزة</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
