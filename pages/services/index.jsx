import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [
  {
    title: "Machine Learning & AI",
    description:
      "I develop end-to-end machine learning projects, including model building, optimization, and deployment. Experienced with Google Colab, Hugging Face, and Python-based ML workflows."
  },
  {
    title: "Web Development",
    description:
      "I create responsive, modern web applications using React, Next.js, Tailwind CSS, and integrate APIs and AI-powered chatbots."
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Worked on smart systems like a Soil Moisture Sensor-based Smart Irrigation System using STM32 microcontrollers."
  },
  {
    title: "Academic & Research Projects",
    description:
      "Experienced in building innovative projects like VisionGuard (Retinal Disease Detection) and Regional Tourism Chatbot with document QA, budget calculator, and guide maps."
  }
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I specialize in machine learning, AI-based applications, modern
              web development, and smart embedded systems with a focus on
              creating practical, scalable, and research-driven solutions.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

