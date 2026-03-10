import { motion } from "framer-motion";
import { Users, CreditCard, Package, Link, PhoneCall, Shield, Globe, Truck } from "lucide-react";

const items = [
  { icon: Users, title: "80 млн аудитория", desc: "Огромная аудитория Авито для вашего бизнеса" },
  { icon: CreditCard, title: "Дешёвый трафик", desc: "От 0.1–2.4 ₽ за просмотр" },
  { icon: Package, title: "Дешёвые лиды", desc: "От 25 ₽ за заявку" },
  { icon: Globe, title: "Весь ассортимент", desc: "Можно разместить все товары" },
  { icon: Link, title: "CRM интеграция", desc: "Интеграция заявок с CRM-системами" },
  { icon: PhoneCall, title: "Коллтрекинг", desc: "Встроенный коллтрекинг Авито" },
  { icon: Shield, title: "Низкая конкуренция", desc: "Многие ниши ещё свободны" },
  { icon: Truck, title: "Авито-доставка", desc: "Работа по схеме маркетплейса" },
];

const AdvantagesSection = () => (
  <section id="advantages" className="py-20 md:py-28">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-800 text-3xl md:text-4xl text-foreground text-center"
      >
        Преимущества продвижения на <span className="text-gradient">Авито</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-hero-gradient transition-colors">
              <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="mt-4 font-display font-700 text-base text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
