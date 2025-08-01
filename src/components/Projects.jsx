import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiTrendingUp } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

 const projects = [
    {
      title: 'Diet Management Platform',
      description: 'Designed and developed a responsive, user-centric diet consultation website enabling users to register, select a plan, and receive personalized dietary guidance. Integrated Razorpay payment gateway with tiered pricing and Firebase Realtime Database for user data management.',
      image: '🥗',
      technologies: ['React.js', 'Firebase', 'Razorpay', 'EmailJS', 'HTML/CSS', 'Tailwind CSS'],
      github: 'https://github.com/faizan-docx/DietProject',
      live: 'https://www.thediet4u.com/',
      category: 'web',
    },
    {
      title: 'LeoFit Global Gym',
      description: 'Developed a responsive, single-page gym website to showcase services, trainers, and schedules. Used Firebase for both hosting and backend to manage dynamic content and ensure fast, scalable performance.',
      image: '💪',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'JavaScript', 'Framer Motion', 'React Router'],
      github: 'https://github.com/faizan-docx/gymProject',
      live: 'https://www.leofittglobal.com',
      category: 'web',
    },
    {
      title: 'Interactive Web Resume Portfolio',
      description: 'Designed and developed a responsive, single-page interactive resume using modern UI principles and custom animations. Integrated dynamic navigation and typing effects for enhanced user engagement.',
      image: '📄',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery','ReactJs'],
      github: 'https://github.com/faizan-docx/portfolio',
      live: 'https://faizanahmad.vercel.app',
      category: 'web',
    },
    {
      title: 'Cloning Projects',
      description: 'Built responsive UI clones of popular apps like Netflix, Netmeds, and Amazon to strengthen frontend skills and understand real-world design patterns.',
      image: '🎬',
      technologies: ['React.js', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/faizan-docx/Amazon-Clone',
      live: 'https://amazonclone-iamfaizaannn.vercel.app',
      category: 'web',
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="bg-gray-900/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden card-hover border border-purple-500/20"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{project.image}</div>
          <div className="flex space-x-2">
            {project.category === 'web' && <FiCode className="text-purple-400" />}
            {project.category === 'data' && <FiDatabase className="text-purple-400" />}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
          >
            <FiGithub className="text-lg" />
            <span className="text-sm font-medium">Code</span>
          </motion.a>
          
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
            >
              <FiExternalLink className="text-lg" />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-padding relative">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A collection of my recent projects showcasing expertise in web development, 
            data analysis, and innovative problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/faizanmendiratta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FiGithub className="text-lg" />
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 