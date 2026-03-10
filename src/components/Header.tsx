import { useState } from "react";
import { Menu, X, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "О нас" },
  { href: "#steps", label: "Этапы работ" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#cases", label: "Кейсы" },
  { href: "#contact", label: "Заявка" },
  { href: "#faq", label: "Вопросы" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display font-800 text-xl tracking-tight text-foreground">
          АВИТОЛОГ<span className="text-gradient">PRO</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:89876169094" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Phone className="w-4 h-4" />
            8 987 616 90 94
          </a>
          <a
            href="https://t.me/Reklamist2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-hero-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            Написать
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
                  {l.label}
                </a>
              ))}
              <a href="tel:89876169094" className="flex items-center gap-2 text-sm font-semibold text-foreground py-2">
                <Phone className="w-4 h-4" />
                8 987 616 90 94
              </a>
              <a
                href="https://t.me/Reklamist2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-hero-gradient text-primary-foreground text-sm font-semibold"
              >
                <Send className="w-4 h-4" />
                Написать в Telegram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
