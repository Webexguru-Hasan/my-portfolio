import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* dot div here */}
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          {/* verticle-line-div-here */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* name div here */}
        <div>
          <h1
            className={`${styles.heroHeadText} text-white font-poppins font-bold`}
          >
            Hi, I'm <span className="text-[#915eff]">Hasan Wazid</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-700`}>
            I'm a Professional Frontend developer
            <br className="block sm:hidden" /> and CMS expert
          </p>
        </div>
      </div>

      {/* computer canvas here */}
      <ComputersCanvas />

      {/* scroll down mouse code here */}

      <div className="absolute w-full flex justify-center item-center bottom-5 sm:bottom-5">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
