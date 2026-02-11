import React from "react";
import { motion } from "framer-motion";
import { Scissors, Zap, Shirt, Headphones, CheckCircle2 } from "lucide-react";

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="bg-white py-24 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center h-full"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 relative z-10">
              Soluções com diferencial{" "}
              <span className="relative inline-block">
                competitivo
                <svg
                  className="absolute left-0 -bottom-3 w-full h-6 pointer-events-none"
                  viewBox="0 0 300 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  {/* glow */}
                  <motion.path
                    d="M10 20 C 60 24, 120 24, 190 22 S 270 20, 290 22"
                    stroke="#86efac"
                    strokeWidth="10"
                    strokeLinecap="round"
                    opacity="0.35"
                    style={{ filter: "blur(6px)" }}
                    pathLength={1}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{
                      duration: 7,
                      times: [0, 0.01, 0.6, 1],
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* linha principal */}
                  <motion.path
                    d="M10 20 C 60 24, 120 24, 190 22 S 270 20, 290 22"
                    stroke="#84cc16"
                    strokeWidth="7"
                    strokeLinecap="round"
                    pathLength={1}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{
                      duration: 12,
                      times: [0, 0.08, 0.6, 1],
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* rabisco final */}
                  <motion.path
                    d="M18 24 C 90 26, 170 26, 250 24"
                    stroke="#84cc16"
                    strokeWidth="5"
                    opacity="0.9"
                    pathLength={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 12,
                      times: [0, 0.12, 0.6, 1],
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </span>
              .
            </h2>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-6 text-lg text-gray-800 font-light leading-relaxed">
              <p>
                A indústria da moda evolui constantemente, por isso, é preciso
                inovar e estar preparado para essas mudanças.
              </p>
              <p>
                A tecnologia tem sido uma grande aliada e essencial para as
                indústrias do setor têxtil, pois permite produzir peças
                sofisticadas, com alto padrão de qualidade e baixo percentual de
                desperdício.
              </p>
              <p>
                Além disso, o aumento de produtividade e redução de custos é
                significativo, pois afetam diretamente no aumento da
                lucratividade e tornam as empresas mais competitivas.
              </p>
              <p>
                A MAB Fortuna conta com diversas soluções que vão desde
                bordadeiras, laser, passadeiras, suporte técnico, treinamentos,
                além da experiência de mais de 20 anos.
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
              <Badge icon={Scissors} label="Bordadeiras" href="/catalogo" />
              <Badge icon={Zap} label="Laser" href="/catalogo" />
              <Badge icon={Shirt} label="Passadeiras" href="/catalogo" />
              <Badge
                icon={Headphones}
                label="Suporte Técnico"
                href="/suporte"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Badges
const Badge = ({
  icon: Icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-purple-100 hover:bg-purple-50/30 transition-colors group h-full">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-purple-200 group-hover:shadow-md transition-all">
        <Icon className="w-5 h-5 text-[#322783]" strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block cursor-pointer">
        {content}
      </a>
    );
  }

  return content;
};

export default SolutionsSection;
