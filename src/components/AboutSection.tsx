import { motion } from "framer-motion";
import { CheckCircle2, Users, Rocket, Globe, Target } from "lucide-react";
import yahweImg from "../assets/yahwe.png";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="quem-somos"
      className="relative w-full py-24 px-4 md:px-12 lg:px-24 overflow-hidden bg-white text-gray-900"
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
        >
          {/* Main Content: History & Intro */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                Quem Somos
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                História de <span className="text-[#322783]">Inovação</span>
              </h3>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-600 text-lg leading-relaxed"
            >
              <p>
                A <strong className="text-gray-900">MAB Fortuna</strong>, com
                mais de duas décadas de atuação e experiência no mercado, é hoje
                uma empresa consolidada e sintonizada com as necessidades e
                oportunidades do mercado da moda. Oferecendo soluções
                tecnológicas que promovem a inovação e maior produtividade nos
                processos industriais do setor têxtil.
              </p>
              <p>
                Estruturada com uma equipe de profissionais especializados e
                qualificados para a excelência no atendimento e suporte técnico
                e que propõem soluções adequadas ao perfil de cada cliente.
              </p>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative blob behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-50 rounded-full blur-3xl opacity-60 scale-90" />

            <img
              src={yahweImg.src}
              alt="MAB Fortuna Technology"
              className="relative w-full max-w-md h-auto object-contain drop-shadow-xl z-10"
            />
          </motion.div>
        </motion.div>

        {/* Horizontal Cards for Mission, Vision, Business, Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Missão */}
          <Card
            icon={Rocket}
            title="Missão"
            content="Fornecer soluções tecnológicas de ponta que promovam inovação aos nossos clientes otimizando a inovação em produtos de moda."
            delay={0}
            href="/contato"
          />

          {/* Visão */}
          <Card
            icon={Target}
            title="Visão"
            content="Gerar sustentabilidade, oferecendo produtos inovadores de qualidade e serviços de confiabilidade com constante melhorias."
            delay={0.1}
            href="/contato"
          />

          {/* Negócio */}
          <Card
            icon={Globe}
            title="Negócio"
            content="Assessoria em projetos, comercialização, instalação, treinamento e programação, com total assistência e suporte técnico no Brasil."
            delay={0.2}
            href="/contato"
          />

          {/* Equipe */}
          <Card
            icon={Users}
            title="Equipe"
            content="Profissionais especializados e qualificados para a excelência no atendimento e suporte técnico, propondo soluções adequadas."
            delay={0.3}
            href="/contato"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  content,
  delay,
  href,
}: {
  icon: any;
  title: string;
  content: string;
  delay: number;
  href?: string;
}) => {
  const innerContent = (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 group h-full">
      <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 text-[#322783] group-hover:scale-110 transition-transform">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#322783] transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </div>
  );

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
      }}
      className="h-full"
    >
      {href ? (
        <a href={href} className="block h-full cursor-pointer">
          {innerContent}
        </a>
      ) : (
        innerContent
      )}
    </motion.div>
  );
};

export default AboutSection;
