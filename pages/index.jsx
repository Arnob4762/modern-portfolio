import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text and desktop avatar wrapper */}
      <div className="relative w-full h-full flex items-center justify-between"> {/* Changed to flex and justify-between */}
        {/* Left-shifted content: text + mobile image */}
        <div className="w-full xl:w-1/2 h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex flex-col justify-center text-center"> {/* Added flex-col and justify-center here for inner centering */}
          <div className="text-center flex flex-col justify-center xl:pt-40 h-full container mx-auto pr-8"> {/* Added pr-8 for left shift */}
            {/* circular avatar above name (centered always) */}
            <div className="mx-auto mb-6 mt-8 w-32 h-32 sm:w-40 sm:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-2 border-accent">
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
              className="h1 text-center"
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
              className="max-w-sm xl:max-w-xl mx-auto mb-10 xl:mb-16 text-center"
            >
              Final-year Computer Science student at North South University,
              passionate about <strong>Machine Learning</strong> and{" "}
              <strong>AI</strong>. Exploring innovative solutions in{" "}
              <strong>ML, AI & Smart Systems</strong>.
            </motion.p>
          </div>
        </div>

        {/* image */}
        <div className="w-full xl:w-1/2 h-full absolute right-0 bottom-0 flex justify-end items-end"> {/* Changed to flex and justify-end */}
          {/* bg img */}
          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />

          {/* particles */}
          <ParticlesContainer />

          {/* desktop side avatar (unchanged, stays right side, slightly more right) */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[3%] hidden xl:flex" // Adjusted lg:right to [3%] or [0%] for more right shift
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

