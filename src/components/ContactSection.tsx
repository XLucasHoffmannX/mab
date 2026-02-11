import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

const ui = {
  badge:
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-white/80 text-xs uppercase tracking-widest font-medium",
  card: "rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden",
  cardHover:
    "hover:border-[#7c3aed]/35 hover:bg-white/[0.07] transition-colors duration-300",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const ContactSection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0b0b0e] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1)_0%,#0b0b0e_60%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className={`${ui.badge} mb-8 border-[#7c3aed]/30 bg-[#7c3aed]/5 relative overflow-hidden group hover:scale-105 transition-transform mx-auto`}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <MessageCircle className="w-3.5 h-3.5 text-[#a855f7]" />
            <span className="relative z-10">Fale Conosco</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6"
          >
            Pronto para{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] to-[#ec4899]">
              potencializar
            </span>{" "}
            sua produção?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/40 text-lg max-w-2xl mx-auto font-medium"
          >
            Visite nossa unidade ou entre em contato pelos nossos canais
            oficiais. Atendimento especializado para indústrias têxteis.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info Cards Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <InfoCard
              icon={MapPin}
              title="Endereço"
              lines={[
                "Rua Tamandaré, 544",
                "Sala 03 - Barra Funda",
                "Apucarana – PR",
              ]}
            />
            <InfoCard
              icon={Phone}
              title="Telefones"
              lines={["43 3423-2244", "43 99974-0457", "43 99982-0728"]}
            />
            <InfoCard
              icon={Mail}
              title="E-mail"
              lines={["comercial@mabfortuna.com.br"]}
            />
            <InfoCard
              icon={Clock}
              title="Horário"
              lines={["Seg – Sex: 08h às 18h", "Sáb: 08h às 12h"]}
            />

            {/* Simplified Review inside grid */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group shadow-xl"
            >
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl"
                >
                  <GoogleIcon />
                </motion.div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-black text-lg">
                      4.9 / 5.0
                    </span>
                  </div>
                  <p className="text-white/40 text-sm italic font-medium">
                    "Excelente atendimento e produtos de alta qualidade.
                    Recomendo a todos."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5 h-full min-h-[400px]"
          >
            <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8!2d-51.4632!3d-23.5507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0c1f3b4e9e7%3A0x8e8e8e8e8e8e8e8e!2sR.+Tamandar%C3%A9%2C+544+-+Barra+Funda%2C+Apucarana+-+PR%2C+86800-210!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
            />
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/5543999740457"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#322783] hover:bg-[#3d309e] text-white rounded-3xl px-12 h-16 text-lg font-black group cursor-pointer shadow-2xl shadow-[#322783]/20 active:scale-95 transition-all">
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon: Icon,
  title,
  lines,
}: {
  icon: any;
  title: string;
  lines: string[];
}) => (
  <motion.div
    className="rounded-3xl border border-white/5 bg-white/2 backdrop-blur-3xl p-7 hover:bg-white/5 hover:border-[#a855f7]/30 transition-all duration-500 group relative overflow-hidden h-full shadow-lg"
    whileHover={{ y: -8 }}
  >
    <div className="absolute inset-0 bg-linear-to-br from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#a855f7]/10 transition-all">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-6 h-6 text-[#a855f7]" strokeWidth={1.5} />
        </motion.div>
      </div>
      <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4 italic">
        {title}
      </h4>
      <div className="space-y-1.5">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-white/40 text-[13px] font-bold leading-relaxed group-hover:text-white/60 transition-colors"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const GoogleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default ContactSection;
