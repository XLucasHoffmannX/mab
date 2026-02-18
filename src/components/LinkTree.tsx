import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  ExternalLink,
  Youtube,
  Mail,
  ShoppingCart,
  ChevronRight,
  Globe,
  Settings,
} from "lucide-react";
import logo from "../assets/logo-mab.png";

const links = [
  {
    title: "Catálogo Online",
    brand: "Lançamento 2025",
    icon: <ShoppingCart className="w-6 h-6 text-[#322783]" />,
    href: "/catalogo",
    primary: true,
  },
  {
    title: "Solicitar Orçamento",
    brand: "Fale com conosco",
    icon: <MessageCircle className="w-6 h-6 text-[#322783]" />,
    href: "/contato",
    primary: true,
  },
  {
    title: "Suporte Técnico",
    brand: "Assistência Especializada",
    icon: <Settings className="w-6 h-6 text-gray-400" />,
    href: "/suporte",
    primary: false,
  },
  {
    title: "Visite nosso Site",
    brand: "mabfortuna.com.br",
    icon: <Globe className="w-6 h-6 text-gray-400" />,
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
    <div className="min-h-dvh w-full bg-[#050505] text-white flex flex-col items-center py-12 px-6 relative overflow-x-hidden selection:bg-[#322783]/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-full h-[60%] bg-[#322783]/15 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-full h-[50%] bg-[#a855f7]/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="w-full max-w-[440px] relative z-10 flex flex-col items-center flex-1">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 w-full flex flex-col items-center"
        >
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-110 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-6 border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-50" />
              <img
                src={logo.src}
                alt="MAB Fortuna"
                className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tight mb-2 relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-white via-white/50 to-white bg-size-[200%_auto] animate-[shimmer_3s_infinite]">
              MAB Fortuna
            </span>
          </h1>

          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#322783]" />
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] italic">
              Inovação Têxtil
            </p>
            <span className="h-px w-4 bg-[#322783]" />
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="w-full space-y-4 mb-12">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-5 p-4 rounded-4xl border transition-all active:scale-[0.97] group shadow-lg overflow-hidden relative
                ${
                  link.primary
                    ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                    : "bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/10"
                }`}
            >
              {/* Shimmer Effect for Primary Links */}
              {link.primary && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent skew-x-12"
                  />
                </div>
              )}

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-6 relative z-10">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {link.icon}
                </motion.div>
              </div>
              <div className="flex-1 min-w-0 relative z-10">
                <h3 className="font-black text-xs uppercase tracking-widest mb-1 group-hover:text-white transition-colors">
                  {link.title}
                </h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none italic">
                  {link.brand}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#322783]/20 transition-colors shrink-0 relative z-10">
                <ChevronRight
                  size={14}
                  className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Bar */}
        <div className="flex items-center gap-10">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  {React.cloneElement(social.icon as React.ReactElement, {
                    size: 24,
                  })}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 w-full px-2 lg:px-0"
        >
          <a
            href="https://wa.me/5543996809107"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="bg-white rounded-[2.5rem] p-5 w-full flex items-center justify-between shadow-2xl relative overflow-hidden group active:scale-[0.98] transition-all cursor-pointer">
              <div className="absolute inset-0 bg-[#322783]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <div className="relative z-10 text-left">
                <p className="text-black font-black text-sm uppercase tracking-tight">
                  Suporte Especializado
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[#322783] text-[9px] font-black uppercase tracking-widest italic leading-none">
                    Online agora
                  </p>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#322783] rounded-2xl flex items-center justify-center text-white relative z-10 shadow-lg group-hover:rotate-12 transition-transform">
                <MessageCircle
                  size={20}
                  fill="currentColor"
                  className="text-white"
                />
              </div>
            </button>
          </a>

          <div className="mt-12 mb-10 flex items-center justify-center gap-6 text-[8px] font-black text-gray-700 uppercase tracking-[0.4em]">
            <span className="hover:text-white cursor-pointer transition-colors italic">
              Cookies
            </span>
            <span className="w-1 h-1 bg-gray-900 rounded-full" />
            <span className="hover:text-white cursor-pointer transition-colors italic">
              Privacidade
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
