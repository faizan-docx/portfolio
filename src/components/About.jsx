import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiTrendingUp, FiAward } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FiCode, number: '4+', label: 'Projects Completed' },
    { icon: FiDatabase, number: '3+', label: 'Years Experience' },
    { icon: FiTrendingUp, number: '86.6%', label: '10th CBSE Score' },
    { icon: FiAward, number: '76.4%', label: '12th CBSE Score' },
  ];

  const features = [
    {
      title: 'Cultural Leadership',
      description: 'Member of college Cultural Committee, organizing college fests, events, and student engagement programs.',
      icon: '🎭',
    },
    {
      title: 'Creative Expression',
      description: 'Lead vocalist of college Singing Society (Octave.bpit), performed in various competitions and cultural events.',
      icon: '🎤',
    },
    {
      title: 'Communication Skills',
      description: 'Recognized for delivering engaging presentations with strong communication and public speaking abilities.',
      icon: '💬',
    },
    {
      title: 'Creative Arts',
      description: 'Passionate about poetry writing and street photography, capturing candid moments and everyday stories.',
      icon: '📸',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A passionate Computer Science student and web developer with expertise in creating innovative solutions 
            and building responsive web applications using modern technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Professional Summary
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a dedicated Computer Science student at Bhagwan Parshuram Institute of Technology, 
                currently in my 3rd year. My journey in technology began with a curiosity about how 
                digital solutions can solve real-world problems, and it has evolved into a passion for 
                creating impactful web applications.
              </p>
              <p>
                Beyond academics, I'm actively involved in college cultural activities as a member of 
                the Cultural Committee and lead vocalist of the official college Singing Society (Octave.bpit). 
                I've performed in various intra- and inter-college competitions, developing strong communication 
                and public speaking skills.
              </p>
              <p>
                I'm passionate about creative expression through poetry writing and street photography, 
                capturing candid moments and everyday stories through a creative lens. I also contributed 
                to the college dramatics society, gaining exposure to theatrical expression and team collaboration.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl text-center card-hover border border-purple-500/20"
              >
                <stat.icon className="text-3xl text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg card-hover border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 