import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open Telegram with pre-filled message
    const msg = encodeURIComponent(`Заявка с сайта!\nИмя: ${name}\nТелефон: ${phone}`);
    window.open(`https://t.me/Reklamist2026?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card/50">
      <div className="container max-w-4xl">
        <div className="bg-card rounded-3xl shadow-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left - info */}
            <div className="bg-hero-gradient p-8 md:p-10 text-primary-foreground flex flex-col justify-between">
              <div>
                <h2 className="font-display font-800 text-2xl md:text-3xl">
                  Отправьте заявку
                </h2>
                <p className="mt-3 opacity-90">
                  Наш менеджер свяжется с вами и проконсультирует по всем вопросам
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <a href="tel:89876169094" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">8 987 616 90 94</span>
                </a>
                <a
                  href="https://t.me/Reklamist2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">@Reklamist2026</span>
                </a>
              </div>
            </div>

            {/* Right - form */}
            <div className="p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-700 text-xl text-foreground">Спасибо!</h3>
                  <p className="mt-2 text-muted-foreground">Мы скоро свяжемся с вами</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl bg-hero-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
