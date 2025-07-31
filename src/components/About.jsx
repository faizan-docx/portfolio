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
    { icon: FiCode, number: '50+', label: 'Projects Completed' },
    { icon: FiDatabase, number: '100+', label: 'Data Reports' },
    { icon: FiTrendingUp, number: '95%', label: 'Client Satisfaction' },
    { icon: FiAward, number: '3+', label: 'Years Experience' },
  ];

  const features = [
    {
      title: 'Web Development',
      description: 'Full-stack development with modern technologies like React, Node.js, and Python.',
      icon: '🌐',
    },
    {
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights using Python, SQL, and visualization tools.',
      icon: '📊',
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user interfaces with Figma and modern design principles.',
      icon: '🎨',
    },
    {
      title: 'Problem Solving',
      description: 'Analytical approach to complex problems with innovative solutions.',
      icon: '💡',
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
            A passionate Web Developer and Data Analyst with expertise in creating innovative solutions 
            and transforming complex data into meaningful insights.
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
              Turning Ideas Into Reality
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a dedicated professional with a strong foundation in both web development and data analysis. 
                My journey began with a curiosity about how technology can solve real-world problems, and it has 
                evolved into a passion for creating impactful digital solutions.
              </p>
              <p>
                With expertise in modern web technologies like React, Node.js, and Python, I build responsive 
                and scalable applications that deliver exceptional user experiences. My data analysis skills 
                enable me to extract valuable insights from complex datasets, helping businesses make 
                data-driven decisions.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest industry trends. 
                Every project is an opportunity to innovate and push the boundaries of what's possible.
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