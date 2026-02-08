import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  {
    id: 1,
    title: "الصفحة الرئيسية",
    description: "واجهة سهلة وبسيطة للوصول لجميع الميزات",
  },
  {
    id: 2,
    title: "مكتبة الأحاديث",
    description: "تصفح آلاف الأحاديث بسهولة",
  },
  {
    id: 3,
    title: "مواقيت الصلاة",
    description: "أوقات دقيقة حسب موقعك",
  },
  {
    id: 4,
    title: "الأذكار",
    description: "أذكار الصباح والمساء وأدعية متنوعة",
  },
  {
    id: 5,
    title: "Sunnah AI",
    description: "مساعدك الذكي للفتاوى",
  },
];

const Screenshots = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 arabesque-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            شاهد التطبيق
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            صور من داخل التطبيق
          </h2>
          <p className="text-muted-foreground text-lg">
            تصميم عصري وواجهة سهلة الاستخدام لتجربة مميزة
          </p>
        </div>

        {/* Screenshots Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-secondary/30 hover:border-secondary"
            onClick={prevSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-secondary/30 hover:border-secondary"
            onClick={nextSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Phone Frames */}
          <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden py-8">
            {screenshots.map((screenshot, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + screenshots.length) % screenshots.length;
              const isNext = index === (activeIndex + 1) % screenshots.length;
              const isVisible = isActive || isPrev || isNext;

              return (
                <div
                  key={screenshot.id}
                  className={`transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-100 opacity-100 z-10"
                      : isVisible
                      ? "scale-75 opacity-50 z-0"
                      : "scale-50 opacity-0 absolute"
                  }`}
                  style={{
                    transform: isActive
                      ? "scale(1) translateX(0)"
                      : isPrev
                      ? "scale(0.75) translateX(50%)"
                      : isNext
                      ? "scale(0.75) translateX(-50%)"
                      : "scale(0.5)",
                  }}
                >
                  {/* Phone Frame */}
                  <div className="relative">
                    {/* Phone outer frame */}
                    <div className="w-[200px] md:w-[280px] h-[400px] md:h-[560px] bg-gradient-to-b from-primary to-islamic-green-dark rounded-[2.5rem] p-2 shadow-2xl">
                      {/* Screen */}
                      <div className="w-full h-full bg-muted rounded-[2rem] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary rounded-b-xl" />
                        
                        {/* Placeholder content */}
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-background to-muted">
                          <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold text-secondary">س</span>
                          </div>
                          <h4 className="text-sm md:text-base font-bold text-primary mb-2">
                            {screenshot.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {screenshot.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-secondary w-8"
                    : "bg-secondary/30 hover:bg-secondary/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
