import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import videoSrc from "../assets/BANNER-SITE-video-2.mp4";

const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["60px", "0px"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 px-4 bg-[#fafafa] overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center mb-12"
        >
          <div className="inline-flex items-center gap-4">
            <span className="h-px w-8 bg-[#322783]/20" />
            <p className="text-[#322783]/40 text-[10px] font-black uppercase tracking-[0.4em] italic">
              Processo Industrial
            </p>
            <span className="h-px w-8 bg-[#322783]/20" />
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter">
            Eficiência que você pode{" "}
            <span className="italic -clip-text">ver</span>
          </h3>
        </motion.div>
        <motion.div
          style={{
            scale,
            opacity,
            borderRadius,
          }}
          className="relative w-full aspect-video md:aspect-21/9 overflow-hidden shadow-2xl border border-black/5"
        >
          {/* Subtle Overlay to integrate with the light background */}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Floating Detail Elements */}
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-full"
            >
              <p className="text-white font-black uppercase tracking-[0.3em] text-[10px] md:text-sm">
                Tecnologia em Movimento
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Caption */}
      </div>
    </section>
  );
};

export default VideoSection;
