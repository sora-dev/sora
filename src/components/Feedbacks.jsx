import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({
  index,
  title,
  issuer,
  issued,
  expires,
  credlyUrl,
  logo,
  description,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[400px] w-full cursor-pointer hover:bg-black-100 transition-all duration-300'
    onClick={() => window.open(credlyUrl, '_blank')}
  >
    <div className='flex flex-col items-center text-center'>
      <div className='w-20 h-20 bg-white mb-6 flex items-center justify-center p-2'>
        <img
          src={logo}
          alt={`${title} badge`}
          className='w-full h-full object-contain'
        />
      </div>
      
      <h3 className='text-white font-bold text-[20px] mb-2'>{title}</h3>
      <p className='text-secondary text-[16px] mb-4'>{issuer}</p>
      
      <div className='text-center mb-4'>
        <p className='text-white text-[14px]'>
          Issued {issued} • Expires {expires}
        </p>
      </div>
      
      <p className='text-secondary text-[14px] leading-relaxed mb-6'>
        {description}
      </p>
      
      <div className='bg-tertiary px-6 py-2 rounded-full'>
        <p className='text-white text-[12px] font-medium'>
          Show credential ↗
        </p>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Professional Credentials</p>
          <h2 className={styles.sectionHeadText}>Licenses & certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.title} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
