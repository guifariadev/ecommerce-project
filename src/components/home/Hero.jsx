import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      {/* background video */}
      <motion.video
        initial={{ scale: 2 }} 
        animate={{ scale: 1 }}  
        transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./videos/hero-video.mp4" 
        autoPlay
        loop
        muted 
        preload="metadata"
      />
      {/* video overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      {/* Content */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      className="w-full text-center items-center flex flex-col z-10 text-white space-y-6">
        <h1 className="text-4xl sm:text-6xl xl:text-8xl">
          Style that moves<br /> with you.
        </h1>
        <p className="text-[0.50rem] sm:text-sm font-poppins">Discover the latest fashion trends</p>
        <a href="#collections"> 
          <button className="bg-white text-black text-sm lg:text-base w-[80px] sm:w-[150px] py-2 sm:py-3 rounded-md cursor-pointer hover:scale-90 transition-transform duration-1000"> 
          Shop Now
          </button>
        </a>
      </motion.div>
    </section>
  )
};

export default Hero;
