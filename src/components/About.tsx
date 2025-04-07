import Image from "next/image";
import { assets, infoList, toolsData } from "../../assets/assets";
import { motion } from "motion/react";

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={isDarkMode ? assets.literally_me_dark : assets.literally_me}
            alt=""
            className="mb-4"
          />
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">
            With extensive experience in Graphic Design and Digital Art, coupled
            with in-depth expertise in Web Development and Game Development, I
            have built a strong foundation in creating visually compelling and
            technically robust digital solutions. Throughout my career, I have
            collaborated with a diverse range of clients across various
            industries, consistently delivering high-quality work that meets and
            exceeds their expectations. My ability to blend creativity with
            technical proficiency allows me to produce innovative and effective
            designs tailored to each project's unique requirements.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                className="border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer 
              hover:shadow-[2px_2px_0px_2px_black] dark:hover:shadow-[2px_2px_0px_2px_white] 
              hover:bg-gradient-to-t hover:from-purple-300/50 dark:hover:from-purple-900/50 
              hover:to-white dark:hover:to-gray-800 
              hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-ovo"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
