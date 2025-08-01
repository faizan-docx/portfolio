import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
             
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">Faizan Ahmad</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white mb-8"
            >
              <TypeAnimation
                sequence={[
                  'I\'m a Coder',
                  2000,
                  'I\'m a Developer',
                  2000,
                  'I\'m a Problem Solver',
                  2000,
                  'I\'m a Singer/Writer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about creating innovative web solutions and turning ideas into reality through code. 
              Specialized in modern web technologies and user-centric design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#resume')}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Download My Resume</span>
                <FiDownload className="text-lg" />
              </motion.button>
              
              
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
                             <motion.a
                 whileHover={{ scale: 1.1, y: -2 }}
                 whileTap={{ scale: 0.9 }}
                 href="https://github.com/faizan-docx"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
               >
                 <FiGithub className="text-2xl" />
               </motion.a>
               
               <motion.a
                 whileHover={{ scale: 1.1, y: -2 }}
                 whileTap={{ scale: 0.9 }}
                 href="https://linkedin.com/in/faizanahmad"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
               >
                 <FiLinkedin className="text-2xl" />
               </motion.a>
               
               <motion.a
                 whileHover={{ scale: 1.1, y: -2 }}
                 whileTap={{ scale: 0.9 }}
                 href="mailto:faizanahmad2020.fa@gmail.com"
                 className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
               >
                 <FiMail className="text-2xl" />
               </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Spline Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-6v2JcCiuAwnOTFd3jVAcLz1u/"
                title="AI Assistant Robot"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 