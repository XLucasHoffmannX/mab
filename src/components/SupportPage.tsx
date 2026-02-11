import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Clock,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Users,
  Presentation,
  TrendingUp,
  Mail,
  Phone,
  ArrowRight,
  Info,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";

/** ---- UI TOKENS (Shared with ContactPage) ---- */
const ui = {
  page: "bg-[#0b0b0e] text-white",
  section: "relative py-24 px-4",
  container: "container mx-auto relative z-10",
  badge:
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-white/80 text-xs uppercase tracking-widest font-medium",
  card: "rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden",
  cardHover:
    "hover:border-[#7c3aed]/35 hover:bg-white/[0.07] transition-colors duration-300",
  muted: "text-white/45",
  highlight: "text-[#a855f7]",
};

const supportTopics = [
  {
    id: "assistencia",
    title: "Assistência Técnica",
    icon: Wrench,
    content: (
      <div className="space-y-6">
        <p className="text-white/70 leading-relaxed text-lg">
          A <span className={ui.highlight}>MAB Fortuna</span> é especialista em
          suporte técnico, instalação e treinamento de equipamentos das marcas{" "}
          <span className="text-white font-semibold">Automatisa e Barudan</span>
          .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`${ui.card} p-6 border-white/5`}>
            <h4 className="font-bold mb-2">Equipe Qualificada</h4>
            <p className="text-sm text-white/50">
              Técnicos autorizados diretamente pelo fabricante para garantir a
              integridade do seu equipamento.
            </p>
          </div>
          <div className={`${ui.card} p-6 border-white/5`}>
            <h4 className="font-bold mb-2">Atendimento Flexível</h4>
            <p className="text-sm text-white/50">
              Oferecemos soluções tanto "in company" quanto remotas,
              adaptando-nos à urgência da sua produção.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#a855f7]" />
            Horário de Funcionamento
          </h4>
          <p className="text-white/60">
            Segunda a Sexta-feira, das 08h às 18h (exceto feriados).
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <Phone className="w-4 h-4 text-[#a855f7]" />
            <span className="text-sm">(43) 3423-2244</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <Mail className="w-4 h-4 text-[#a855f7]" />
            <span className="text-sm">comercial@mabfortuna.com.br</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "atendimentos",
    title: "Atendimentos Prestados",
    icon: Settings,
    content: (
      <div className="space-y-6">
        <p className="text-white/70">
          Nossa capilaridade técnica abrange toda a linha de produção têxtil e
          vestuário.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Assistência de Plotter e CAD",
            "Máquinas de Corte Automático",
            "Máquinas de Bordar e Enfestadeiras",
            "Equipamentos de Laser e Ponte Laser",
            "Instalação e Suporte Remoto",
            "Treinamento Operacional In Company",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
            >
              <CheckCircle2 className="w-5 h-5 text-[#a855f7] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-white/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "manutencao",
    title: "Manutenção Preventiva",
    icon: ShieldCheck,
    content: (
      <div className="space-y-8">
        <div className="p-6 rounded-3xl bg-yellow-400/10 border border-yellow-400/20">
          <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Dica do Especialista
          </h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Revisões anuais são fundamentais. A ação de poeira e umidade pode
            causar danos irreversíveis. Prevenir é sempre mais produtivo do que
            remediar.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold mb-4">Guia de Revisão Barudan</h4>
          <div className="space-y-4">
            {[
              {
                t: "01",
                d: "Entrevista técnica com o operador para identificar sintomas.",
              },
              {
                t: "02",
                d: "Desmontagem, lavagem e regulagem de tensores de linha.",
              },
              {
                t: "03",
                d: "Limpeza profunda dos cabeçotes, bielas e estica-fios.",
              },
              {
                t: "04",
                d: "Lubrificação estratégica com óleos específicos e graxa branca.",
              },
              {
                t: "05",
                d: "Verificação da passagem de linha e testes operacionais.",
              },
              {
                t: "06",
                d: "Limpeza das lançadeiras e verificação de folgas no berço.",
              },
              { t: "07", d: "Ajuste de correias e trilhos do pantógrafo." },
              { t: "08", d: "Verificação dos rolamentos e trilhos de teflon." },
              {
                t: "09",
                d: "Limpeza de placas eletrônicas e atualização de software.",
              },
              { t: "10", d: "Ajuste final de corte e tensão de bobinas." },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 items-center"
              >
                <span className="text-2xl font-black text-white/10">
                  {step.t}
                </span>
                <p className="text-sm text-white/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${ui.card} p-8 border-[#7c3aed]/20`}>
          <h4 className="text-lg font-bold mb-4">Modelos de Contratação</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="text-[#a855f7] font-semibold">Com Contrato</h5>
              <p className="text-sm text-white/60">
                Atendimento imediato e consultoria on-line contínua.
              </p>
            </div>
            <div className="space-y-3">
              <h5 className="text-white/80 font-semibold">Sem Contrato</h5>
              <p className="text-sm text-white/60">
                Atendimento mediante solicitação e programação técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "showroom",
    title: "Show-Room",
    icon: Presentation,
    content: (
      <div className="space-y-6">
        <p className="text-white/70 text-lg leading-relaxed">
          Visite nosso Show-room e veja na prática as soluções da{" "}
          <span className="font-bold">BARUDAN</span> em pleno funcionamento.
        </p>
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <p className="text-white font-medium">
              Demonstrações ao vivo de bordados computadorizados e corte
              automático.
            </p>
          </div>
          <div className="absolute inset-0 bg-[#7c3aed]/5" />
        </div>
      </div>
    ),
  },
  {
    id: "venda",
    title: "Venda Consultiva",
    icon: TrendingUp,
    content: (
      <div className="space-y-6">
        <p className="text-white/70 text-lg leading-relaxed">
          Nossos consultores analisam sua capacidade produtiva e mercado para
          sugerir o equipamento ideal que atenda sua demanda atual e futura.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            "Análise de Produção",
            "Gestão de Qualidade",
            "Expectativa de Crescimento",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#a855f7]/5 border border-[#a855f7]/10 text-center"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#a855f7]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const SupportPage = () => {
  const [activeTopic, setActiveTopic] = useState(supportTopics[0].id);

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden dark ${ui.page}`}
    >
      {/* ─── HERO ─── */}
      <section className="relative min-h-[45vh] w-full bg-[#0b0b0e] flex items-center justify-center overflow-hidden py-24 px-4">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.15)_0%,#0b0b0e_60%)]" />

        {/* Animated Background Textures */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={ui.badge + " mb-8"}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Suporte Profissional
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8"
          >
            Excelência no Atendimento <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
              Premium para todo o Brasil
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Com mais de 25 anos de experiência, nossa equipe técnica garante
            agilidade, inovação e produtividade máxima para a sua indústria.
          </motion.p>
        </div>
      </section>

      {/* ─── MAIN CONTENT: VERTICAL DIVIDE ─── */}
      <section className="relative bg-[#0b0b0e] py-12 pb-32">
        <div className={ui.container}>
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
            {/* Left Sidebar (Vertical Menu) */}
            <motion.div
              className="space-y-3 lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 px-4">
                <h2 className="text-2xl font-bold mb-2">Serviços</h2>
                <p className="text-white/40 text-sm">
                  Explore nossas soluções técnicas
                </p>
              </div>

              {supportTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 group
                    ${
                      activeTopic === topic.id
                        ? "bg-white/[0.08] border border-[#a855f7]/40 shadow-lg shadow-[#a855f7]/5"
                        : "bg-transparent border border-white/5 hover:border-white/10 hover:bg-white/[0.03]"
                    }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-colors duration-300 
                    ${activeTopic === topic.id ? "bg-[#a855f7] text-white" : "bg-white/5 text-white/40 group-hover:text-white"}`}
                  >
                    <topic.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-sm transition-colors ${activeTopic === topic.id ? "text-white" : "text-white/50"}`}
                    >
                      {topic.title}
                    </h3>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-all duration-300 
                    ${activeTopic === topic.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                  />
                </button>
              ))}

              <div className="mt-8 p-6 rounded-3xl bg-[#7c3aed]/10 border border-[#7c3aed]/20">
                <p className="text-xs font-bold text-[#a855f7] uppercase tracking-tighter mb-2">
                  Valores Agregados
                </p>
                <div className="space-y-2">
                  {[
                    "Tecnologia e Inovação",
                    "Produtividade e Lucratividade",
                    "Confiabilidade e Durabilidade",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#a855f7]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content Area */}
            <div className="min-h-[600px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTopic}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${ui.card} p-8 md:p-12 relative overflow-hidden`}
                >
                  {/* Glass Background patterns */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/5 blur-[80px] -z-10" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ec4899]/5 blur-[80px] -z-10" />

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/20 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7]">
                      {React.createElement(
                        supportTopics.find((t) => t.id === activeTopic)!.icon,
                        { className: "w-6 h-6" },
                      )}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {supportTopics.find((t) => t.id === activeTopic)?.title}
                    </h2>
                  </div>

                  {supportTopics.find((t) => t.id === activeTopic)?.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative bg-[#0b0b0e] py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-white/[0.02]"
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)" }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-8">
            Precisa de assistência técnica{" "}
            <span className="text-[#a855f7]">imediata?</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-[#a855f7] hover:bg-[#7c3aed] text-white rounded-full px-10 h-14 text-lg font-bold group shadow-xl shadow-[#a855f7]/20"
              asChild
            >
              <a href="https://wa.me/5543999740457" target="_blank">
                Falar com um técnico
                <Zap className="w-5 h-5 ml-2 fill-current" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white/10 text-white rounded-full px-10 h-14 text-lg font-bold bg-white/5 hover:bg-white/10"
              asChild
            >
              <a href="/contato">Abrir chamado por e-mail</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
