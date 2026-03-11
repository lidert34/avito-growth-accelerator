import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, Users } from "lucide-react";
import leadsImg from "@/assets/leads-funnel.jpg";


const stats = [
  { icon: Target, value: "10+", label: "новых магазинов в месяц" },
  { icon: Zap, value: "5 000+", label: "заявок для клиентов" },
  { icon: TrendingUp, value: "500K+", label: "объявлений создано" },
  { icon: Users, value: "50 млн ₽+", label: "выручки клиентам" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground">
            Запускаем магазины с нуля до первых продаж за{" "}
            <span className="text-gradient">3–7 дней</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Чтобы достичь максимального результата, мы анализируем конкурентов, пишем продающие тексты, создаём до 100 000 объявлений и публикуем по расписанию.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mx-auto">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-4 text-2xl font-display font-800 text-foreground">{s.value}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={leadsImg}
              alt="Забираю лидов у конкурентов"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-card"
          >
            <h3 className="font-display font-700 text-xl md:text-2xl text-foreground mb-6">
              Что мы делаем для роста продаж
            </h3>
            <ul className="space-y-4">
              {[
                "Анализируем конкурентов, прорабатываем стратегию продвижения",
                "Пишем продающие тексты, оптимизируем под поисковую выдачу",
                "Создаём до 100 000 объявлений по нужным регионам",
                "Публикуем объявления по расписанию — всегда в топе выдачи",
                "Правильно применяем рекламное продвижение",
                "Рассылаем скидки покупателям из избранного",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
