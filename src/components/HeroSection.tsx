import { motion } from "framer-motion";
import { CheckCircle, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-avitolog.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Комплексное продвижение на{" "}
              <span className="text-gradient">Авито</span> под ключ
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              С использованием новых инструментов и стратегий, работающих в 2026 году. Первые заявки уже через 3–7 дней.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-hero-gradient text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
              >
                Оставить заявку
              </a>
              <a
                href="https://t.me/Reklamist2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold text-base hover:bg-primary/5 transition-colors"
              >
                Написать в Telegram
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  От 150 до 3000 заявок<br />в месяц по цене от 25 ₽
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  Первые заявки<br />через 3–7 дней
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl bg-hero-gradient opacity-10 rotate-6" />
              <div className="absolute inset-0 rounded-3xl bg-card shadow-card flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-800 text-gradient">500K+</div>
                  <p className="mt-2 text-muted-foreground font-medium">объявлений создано</p>
                  <div className="mt-4 text-3xl font-display font-700 text-foreground">5 000+</div>
                  <p className="text-muted-foreground text-sm">заявок в месяц</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden border-y border-border py-4 bg-card/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8">
              {["Создание объявлений", "Автозагрузка", "Публикация по всей России", "SEO продвижение", "Рассылка скидок", "Ежечасная публикация"].map((t) => (
                <span key={t + i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
