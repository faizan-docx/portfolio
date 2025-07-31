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
      url: 'https://github.com/faizanahmad',
      color: 'hover:text-gray-300',
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/faizanahmad',
      color: 'hover:text-blue-400',
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/faizanmendiratta',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
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
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 card-hover"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <info.icon className="text-xl text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
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
              className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl text-white"
            >
              <h4 className="text-lg font-bold mb-2">Availability</h4>
              <p className="text-purple-100 mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Social Links and Map */}
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
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700"
            >
              <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
              <p className="text-gray-300 mb-6">
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
                    className={`text-2xl text-gray-400 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location Map */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;