import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative">
      {/* main content container */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:pt-40">
          
          {/* text wrapper with circular image */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left max-w-xl px-4">
            {/* circular avatar above name */}
            <div className="mb-6 mt-8 w-32 h-32 sm:w-40 sm:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-2 border-accent">
              <img
                src="/azmain-mobile.png"
                alt="Azmain Iqtidar Arnob"
                className="w-full h-full object-cover"
              />
            </div>

            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              <span className="text-[1.5rem] sm:text-[1.75rem] xl:text-[2rem] block">
                Hi, I'm
              </span>
              <span className="text-accent text-[2rem] sm:text-[2.5rem] xl:text-[3rem]">
                Azmain Iqtidar Arnob
              </span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-4 text-center xl:text-left"
            >
              Final-year Computer Science student at North South University,
              passionate about <strong>Machine Learning</strong> and{" "}
              <strong>AI</strong>. Exploring innovative solutions in{" "}
              <strong>ML, AI & Smart Systems</strong>.
            </motion.p>
          </div>

          {/* big avatar on right (desktop only) */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden xl:flex max-w-[737px] max-h-[678px] flex-shrink-0"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>

      {/* particles */}
      <ParticlesContainer />
    </div>
  );
};

export default Home;

























