import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Подойдёт ли Авито для нашего бизнеса?",
    a: "Есть ниши с небольшим спросом, но таких крайне мало. Оставьте заявку — мы проанализируем вашу нишу и дадим рекомендации.",
  },
  {
    q: "Почему нужно работать с нами?",
    a: "Мы обладаем большим опытом работы на Авито. Мы запускаем проекты в короткий срок и достигаем максимальных результатов за меньшие деньги.",
  },
  {
    q: "Вы занимаетесь SEO-продвижением объявлений?",
    a: "Да, мы проводим конкурентный анализ, собираем семантическое ядро и добавляем ключевые запросы в объявления.",
  },
  {
    q: "Сколько стоит заявка с Авито?",
    a: "По нашему опыту цена заявки 25–500 ₽. В среднем 50–150 ₽.",
  },
  {
    q: "Мало заявок и продаж на Авито. Что делать?",
    a: "Оставьте заявку, мы проанализируем ваш магазин и объявления, проконсультируем, что можно исправить.",
  },
  {
    q: "Вы публикуете много объявлений?",
    a: "Да, мы работаем с нужным количеством объявлений и настраиваем публикацию по расписанию, чтобы объявления всегда были в топе.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-800 text-3xl md:text-4xl text-foreground text-center mb-12"
      >
        Частые <span className="text-gradient">вопросы</span>
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-card border-none px-6">
            <AccordionTrigger className="font-display font-600 text-foreground hover:no-underline text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
