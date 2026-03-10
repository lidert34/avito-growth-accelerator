import { motion } from "framer-motion";
import { Search, Store, Megaphone, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Анализ и стратегия",
    desc: "Анализируем конкурентов, целевую аудиторию. Разрабатываем стратегию продвижения.",
  },
  {
    icon: Store,
    num: "02",
    title: "Настройка магазина",
    desc: "Регистрируем аккаунт, настраиваем и оформляем магазин на Авито.",
  },
  {
    icon: Megaphone,
    num: "03",
    title: "Запуск рекламы",
    desc: "Создаём продающие объявления, настраиваем автозагрузку и платное продвижение.",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Ведение и контроль",
    desc: "Обновляем данные, еженедельная отчётность, аналитика и оптимизация.",
  },
  {
    icon: Rocket,
    num: "05",
    title: "Масштабирование",
    desc: "Увеличиваем ассортимент, усиливаем эффективные инструменты продаж.",
  },
];

const StepsSection = () => {
  return (
    <section id="steps" className="py-20 md:py-28 bg-card/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-800 text-3xl md:text-4xl text-foreground text-center"
        >
          Создадим поток заказов за <span className="text-gradient">3–7 дней</span>
        </motion.h2>

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`md:flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} mb-8`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-card inline-block max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
                        <s.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-bold text-primary">{s.num}</span>
                    </div>
                    <h3 className="font-display font-700 text-lg text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-hero-gradient ring-4 ring-background" />
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
