import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className='bg-tertiary p-5 rounded-2xl w-full sm:w-[160px] h-[180px] flex flex-col items-center justify-center group hover:bg-[#1a1a2e] transition-all duration-300 cursor-pointer'
  >
    <div className='relative w-16 h-16 mb-4'>
      <img
        src={icon}
        alt={name}
        className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl'></div>
    </div>
    <h3 className='text-white text-[14px] font-bold text-center leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300'>
      {name}
    </h3>
  </motion.div>
);

const Tech = () => {
  return (
    <div className='mt-20'>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center'>
          Technologies I Work With
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10'>
          Skills.
        </h2>
      </motion.div>

      <div className='flex flex-wrap justify-center gap-6 mt-10'>
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            index={index}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
