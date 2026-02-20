import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Youtube,
  Mail,
  ShoppingCart,
  ChevronRight,
  Globe,
  Settings,
} from "lucide-react";
import logo from "../assets/logo_mab_new.png";

const BRAND = {
  bg: "#050505",
  brand900: "#203040",
  brand800: "#304050",
  brand200: "#B0B0C0",
  brand100: "#C8CDD6",
  wa: "#25D366",
  waHover: "#1FB355",
};

const links = [
  {
    title: "Entrar em contato",
    icon: <MessageCircle className="w-6 h-6 fill-white" />,
    href: "https://wa.me/5543996809107/?text=Olá, gostaria de saber mais sobre.",
    primary: true,
    variant: "whatsapp",
  },
  {
    title: "Catálogo Online",
    brand: "Lançamento 2025",
    icon: <ShoppingCart className="w-6 h-6 text-[#304050]" />,
    href: "/catalogo",
    primary: true,
  },
  {
    title: "Solicitar Orçamento",
    brand: "Fale conosco",
    icon: <MessageCircle className="w-6 h-6 text-[#304050]" />,
    href: "/contato",
    primary: true,
  },
  {
    title: "Suporte Técnico",
    brand: "Assistência Especializada",
    icon: <Settings className="w-6 h-6 text-[#B0B0C0]" />,
    href: "/suporte",
    primary: false,
  },
  {
    title: "Visite nosso Site",
    brand: "mabfortuna.com.br",
    icon: <Globe className="w-6 h-6 text-[#B0B0C0]" />,
    href: "/",
    primary: false,
  },
];

const socials = [
  { icon: <Mail />, href: "mailto:contato@mabfortuna.com.br" },
  { icon: <Youtube />, href: "https://youtube.com/@mabfortuna" },
  { icon: <MessageCircle />, href: "https://wa.me/5543996809107" },
];

export default function LinkTree() {
  return (
    <div
      className="min-h-dvh w-full text-white flex flex-col items-center py-12 px-6 relative overflow-x-hidden selection:bg-[rgba(48,64,80,0.35)]"
      style={{ backgroundColor: BRAND.bg }}
    >
      {/* Background (puxado pro logo) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-22%] left-[-12%] w-full h-[62%] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(48, 64, 80, 0.28)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-12%] right-[-12%] w-full h-[55%] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(176, 176, 192, 0.14)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-25%] w-[70%] h-[50%] rounded-full blur-[160px]"
          style={{ backgroundColor: "rgba(32, 48, 64, 0.18)" }}
        />
      </div>

      <div className="w-full max-w-[440px] relative z-10 flex flex-col items-center flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 w-full flex flex-col items-center"
        >
          <div className="mb-8">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 rounded-[2.5rem] p-6 shadow-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(48,64,80,0.25), rgba(255,255,255,0) 55%)",
                }}
              />
              <img
                src={logo.src}
                alt="MAB Fortuna"
                className="w-[120px] h-[120px] object-contain relative z-10"
              />
            </motion.div>
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFFFFF, rgba(200,205,214,0.70), #FFFFFF)",
                backgroundSize: "200% auto",
                animation: "shimmer 3s infinite linear",
              }}
            >
              MAB Fortuna
            </span>
          </h1>

          <div className="flex items-center gap-3">
            <span
              className="h-px w-4"
              style={{ backgroundColor: "rgba(48,64,80,1)" }}
            />
            <p
              className="text-[10px] font-black uppercase tracking-[0.3em] italic"
              style={{ color: "rgba(176,176,192,0.85)" }}
            >
              Inovação Têxtil
            </p>
            <span
              className="h-px w-4"
              style={{ backgroundColor: "rgba(48,64,80,1)" }}
            />
          </div>
        </motion.div>

        {/* Links */}
        <div className="w-full space-y-4 mb-12">
          {links.map((link, index) => {
            const isWhatsapp = link.variant === "whatsapp";

            return (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-5 p-4 rounded-4xl border transition-all active:scale-[0.97] group shadow-lg overflow-hidden relative"
                style={{
                  backgroundColor: isWhatsapp
                    ? BRAND.wa
                    : link.primary
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.02)",
                  borderColor: isWhatsapp
                    ? BRAND.wa
                    : link.primary
                      ? "rgba(255,255,255,0.10)"
                      : "rgba(255,255,255,0.06)",
                  boxShadow: isWhatsapp
                    ? "0 20px 60px rgba(37, 211, 102, 0.18)"
                    : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!isWhatsapp) return;
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    BRAND.waHover;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    BRAND.waHover;
                }}
                onMouseLeave={(e) => {
                  if (!isWhatsapp) return;
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    BRAND.wa;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    BRAND.wa;
                }}
              >
                {/* Shimmer (só pros primary não-whatsapp) */}
                {link.primary && !isWhatsapp && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 skew-x-12"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(200,205,214,0.9), transparent)",
                      }}
                    />
                  </div>
                )}

                {/* Icon Box */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-6 relative z-10"
                  style={{
                    backgroundColor: isWhatsapp
                      ? "rgba(255,255,255,0.16)"
                      : "rgba(255,255,255,0.04)",
                    border: isWhatsapp
                      ? "1px solid rgba(255,255,255,0.22)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {React.cloneElement(link.icon as React.ReactElement, {
                    className: isWhatsapp
                      ? "w-6 h-6 text-white fill-white"
                      : (link.icon as any).props.className,
                  })}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 relative z-10">
                  <h3
                    className="font-black text-xs uppercase tracking-widest mb-1 transition-colors"
                    style={{
                      color: isWhatsapp ? "#FFFFFF" : "rgba(255,255,255,0.92)",
                    }}
                  >
                    {link.title}
                  </h3>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest italic"
                    style={{
                      color: isWhatsapp
                        ? "rgba(255,255,255,0.90)"
                        : "rgba(176,176,192,0.80)",
                    }}
                  >
                    {link.brand}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 relative z-10"
                  style={{
                    backgroundColor: isWhatsapp
                      ? "rgba(255,255,255,0.20)"
                      : "rgba(255,255,255,0.04)",
                  }}
                >
                  <ChevronRight
                    size={14}
                    className="transition-all group-hover:translate-x-0.5"
                    style={{
                      color: isWhatsapp
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(200,205,214,0.75)",
                    }}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Social */}
        <div className="flex items-center gap-10">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="transition-all hover:scale-125"
              style={{ color: "rgba(176,176,192,0.75)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.95)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(176,176,192,0.75)")
              }
            >
              {React.cloneElement(social.icon as React.ReactElement, {
                size: 24,
              })}
            </motion.a>
          ))}
        </div>
      </div>

      {/* shimmer keyframes inline (sem mexer no projeto) */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
}
