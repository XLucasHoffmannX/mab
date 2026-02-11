import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Star,
  Clock,
  MessageCircle,
  User,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

/** ---- UI TOKENS ---- */
const ui = {
  page: "bg-[#0b0b0e] text-white",
  section: "relative py-24 px-4",
  container: "container mx-auto relative z-10",
  badge:
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-white/80 text-xs uppercase tracking-widest font-medium",
  card: "rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden",
  cardHover:
    "hover:border-[#7c3aed]/35 hover:bg-white/[0.07] transition-colors duration-300",
  label: "text-white/70 text-sm font-medium",
  muted: "text-white/45",
  input:
    "w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/35 " +
    "focus:outline-none focus:border-[#7c3aed]/55 focus:ring-2 focus:ring-[#7c3aed]/20 transition-all text-sm",
  textarea:
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/35 " +
    "focus:outline-none focus:border-[#7c3aed]/55 focus:ring-2 focus:ring-[#7c3aed]/20 transition-all resize-none min-h-[120px] text-sm",
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

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden dark ${ui.page}`}
    >
      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] w-full bg-[#050508] flex items-center justify-center overflow-hidden py-24 px-4 pt-32">
        {/* Background (sempre atrás) */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18)_0%,#050508_60%)]" />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08)_0%,transparent_50%)]" />

        {/* Textura sutil */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Dynamic Orbs with Shimmer */}
        <motion.div
          className="absolute top-20 left-[15%] z-0 pointer-events-none w-80 h-80 rounded-full bg-[#7c3aed]/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] z-0 pointer-events-none w-100 h-100 rounded-full bg-[#ec4899]/8 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container relative z-10 text-center max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className={`${ui.badge} mb-8 border-[#7c3aed]/30 bg-[#7c3aed]/5 relative overflow-hidden group hover:scale-105 transition-transform`}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#a855f7]" />
            </motion.div>
            <span className="relative z-10">Central de Atendimento</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-8"
          >
            Vamos conversar sobre o{" "}
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 inline-block text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7] bg-size-[200%_auto]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                futuro
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-[#a855f7] to-[#ec4899] rounded-full"
                animate={{
                  width: ["0%", "100%", "0%"],
                  left: ["0%", "0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>{" "}
            da sua{" "}
            <span className="text-white/40 italic font-medium">produção</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium"
          >
            Conectamos tecnologia de ponta com a expertise humana para
            <span className="text-white"> potencializar</span> cada etapa do seu
            negócio.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/5543999740457"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fb355] text-white rounded-full px-10 h-14 text-base font-black group cursor-pointer shadow-2xl shadow-green-500/20 active:scale-95 transition-all">
                <MessageCircle className="w-5 h-5 mr-3 fill-white" />
                WhatsApp
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-[#0b0b0e] bg-gray-600 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">
                +500 Atendimentos
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── MAIN ─── */}
      <section className={`${ui.section} bg-[#0b0b0e] pt-0`}>
        <div className={ui.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* ─── LEFT: FORM ─── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-1 bg-[#a855f7] rounded-full" />
                  <span className="text-[#a855f7] text-[10px] font-black uppercase tracking-[0.4em]">
                    Contato
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                  Mande um{" "}
                  <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-white via-white/40 to-white bg-[length:200%_auto] animate-[shimmer_3s_infinite] italic">
                    alô
                  </span>
                </h2>
                <p className="text-white/40 font-medium">
                  Sua dúvida não pode esperar. Preencha e responderemos em até{" "}
                  <span className="text-white">60 min</span>.
                </p>
              </motion.div>

              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="bg-white/[0.02] border border-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] space-y-6 relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Skeleton/Shimmer Effect Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                  <motion.div
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/2 to-transparent skew-x-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <InputField
                    icon={User}
                    label="Nome"
                    placeholder="Seu nome completo"
                    value={formState.name}
                    onChange={(v) => setFormState((s) => ({ ...s, name: v }))}
                    required
                  />
                  <InputField
                    icon={Mail}
                    label="E-mail"
                    placeholder="seu@email.com"
                    type="email"
                    value={formState.email}
                    onChange={(v) => setFormState((s) => ({ ...s, email: v }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <InputField
                    icon={Phone}
                    label="Telefone"
                    placeholder="(43) 99999-0000"
                    value={formState.phone}
                    onChange={(v) => setFormState((s) => ({ ...s, phone: v }))}
                  />
                  <InputField
                    icon={Building2}
                    label="Empresa"
                    placeholder="Nome da empresa"
                    value={formState.company}
                    onChange={(v) =>
                      setFormState((s) => ({ ...s, company: v }))
                    }
                  />
                </div>

                <div className="relative z-10">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 block">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full bg-white/[0.04] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-white/20 focus:outline-none focus:border-[#a855f7]/50 focus:ring-4 focus:ring-[#a855f7]/5 transition-all outline-none resize-none min-h-[160px] text-sm font-medium"
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({
                        ...s,
                        message: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="relative z-10 pt-4">
                  <Button
                    type="submit"
                    className="w-full rounded-2xl h-14 text-base font-black cursor-pointer group/btn
                               bg-[#322783] hover:bg-[#3d309e] text-white
                               shadow-2xl shadow-[#322783]/20 active:scale-95 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                    {submitted ? (
                      <motion.span
                        className="flex items-center gap-3 relative z-10"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        Mensagem enviada com sucesso!
                      </motion.span>
                    ) : (
                      <span className="flex items-center gap-3 relative z-10">
                        Enviar Proposta Digital
                        <Send className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </div>
              </motion.form>
            </motion.div>

            {/* ─── RIGHT ─── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col gap-10"
            >
              <motion.div
                variants={itemVariants}
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
              </motion.div>

              {/* Map with Infinite Gradient */}
              <motion.div
                variants={itemVariants}
                className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5"
              >
                <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[conic-gradient(from_0deg,#a855f7,#ec4899,#a855f7)] blur-3xl pointer-events-none"
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8!2d-51.4632!3d-23.5507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0c1f3b4e9e7%3A0x8e8e8e8e8e8e8e8e!2sR.+Tamandar%C3%A9%2C+544+-+Barra+Funda%2C+Apucarana+-+PR%2C+86800-210!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-[320px] border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização"
                />
              </motion.div>

              {/* Review with infinite floating icons */}
              <motion.div
                variants={itemVariants}
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-[#a855f7]/10 blur-3xl rounded-full group-hover:bg-[#a855f7]/20 transition-colors" />

                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex-shrink-0 w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl"
                  >
                    <GoogleIcon />
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                      <h4 className="text-white font-black text-xl tracking-tight">
                        Satisfação Garantida
                      </h4>
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                        <span className="text-yellow-400 text-sm font-black">
                          4.9 / 5.0
                        </span>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-1.5 mb-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            delay: i * 0.15,
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-white/40 text-sm italic leading-relaxed font-medium">
                      "Excelente atendimento, profissionais qualificados e
                      produtos de alta qualidade. Recomendo a todos que buscam
                      soluções em tecnologia têxtil."
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Final ─── */}
      <section className="relative bg-[#050508] py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,#050508_70%)]" />
        <motion.div
          className="container mx-auto relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-20 h-20 bg-white/5 rounded-3xl mx-auto mb-10 flex items-center justify-center border border-white/10 shadow-2xl"
          >
            <MessageCircle className="w-10 h-10 text-[#a855f7]" />
          </motion.div>
          <h3 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tighter">
            Pronto para o Próximo{" "}
            <span className="italic select-none text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] to-[#ec4899]">
              Passo?
            </span>
          </h3>
          <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-medium">
            Atendimento exclusivo para indústrias que buscam escala e inovação
            no atacado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/5543999740457"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-[#322783] hover:bg-[#3d309e] text-white rounded-[1.5rem] px-12 h-16 text-lg font-black group cursor-pointer shadow-2xl shadow-[#322783]/20 active:scale-95 transition-all">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

/* ─── Input Field ─── */
const InputField = ({
  icon: Icon,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  icon: any;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) => (
  <div className="group/input">
    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 block group-focus-within/input:text-[#a855f7] transition-colors">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-[#a855f7] transition-colors">
        <Icon strokeWidth={1.5} className="w-full h-full" />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-white/[0.04] border border-white/5 rounded-2xl pl-16 pr-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#a855f7]/50 focus:ring-4 focus:ring-[#a855f7]/5 transition-all outline-none font-medium h-14"
      />
    </div>
  </div>
);

/* ─── Info Card ─── */
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
    className="rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-7 hover:bg-white/[0.05] hover:border-[#a855f7]/30 transition-all duration-500 group relative overflow-hidden h-full shadow-lg"
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
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default ContactPage;
