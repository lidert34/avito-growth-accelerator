import { Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-display font-800 text-lg text-foreground">
        АВИТОЛОГ<span className="text-gradient">PRO</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:89876169094" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Phone className="w-4 h-4" />
          8 987 616 90 94
        </a>
        <a
          href="https://t.me/Reklamist2026"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          @Reklamist2026
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Все права защищены</p>
    </div>
  </footer>
);

export default Footer;
