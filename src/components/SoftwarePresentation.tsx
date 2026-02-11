import React from "react";
import { motion } from "framer-motion";
import { PenTool, Maximize, Type, Settings, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SoftwarePresentation = () => {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center overflow-hidden bg-white py-24">
      {/* Dotted Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="relative mx-auto max-w-5xl h-[600px] flex flex-col items-center justify-center">
          {/* Floating Badges */}
          <FloatingBadge
            icon={<PenTool className="size-5" />}
            text="CorelDraw Graphics Suite Incluso"
            delay={0}
            className="absolute top-0 left-0 md:-left-24"
          />
          <FloatingBadge
            icon={<Maximize className="size-5" />}
            text="Controle de Vetores e Bitmaps"
            delay={1.5}
            className="absolute top-20 right-0 md:-right-24"
          />
          <FloatingBadge
            icon={<Type className="size-5" />}
            text="+200 Fontes Nativas"
            delay={0.8}
            className="absolute bottom-32 left-4 md:-left-20"
          />
          <FloatingBadge
            icon={<Settings className="size-5" />}
            text="Digitalização Profissional"
            delay={2.2}
            className="absolute bottom-10 right-4 md:-right-16"
          />
          <FloatingBadge
            icon={<Printer className="size-5" />}
            text="Suporte a Corte e Impressão"
            delay={1.2}
            className="absolute -top-12 left-1/2 -translate-x-1/2 md:-top-24"
          />

          {/* Central Content */}
          <div className="relative z-20 text-center space-y-8 max-w-3xl mx-auto backdrop-blur-sm bg-white/30 p-8 rounded-3xl border border-white/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-[#322783]/20 text-[#322783] mb-6 px-4 py-1 text-sm shadow-sm"
              >
                Lançamento 2026
              </Badge>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-gray-900 leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Software de Bordado Profissional:
              <span className="block mt-2 relative text-transparent bg-clip-text bg-linear-to-r from-[#322783] via-[#5b4dbe] to-[#322783] bg-size-[200%_auto] animate-[shimmer_3s_infinite] italic">
                A Nova Era da Digitalização
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed font-medium italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Uma solução completa para{" "}
              <span className="text-gray-900 font-black">
                bordados personalizados
              </span>
              . Tenha controle total de digitalização com maior definição de
              pontos e ferramentas de design líderes de mercado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="bg-[#322783] cursor-pointer hover:bg-[#2a216e] text-white rounded-full px-8 py-6 text-base shadow-lg shadow-[#322783]/20 transition-all hover:scale-105"
                asChild
              >
                <a href="/contato">Entrar em contato para Demonstração</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FloatingBadgeProps {
  icon: React.ReactNode;
  text: string;
  delay: number;
  className?: string;
}

const FloatingBadge = ({
  icon,
  text,
  delay,
  className,
}: FloatingBadgeProps) => {
  return (
    <a href="/contato" className={`${className} block cursor-pointer`}>
      <motion.div
        className={`flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-gray-100 h-full`}
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow:
            "0 10px 25px -5px rgba(50, 39, 131, 0.15), 0 8px 10px -6px rgba(50, 39, 131, 0.1)",
          borderColor: "rgba(50, 39, 131, 0.2)",
        }}
      >
        <div className="flex items-center justify-center size-8 rounded-full bg-[#322783]/10 text-[#322783]">
          {icon}
        </div>
        <span className="font-medium text-sm text-gray-800 whitespace-nowrap">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

export default SoftwarePresentation;
