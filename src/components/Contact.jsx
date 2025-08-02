import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'faizanahmad2020.fa@gmail.com',
      link: 'mailto:faizanahmad2020.fa@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91-9313924875',
      link: 'tel:+919313924875',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'New Delhi, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/faizan-docx',
      color: 'hover:text-gray-300',
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/faizan-ahmad-595356201/',
      color: 'hover:text-blue-400',
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/iamfaizaannn',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] to-[#121220]"></div>
        <div 
          className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(rgba(20,255,236,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,255,236,0.1)_1px,transparent_1px)]"
          style={{ animation: 'gridScan 8s linear infinite' }}
        ></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,255,236,0.15)_0%,transparent_15%),radial-gradient(circle_at_70%_80%,rgba(255,20,236,0.15)_0%,transparent_15%),radial-gradient(circle_at_50%_50%,rgba(120,20,255,0.1)_0%,transparent_15%)]"
          style={{ animation: 'nodePulse 6s ease-in-out infinite alternate' }}
        ></div>
      </div>

      {/* Floating particles */}
      <div 
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 160px 30px, #ddd, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px',
          animation: 'sparkle 4s linear infinite'
        }}
      ></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(159,122,234,0.8)]">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life. 
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-purple-400/30 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center">
                      <info.icon className="text-xl text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-purple-300 hover:text-purple-200 transition-colors duration-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-gradient-to-r from-purple-600/90 to-purple-700/90 p-6 rounded-xl text-white backdrop-blur-sm"
            >
              <h4 className="text-lg font-bold mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Availability</h4>
              <p className="text-purple-100 mb-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"></div>
                <span className="text-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50"
            >
              <h4 className="text-lg font-bold text-white mb-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Connect With Me</h4>
              <p className="text-gray-200 mb-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                Follow me on social media to stay updated with my latest projects and insights.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-400 transition-colors duration-200 ${social.color} drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes gridScan {
          0% { background-position: 0 0, 0 0, 0 0; }
          100% { background-position: 0 0, 0 800px, 800px 0; }
        }
        @keyframes nodePulse {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        @keyframes sparkle {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-100px); }
        }
      `}</style>
    </section>
  );
};

export default Contact;