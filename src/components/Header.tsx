import Image from "next/image";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

interface HeaderProps {
  isDarkMode: boolean;
}

const Header = ({ isDarkMode }: HeaderProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 w-full h-full">
        {isDarkMode ? (
          <Image
            src={assets.i_drive_dark}
            alt="Dark mode background"
            fill
            className="object-cover"
            unoptimized
            key="dark-bg"
          />
        ) : (
          <Image
            src={assets.i_drive_light}
            alt="Light mode background"
            fill
            className="object-cover"
            unoptimized
            key="light-bg"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md w-full h-full flex items-center justify-center">
        <div className="w-11/12 max-w-3xl text-white text-center flex flex-col items-center justify-center gap-4 p-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <Image
              src={assets.profile_img}
              alt=""
              className="rounded-full w-32"
            />
          </motion.div>

          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
          >
            Hi! I'm Danielsven 🔥
          </motion.h3>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
          >
            Freelancer based in Vietnam.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl mx-auto font-ovo"
          >
            I am a freelancer from Vietnam with various years of various
            experiences in multiple fields such as Web development, Game
            development, Graphic design and Digital art.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-black/80 text-white flex items-center gap-2 hover:bg-black transition-colors"
            >
              contact me{" "}
              <Image
                src={
                  isDarkMode
                    ? assets.right_arrow_white
                    : assets.right_arrow_bold_dark
                }
                alt=""
                className="w-4"
              />
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href="/sample-resume.pdf"
              download
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white/90 hover:bg-white transition-colors text-black dark:text-black"
            >
              my resume{" "}
              <Image src={assets.download_icon} alt="" className="w-4" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none">
        {/* Additional blur effect */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>
    </div>
  );
};

export default Header;
