import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiTrendingUp, FiX } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Diet Management Platform',
      description: 'Designed and developed a responsive, user-centric diet consultation website enabling users to register, select a plan, and receive personalized dietary guidance. Integrated Razorpay payment gateway with tiered pricing and Firebase Realtime Database for user data management.',
      detailedDescription: 'This comprehensive platform was built with a focus on user experience and seamless functionality. Features include user authentication, subscription management, personalized dashboard, and admin panel. The integration with Razorpay allows for secure transactions while Firebase handles real-time data synchronization across devices.',
      image: '🥗',
      technologies: ['React.js', 'Firebase', 'Razorpay', 'EmailJS', 'HTML/CSS', 'Tailwind CSS'],
      github: 'https://github.com/faizan-docx/DietProject',
      live: 'https://www.thediet4u.com/',
      category: 'web',
      features: ['User Authentication', 'Payment Integration', 'Real-time Database', 'Responsive Design', 'Admin Dashboard'],
      challenges: 'Implementing secure payment processing while maintaining a smooth user flow was challenging. Solved by creating a multi-step verification process that maintains security without compromising user experience.',
    },
    {
      title: 'TechEagles Solutions (techeagles.in)',
      description: 'A professional services site providing bespoke tech solutions, product development, and consulting for startups and SMEs.',
      detailedDescription: 'Built a clean, conversion-focused web presence for a tech services brand. Highlights offerings like full‑stack development, integrations, and analytics with clear CTAs and inquiry flow.',
      image: '🦅',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      github: '',
      live: 'https://techeagles.in',
      category: 'web',
      features: ['Services Showcase', 'Lead Capture', 'Responsive Design'],
      challenges: 'Balancing strong branding with fast performance and accessibility across devices.',
    },
    {
      title: 'GuessMasters (guessmasters.in)',
      description: 'ML‑generated question papers for government exams, JEE, and NEET with dynamic practice sets.',
      detailedDescription: 'Delivers AI‑assisted, parameterized paper generation with difficulty tuning and topic coverage for exam prep. Emphasis on reliability and clear UX for students.',
      image: '🧠',
      technologies: ['React.js', 'Node.js', 'Python', 'Tailwind CSS'],
      github: '',
      live: 'https://guessmasters.in',
      category: 'web',
      features: ['AI Paper Generation', 'Syllabus Coverage', 'Difficulty Controls'],
      challenges: 'Ensuring generated sets meet syllabus coverage while avoiding repetition.',
    },
    {
      title: 'LeoFit Global Gym',
      description: 'Developed a responsive, single-page gym website to showcase services, trainers, and schedules. Used Firebase for both hosting and backend to manage dynamic content and ensure fast, scalable performance.',
      detailedDescription: 'A modern, high-performance website for a fitness center featuring animated transitions, class schedules, trainer profiles, and membership information. The site is optimized for fast loading and includes a custom content management system for easy updates.',
      image: '💪',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'JavaScript', 'Framer Motion', 'React Router'],
      github: 'https://github.com/faizan-docx/gymProject',
      live: 'https://www.leofittglobal.com',
      category: 'web',
      features: ['Animated UI', 'Class Scheduling', 'Trainer Profiles', 'Membership Info', 'CMS Integration'],
      challenges: 'Creating smooth animations without compromising performance was tricky. Implemented lazy loading and optimized assets to maintain fast load times while delivering engaging animations.',
    },
    {
      title: 'Interactive Web Resume Portfolio',
      description: 'Designed and developed a responsive, single-page interactive resume using modern UI principles and custom animations. Integrated dynamic navigation and typing effects for enhanced user engagement.',
      detailedDescription: 'A personal portfolio website that showcases skills, experience, and projects in an interactive format. Features include a typing animation effect, smooth scrolling navigation, dark/light mode toggle, and project filtering system.',
      image: '📄',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery','ReactJs'],
      github: 'https://github.com/faizan-docx/portfolio',
      live: 'https://faizanahmad.vercel.app',
      category: 'web',
      features: ['Typing Animation', 'Smooth Scrolling', 'Dark/Light Mode', 'Project Filtering', 'Responsive Design'],
      challenges: 'Implementing the typing animation with proper cursor effects required careful timing with CSS and JavaScript. Created a reusable component that could be easily customized for different text inputs.',
    },
    {
      title: 'Cloning Projects',
      description: 'Built responsive UI clones of popular apps like Netflix, Netmeds, and Amazon to strengthen frontend skills and understand real-world design patterns.',
      detailedDescription: 'A collection of UI clones that replicate the look and feel of popular applications. Each clone focuses on specific aspects of frontend development including responsive layouts, dynamic content loading, and interactive elements.',
      image: '🎬',
      technologies: ['React.js', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/faizan-docx/Amazon-Clone',
      live: 'https://amazonclone-iamfaizaannn.vercel.app',
      category: 'web',
      features: ['Responsive Layouts', 'Dynamic Content', 'UI Replication', 'Interactive Elements'],
      challenges: 'Matching the exact design details of established applications required careful attention to CSS details. Used browser developer tools to analyze the original sites and recreate their styling accurately.',
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="bg-gray-900/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden card-hover border border-purple-500/20 cursor-pointer"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => setSelectedProject(project)}
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
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="text-lg" />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl">{project.image}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <FiX className="text-xl" />
                </motion.button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                  <p className="text-gray-300 mb-6">{project.detailedDescription}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Challenges & Solutions</h4>
                  <p className="text-gray-300 mb-6">{project.challenges}</p>
                  
                  <div className="flex space-x-4 mt-6">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <FiGithub className="text-lg" />
                      <span>View Code</span>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <FiExternalLink className="text-lg" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

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
            data analysis, and innovative problem-solving approaches. Click on any project to view details.
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
            href="https://github.com/faizan-docx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FiGithub className="text-lg" />
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;