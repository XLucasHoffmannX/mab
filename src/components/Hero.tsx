import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import layout1 from "../assets/layout1.jpeg";
import layout2 from "../assets/layout2.jpeg";
import layout3 from "../assets/layout3.jpeg";

const images = [layout1.src, layout2.src, layout3.src];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    }),
  };

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center px-4 md:px-12 lg:px-24 pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-[#322783]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#a855f7]/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-10 max-w-2xl"
          initial="hidden"
          animate="visible"
        >
          {/* Social Proof Badge */}
          <motion.div custom={0} variants={textVariants}>
            <div className="group w-fit relative">
              <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
              <Badge
                variant="outline"
                className="relative z-10 text-white/90 border-white/10 px-5 py-2 rounded-full backdrop-blur-xl bg-white/5 gap-3 uppercase tracking-[0.2em] text-[10px] font-black"
              >
                <span className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-5 h-5 rounded-full border border-[#050505] bg-linear-to-tr from-[#322783] to-[#a855f7] bg-size-[200%_200%]"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%"],
                        y: [0, -2, 0],
                      }}
                      transition={{
                        backgroundPosition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        y: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                      }}
                    />
                  ))}
                </span>
                Escolhido por +1000 empresas
              </Badge>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-white text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
          >
            A Solução com{" "}
            <span className="relative inline-block overflow-hidden rounded-2xl px-2">
              <motion.span
                className="relative z-10 inline-block text-transparent bg-clip-text
                bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7]
                bg-size-[200%_auto]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                tecnologia
              </motion.span>
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            variants={textVariants}
            className="text-white/60 text-xl font-medium leading-relaxed max-w-xl italic"
          >
            Líder em <span className="text-white">automação têxtil</span>.
            Elevando a produtividade da sua indústria com soluções inovadoras e
            suporte especializado.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={textVariants}
            className="flex flex-wrap gap-6 pt-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-2xl px-10 h-16 text-lg font-black group cursor-pointer active:scale-95 transition-all shadow-2xl"
              asChild
            >
              <a
                href="https://wa.me/5543996809107"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em contato
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-2xl px-10 h-16 text-lg font-bold backdrop-blur-xl"
              asChild
            >
              <a href="/catalogo">Ver Catálogo</a>
            </Button>
          </motion.div>

          {/* Footer Badges */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-10 border-t border-white/5 mt-6"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#322783]/10 flex items-center justify-center border border-[#322783]/20 group-hover:bg-[#322783]/20 transition-colors">
                <Zap className="w-6 h-6 text-[#a855f7] fill-[#a855f7]/20" />
              </div>
              <div className="flex flex-col">
                <p className="text-white font-black text-sm uppercase tracking-wider">
                  Diferencial competitivo
                </p>
                <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest leading-tight mt-1">
                  Para tudo ficar mais fácil e produtivo
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ec4899]/10 flex items-center justify-center border border-[#ec4899]/20 group-hover:bg-[#ec4899]/20 transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#ec4899] fill-[#ec4899]/20" />
              </div>
              <div className="flex flex-col">
                <p className="text-white font-black text-sm uppercase tracking-wider">
                  Inovação
                </p>
                <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest leading-tight mt-1">
                  maior produtividade no setor têxtil
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Image Slider */}
        <motion.div
          className="relative w-full aspect-4/3 lg:aspect-square flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg aspect-3/4 lg:aspect-3/5 rounded-4xl overflow-hidden shadow-2xl shadow-purple-900/40 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out md:m-14 lg:p-24">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Dashboard Layout"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
