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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/faizanmendiratta/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'web',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business analytics with real-time data visualization. Built with Python, React, and D3.js for comprehensive data insights.',
      image: '📊',
      technologies: ['Python', 'React', 'D3.js', 'Pandas', 'Flask'],
      github: 'https://github.com/faizanmendiratta/analytics-dashboard',
      live: 'https://analytics-demo.com',
      category: 'data',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking features.',
      image: '✅',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/faizanmendiratta/task-manager',
      live: 'https://task-manager-demo.com',
      category: 'web',
    },
    {
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for customer behavior analysis using Python, scikit-learn, and advanced ML algorithms.',
      image: '🤖',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
      github: 'https://github.com/faizanmendiratta/ml-model',
      live: null,
      category: 'data',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing skills and projects with smooth animations and interactive elements.',
      image: '🎨',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com/faizanmendiratta/portfolio',
      live: 'https://faizan-portfolio.com',
      category: 'web',
    },
    {
      title: 'API Development',
      description: 'RESTful API development with comprehensive documentation, authentication, and database integration for scalable applications.',
      image: '🔌',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      github: 'https://github.com/faizanmendiratta/api-project',
      live: 'https://api-docs.com',
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