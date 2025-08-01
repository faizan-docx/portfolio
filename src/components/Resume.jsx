import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEye, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of full-stack web applications using React, Node.js, and modern cloud technologies.',
      achievements: [
        'Developed 10+ scalable web applications',
        'Improved application performance by 40%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Corp.',
      period: '2021 - 2022',
      description: 'Performed comprehensive data analysis and created interactive dashboards for business insights.',
      achievements: [
        'Created 50+ data visualization reports',
        'Reduced data processing time by 60%',
        'Implemented automated reporting systems',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Contributed to frontend development and learned modern web technologies.',
      achievements: [
        'Built responsive user interfaces',
        'Collaborated with cross-functional teams',
        'Participated in agile development processes',
      ],
    },
  ];

  const skills = {
    technical: ['React.js', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Analytical Thinking', 'Time Management'],
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
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
            A comprehensive overview of my professional experience, skills, and achievements 
            in web development and data analysis.
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
                <p className="text-xl text-purple-300 mb-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Web Developer & Data Analyst</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-200">
                  <div className="flex items-center space-x-1 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    <FiMail className="text-purple-300" />
                    <span>faizan@example.com</span>
                  </div>
                  <div className="flex items-center space-x-1 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    <FiPhone className="text-purple-300" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-1 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    <FiMapPin className="text-purple-300" />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 border-b-2 border-purple-500/30 pb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  Professional Experience
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
                      <p className="text-gray-200 mb-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">{exp.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                        {exp.achievements.map((achievement, achievementIndex) => (
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
                <div className="grid md:grid-cols-2 gap-6">
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
                    <h5 className="font-semibold text-white mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Soft Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-800/50 text-gray-200 text-sm rounded-full backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
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
                onClick={handleDownload}
                className="w-full bg-purple-600/90 hover:bg-purple-700/90 text-white py-3 px-6 rounded-lg transition-colors duration-200 mb-4 backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
              >
                Download PDF
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-800/70 hover:bg-gray-700/70 text-white py-3 px-6 rounded-lg transition-colors duration-200 backdrop-blur-sm drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
              >
                <FiEye className="inline mr-2" />
                Preview Online
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  <FiMail className="text-purple-300" />
                  <span className="text-gray-200">faizan@example.com</span>
                </div>
                <div className="flex items-center space-x-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  <FiPhone className="text-purple-300" />
                  <span className="text-gray-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                  <FiMapPin className="text-purple-300" />
                  <span className="text-gray-200">New York, USA</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-600/50">
                <h4 className="font-semibold text-white mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Social Links</h4>
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/faizanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
                  >
                    <FiGithub className="text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://linkedin.com/in/faizanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-200 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
                  >
                    <FiLinkedin className="text-xl" />
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