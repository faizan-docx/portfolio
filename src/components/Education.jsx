import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      period: '2021 - 2023',
      location: 'New York, USA',
      description: 'Specialized in Software Engineering and Data Science with focus on machine learning algorithms and web development technologies.',
      gpa: '3.9/4.0',
      icon: '🎓',
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Technical University',
      period: '2017 - 2021',
      location: 'Mumbai, India',
      description: 'Comprehensive study of computer science fundamentals, algorithms, data structures, and software development methodologies.',
      gpa: '3.8/4.0',
      icon: '📚',
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-SAA-001',
      icon: '☁️',
    },
    {
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: '2022',
      credential: 'GOOGLE-DATA-001',
      icon: '📊',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credential: 'META-REACT-001',
      icon: '⚛️',
    },
    {
      name: 'Python Programming Certification',
      issuer: 'Coursera',
      date: '2021',
      credential: 'COURSE-PYTHON-001',
      icon: '🐍',
    },
  ];

  const TimelineItem = ({ item, index, isLast }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="relative"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">{item.icon}</span>
          </div>
          {!isLast && (
            <div className="w-0.5 h-16 bg-purple-500/30 mx-auto mt-2"></div>
          )}
        </div>
        
        <div className="flex-1 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
            <span className="text-sm font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
              {item.gpa}
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
            <div className="flex items-center space-x-1">
              <FiBook className="text-purple-400" />
              <span>{item.institution}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiCalendar className="text-purple-400" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiMapPin className="text-purple-400" />
              <span>{item.location}</span>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );

  const CertificationCard = ({ cert, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 card-hover"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-3xl">{cert.icon}</div>
        <div>
          <h4 className="text-lg font-bold text-white">{cert.name}</h4>
          <p className="text-sm text-gray-300">{cert.issuer}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Date:</span>
          <span className="text-sm font-medium text-white">{cert.date}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Credential ID:</span>
          <span className="text-sm font-medium text-purple-400">{cert.credential}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="education" className="section-padding relative bg-gray-900">
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
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
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
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: 180,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-xl"
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
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise 
            in web development and data analysis.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Academic Background
          </h3>
          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <TimelineItem
                key={item.degree}
                item={item}
                index={index}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto">
            <FiAward className="text-4xl text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Continuous Learning
            </h4>
            <p className="text-gray-300">
              I believe in staying updated with the latest technologies and industry trends. 
              Currently pursuing advanced certifications in cloud computing and machine learning 
              to expand my skill set and deliver better solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;