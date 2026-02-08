import { useEffect, useRef, useState } from "react";
import { 
  BookOpen, 
  CheckCircle, 
  Search, 
  Clock, 
  Moon, 
  Compass,
  Star,
  Calculator,
  CircleDot,
  MapPin,
  Calendar
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "مكتبة الأحاديث الشاملة",
    description: "آلاف الأحاديث النبوية الشريفة من أمهات الكتب الستة وغيرها",
  },
  {
    icon: CheckCircle,
    title: "التحقق من صحة الحديث",
    description: "تحقق من درجة الحديث ومصدره بسهولة تامة",
  },
  {
    icon: Search,
    title: "بحث متقدم",
    description: "ابحث عن الأحاديث بالموضوع أو الكلمات المفتاحية",
  },
  {
    icon: Clock,
    title: "مواقيت الصلاة",
    description: "أوقات الصلاة الدقيقة حسب موقعك مع تنبيهات ذكية",
  },
  {
    icon: Moon,
    title: "الأذكار والأدعية",
    description: "أذكار الصباح والمساء والنوم والأدعية القرآنية والنبوية",
  },
  {
    icon: Compass,
    title: "بوصلة القبلة",
    description: "حدد اتجاه القبلة بدقة عالية أينما كنت",
  },
  {
    icon: Star,
    title: "أسماء الله الحسنى",
    description: "تعرف على أسماء الله الحسنى الـ99 مع شرح معانيها",
  },
  {
    icon: Calculator,
    title: "حاسبة الزكاة",
    description: "احسب زكاة مالك بسهولة ودقة حسب الشروط الشرعية",
  },
  {
    icon: CircleDot,
    title: "السبحة الإلكترونية",
    description: "عداد تسبيح إلكتروني مع حفظ التقدم والإحصائيات",
  },
  {
    icon: MapPin,
    title: "المساجد القريبة",
    description: "اعثر على أقرب المساجد إليك مع خرائط واتجاهات",
  },
  {
    icon: Calendar,
    title: "المناسبات الدينية",
    description: "تقويم هجري شامل مع تنبيهات للمناسبات الإسلامية",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = feature.icon;

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full card-hover bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50">
        <CardContent className="p-6 text-center">
          {/* Icon container */}
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-secondary" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-primary mb-2">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 arabesque-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            كل ما تحتاجه
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            ميزات شاملة لحياتك الإسلامية
          </h2>
          <p className="text-muted-foreground text-lg">
            أكثر من 11 ميزة مصممة لتجعل عبادتك وتعلمك أسهل وأكثر متعة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
