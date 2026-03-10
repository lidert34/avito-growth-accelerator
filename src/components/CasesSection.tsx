import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const cases = [
  {
    name: "Магазин косметологического оборудования",
    before: { leads: "45 заявок", cost: "366 ₽ за заявку" },
    after: { leads: "508 заявок", cost: "101 ₽ за заявку" },
    result: "Увеличили заявки в 10 раз, снизили стоимость в 3 раза",
  },
  {
    name: "Мебель маркет",
    before: { leads: "320 заявок", cost: "180 ₽ за заявку" },
    after: { leads: "2 493 заявки", cost: "42 ₽ за заявку" },
    result: "2 тыс. заявок по 42 ₽ за месяц",
  },
  {
    name: "Империя ножей",
    before: { leads: "85 заявок", cost: "340 ₽ за заявку" },
    after: { leads: "496 заявок", cost: "117 ₽ за заявку" },
    result: "Увеличили количество заявок в 5 раз",
  },
];

const CasesSection = () => (
  <section id="cases" className="py-20 md:py-28 bg-card/50">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-800 text-3xl md:text-4xl text-foreground text-center"
      >
        Кейсы наших <span className="text-gradient">клиентов</span>
      </motion.h2>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="p-6">
              <h3 className="font-display font-700 text-base text-foreground">{c.name}</h3>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-destructive/5 p-4">
                  <p className="text-xs font-semibold text-destructive uppercase tracking-wide">До</p>
                  <p className="mt-2 text-sm font-bold text-foreground">{c.before.leads}</p>
                  <p className="text-xs text-muted-foreground">{c.before.cost}</p>
                </div>
                <div className="rounded-xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">После</p>
                  <p className="mt-2 text-sm font-bold text-foreground">{c.after.leads}</p>
                  <p className="text-xs text-muted-foreground">{c.after.cost}</p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-primary/5">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm font-medium text-foreground">{c.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-hero-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
        >
          Получить такой же результат
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default CasesSection;
