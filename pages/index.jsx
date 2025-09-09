import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar"; // Big avatar (laptop only)
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative">
      {/* background gradient */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex flex-col justify-center xl:pt-40 h-full container mx-auto">

          {/* Text wrapper with circular photo */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
            {/* Circular photo (mobile + laptop) */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4"
            >
              <img
                src="/azmain-mobile.png"
                alt="Azmain"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 text-2xl sm:text-3xl xl:text-5xl"
            >
              Hi, I'm <br />
              <span className="text-accent">Azmain Iqtidar Arnob</span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-xs sm:max-w-sm xl:max-w-xl mt-4 xl:mt-6"
            >
              Final-year Computer Science student at North South University,
              passionate about <strong>Machine Learning</strong> and <strong>AI</strong>.
              Exploring innovative solutions in <strong>ML, AI & Smart Systems</strong>.
            </motion.p>
          </div>
        </div>
      </div>

      {/* big Avatar (laptop only) + background */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0 hidden xl:block">
        {/* big avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>

        {/* bg image */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;











