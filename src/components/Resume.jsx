import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEye, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      institution: 'Bhagwan Parshuram Institute of Technology (GGSIPU)',
      degree: 'Bachelor of Technology in Computer Science (3rd year)',
      period: 'July 2022 – Jun 2026',
      location: 'New Delhi, India',
      details: [
        '10th CBSE (2019): 86.6%',
        '12th CBSE (2021): 76.4%'
      ]
    }
  ];

  const experience = [
    {
      title: 'Intern',
      company: 'DRDO, Solid State Physics Laboratory (SSPL), Delhi',
      period: 'June 2025 – July 2025',
      achievements: [
        'Collaborated with DRDO scientists on a confidential personal research project',
        'Assisted in organizing and managing sensitive internal databases',
        'Ensured data accuracy and confidentiality'
      ],
    }
  ];

  const projects = [
    {
      title: 'Diet Management Platform (www.thediet4u.com)',
      tech: 'React.js, Firebase, Razorpay, EmailJS, HTML/CSS, Tailwind CSS',
      achievements: [
        'Designed and developed a responsive diet consultation website',
        'Integrated Razorpay payment gateway with tiered pricing',
        'Implemented Firebase Realtime Database for user data management',
        'Built a protected Admin Dashboard with custom authentication',
        'Automated email notifications using EmailJS'
      ],
    },
    {
      title: 'Leofit Global Gym (www.leofit.vercel.app)',
      tech: 'React.js, Tailwind CSS, Firebase, Framer Motion, React Router',
      achievements: [
        'Developed responsive gym website showcasing services and trainers',
        'Used Firebase for hosting and backend content management',
        'Integrated Framer Motion for smooth animations',
        'Implemented React Router for seamless navigation'
      ],
    },
    {
      title: 'Interactive Web Resume Portfolio',
      tech: 'HTML5, CSS3, Bootstrap, JavaScript, jQuery',
      achievements: [
        'Designed responsive single-page interactive resume',
        'Integrated dynamic navigation and typing effects',
        'Implemented section-based transitions with clean layout'
      ],
    },
    {
      title: 'Cloning Projects',
      tech: 'React.js, CSS, JavaScript',
      achievements: [
        'Built responsive UI clones of Netflix, Netmeds, and Amazon',
        'Strengthened frontend skills and understood real-world design patterns'
      ],
    }
  ];

  const professionalSummary = [
    'Member of college Cultural Committee, organizing events and engagement programs',
    'Lead vocalist of college Singing Society (Octave.bpit)',
    'Recognized for engaging presentations and public speaking skills',
    'Passionate about poetry writing and street photography',
    'Former member of college dramatics society'
  ];

  const skills = {
    technical: ['C/C++', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Tailwind CSS', 'MySQL', 'Firebase'],
    tools: ['Photoshop', 'Microsoft Visual Studio', 'Canva', 'Excel'],
    concepts: ['Data Structures', 'Algorithms', 'OOP', 'DBMS']
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Faizan_Ahmad_Resume.pdf';
    link.download = 'Faizan_Ahmad_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Resume</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
            A comprehensive overview of my education, projects, and professional experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-[0_0_6px_rgba(159,122,234,0.8)]">Faizan Ahmad</h3>
                <p className="text-xl text-purple-300 mb-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Computer Science Student & Web Developer</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-200">
                  <div className="flex items-center space-x-1 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    <FiMail className="text-purple-300" />
                    <span>faizanahmad2020.fa@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-1 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    <FiPhone className="text-purple-300" />
                    <span>+91 9313924875</span>
                  </div>
                  <div className="flex items-center space-x-1 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    <FiMapPin className="text-purple-300" />
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 border-b-2 border-purple-500/30 pb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  Professional Summary
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  {professionalSummary.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 border-b-2 border-purple-500/30 pb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  Education
                </h4>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="border-l-4 border-purple-500/50 pl-4 backdrop-blur-[1px]"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-lg font-bold text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{edu.institution}</h5>
                        <span className="text-sm text-purple-300 font-medium drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{edu.period}</span>
                      </div>
                      <p className="text-purple-300 font-medium mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{edu.degree}</p>
                      <p className="text-gray-200 mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{edu.location}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                        {edu.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 border-b-2 border-purple-500/30 pb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  Experience
                </h4>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="border-l-4 border-purple-500/50 pl-4 backdrop-blur-[1px]"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-lg font-bold text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{exp.title}</h5>
                        <span className="text-sm text-purple-300 font-medium drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{exp.period}</span>
                      </div>
                      <p className="text-purple-300 font-medium mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{exp.company}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 border-b-2 border-purple-500/30 pb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  Projects
                </h4>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="border-l-4 border-purple-500/50 pl-4 backdrop-blur-[1px]"
                    >
                      <div className="mb-2">
                        <h5 className="text-lg font-bold text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{project.title}</h5>
                        <p className="text-sm text-purple-300 font-medium drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{project.tech}</p>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 border-b-2 border-purple-500/30 pb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  Skills
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-white mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Technical Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-500/30 text-purple-300 text-sm rounded-full backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-800/50 text-gray-200 text-sm rounded-full backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Concepts</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.concepts.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/30 text-blue-300 text-sm rounded-full backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Download Card */}
           {/* Download Card */}
<div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50">
  <div className="text-center mb-6">
    <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
      <FiDownload className="text-2xl text-purple-300" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Download Resume</h3>
    <p className="text-gray-200 text-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
      Get a detailed version of my resume in PDF format
    </p>
  </div>
  
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/myResume.pdf';
      link.download = 'Faizan_Ahmad_Resume.pdf';
      link.click();
    }}
    className="w-full bg-purple-600/90 hover:bg-purple-700/90 text-white py-3 px-6 rounded-lg transition-colors duration-200 mb-4 backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
  >
    Download PDF
  </motion.button>
  
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="/myResume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex justify-center items-center bg-gray-800/70 hover:bg-gray-700/70 text-white py-3 px-6 rounded-lg transition-colors duration-200 backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
  >
    <FiEye className="inline mr-2" />
    View Resume
  </motion.a>
</div>

            {/* Contact Info */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  <FiMail className="text-purple-300" />
                  <span className="text-gray-200">faizanahmad2020.fa@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  <FiPhone className="text-purple-300" />
                  <span className="text-gray-200">+91 9313924875</span>
                </div>
                <div className="flex items-center space-x-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  <FiMapPin className="text-purple-300" />
                  <span className="text-gray-200">New Delhi, India</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-600/50">
                <h4 className="font-semibold text-white mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Project Links</h4>
                <div className="flex flex-col space-y-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://www.thediet4u.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] text-sm"
                  >
                    Diet Management Platform
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://www.leofit.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] text-sm"
                  >
                    Leofit Global Gym
                  </motion.a>
                </div>
              </div>
            </div>
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

export default Resume;