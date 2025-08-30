"use client";
import { motion } from "framer-motion";
import { MopBucket, ScrewDriver, Wrench } from "../components/ui/svgs";

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const FloatingIcon = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute ${className} text-gray-400/40 w-10 h-10`}
  >
    {children}
  </motion.div>
);
const AboutUs = () => {
  return (
    <section className="px-4 max-w-7xl mx-auto mt-20 sm:mt-28">
      <div className="relative w-full flex flex-col justify-center items-center">
        {/* About Intro */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-white p-8 md:p-12 shadow-md">
          <FloatingIcon className="hidden md:block top-20 left-40 opacity-10">
            <MopBucket />
          </FloatingIcon>
          <FloatingIcon
            className="hidden md:block bottom-20 right-16 opacity-10"
            delay={1}
          >
            <ScrewDriver />
          </FloatingIcon>
          <FloatingIcon
            className="hidden md:block top-1/2 left-1/3 opacity-10"
            delay={2}
          >
            <Wrench />
          </FloatingIcon>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Who We Are */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="z-10 space-y-6"
            >
              <motion.h1
                variants={staggerItem}
                className="text-4xl md:text-5xl font-bold text-gray-800"
              >
                About <span className="text-[#ef8e0f]">Us</span>
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-lg text-gray-600 max-w-xl"
              >
                We are a Cooch Behar based startup bringing essential{" "}
                <span className="font-semibold">home services</span> like
                cleaning, plumbing, electrical work, repairs, car wash and more
                straight to your doorstep. Our mission is to simplify your life
                by connecting trusted professionals with families in need.
              </motion.p>
              <motion.p
                variants={staggerItem}
                className="text-lg text-gray-600 max-w-xl"
              >
                From homemaking to urgent repairs, we ensure every service is
                delivered with reliability, speed, and care.
              </motion.p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square overflow-hidden rounded-xl"
            >
              <img
                src="/ayamashi.webp"
                alt="Our Team at Work"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Founders Section */}
        {/* <div className="w-full my-12 bg-white rounded-3xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Meet Our <span className="text-[#ef8e0f]">Founders</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm text-center"
            >
              <img
                src="/founder1.jpg"
                alt="Founder 1"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Ayush Paul
              </h3>
              <p className="text-gray-600">Co-Founder</p>
              <p className="mt-2 text-sm text-gray-500">
                Passionate about technology and problem-solving, Ayush leads the
                vision of making home services accessible to everyone.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm text-center"
            >
              <img
                src="/founder2.jpg"
                alt="Founder 2"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Debaditya Roy
              </h3>
              <p className="text-gray-600">Co-Founder</p>
              <p className="mt-2 text-sm text-gray-500">
                With a focus on operations and customer satisfaction, Debaditya
                ensures our services are smooth, reliable, and efficient.
              </p>
            </motion.div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
