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
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Placeholder - you would need to add the actual resume file
    link.download = 'Faizan_Ahmad_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="section-padding bg-gradient-to-br from-dark-50 to-dark-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-800 mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
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
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-dark-800 mb-2">Faizan Ahmad</h3>
                <p className="text-xl text-primary-600 mb-4">Web Developer & Data Analyst</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-dark-600">
                  <div className="flex items-center space-x-1">
                    <FiMail className="text-primary-600" />
                    <span>faizan@example.com</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiPhone className="text-primary-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiMapPin className="text-primary-600" />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark-800 mb-4 border-b-2 border-primary-200 pb-2">
                  Professional Experience
                </h4>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="border-l-4 border-primary-500 pl-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-lg font-bold text-dark-800">{exp.title}</h5>
                        <span className="text-sm text-primary-600 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-dark-600 mb-3">{exp.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-dark-600">
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
                <h4 className="text-xl font-bold text-dark-800 mb-4 border-b-2 border-primary-200 pb-2">
                  Skills
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-dark-800 mb-2">Technical Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark-800 mb-2">Soft Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-dark-700 text-sm rounded-full"
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
            {/* Spline Robot */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-dark-800 mb-2">AI Assistant</h3>
                <p className="text-dark-600 text-sm mb-4">
                  Meet my AI assistant - ready to help with your projects!
                </p>
              </div>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://my.spline.design/nexbotrobotcharacterconcept-h4v694wm6zDPyIWBKbjAIHP1/"
                  title="AI Assistant Robot"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Download Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiDownload className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-2">Download Resume</h3>
                <p className="text-dark-600 text-sm">
                  Get a detailed version of my resume in PDF format
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="w-full btn-primary mb-4"
              >
                Download PDF
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-secondary"
              >
                <FiEye className="inline mr-2" />
                Preview Online
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-dark-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMail className="text-primary-600" />
                  <span className="text-dark-600">faizan@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-primary-600" />
                  <span className="text-dark-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-primary-600" />
                  <span className="text-dark-600">New York, USA</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-dark-800 mb-2">Social Links</h4>
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/faizanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <FiGithub className="text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://linkedin.com/in/faizanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <FiLinkedin className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 